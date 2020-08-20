const https = require("https");
const flashCardsData = {};

const categoriesPromise = new Promise((resolve, reject) => {
  https.get({
    'hostname': 'arcane-stream-45843.herokuapp.com',
    'path': '/categories?property=_id',
    'headers': { 'Content-Type': 'application/json' }}, 
    res => {
      const chunks = [];
      res.on("data", async chunk => {
        chunks.push(await chunk);
        resolve(Buffer.concat(chunks).toString());
      });
      res.on("error", error => reject(error));
    }
  );
});

new Promise((resolve, reject) => { 
  categoriesPromise.then(categoryIds => {
    const array = JSON.parse(categoryIds);
    array.forEach((pair, i) => {
      const id = pair._id;
      [{path: `/categories/${id}`, key: 'category'},
      {path: `/categories/${id}/questions`, key: 'categoryQuestions'}
      ].forEach(set => {
        const options = {'path': set.path, 'hostname': 'arcane-stream-45843.herokuapp.com', 'headers': { 'Content-Type': 'application/json' }};
        https.get(options, res => {
          const chunks = [];
          res.on("data", chunk => chunks.push(chunk));
          res.on("end", () => {
            if (!flashCardsData[id]) {
              flashCardsData[id] = {};
            }
            const str = Buffer.concat(chunks).toString();
            flashCardsData[id][set.key] = JSON.parse(str);
            if (i === categoryIds.length - 1) {
              resolve(flashCardsData);
            };
          });
          res.on("error", error => reject(error));
        });
      });
    });
  });
});

module.exports = flashCardsData;
