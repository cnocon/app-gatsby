const https = require("https");
const sandboxData = {};

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

const dataPromise = new Promise((resolve, reject) => { 
  categoriesPromise.then(categoryIds => {
    const array = JSON.parse(categoryIds);
    array.forEach((pair, i) => {
      const id = pair._id;
      [{path: `/categories/${id}`, key: 'category'},
      {path: `/categories/${id}/questions`, key: 'categoryQuestions'}
      ].forEach(set => {
        const options = {
          'hostname': 'arcane-stream-45843.herokuapp.com',
          'path': set.path,
          'headers': { 'Content-Type': 'application/json' }
        };
        https.get(options, res => {
          const chunks = [];
          res.on("data", chunk => chunks.push(chunk));
          res.on("end", () => {
            sandboxData[`${id}`] = {};
            const str = Buffer.concat(chunks).toString();
            sandboxData[`${id}`][set.key] = JSON.parse(str);
            if (i === categoryIds.length - 1) {
              resolve(sandboxData);
            };
          });
          res.on("error", error => reject(error));
        });
      });
    });
  });
});

module.exports = sandboxData;
