const https = require("https");
const options = {
  'hostname': 'arcane-stream-45843.herokuapp.com',
  'path': '/categories/',
  'headers': {
    'Content-Type': 'application/json'
  }
};

const getSandboxData = async () => {
  return await https.get(options, function (res) {
    const chunks = [];
  
    res.on("data", function (chunk) {
      chunks.push(chunk);
    });
  
    return res.on("end", function (chunk) {
      const body = Buffer.concat(chunks);
      const x = body.toString();
      return x;
    });
  
    res.on("error", function (error) {
      console.error(error);
    });
  });
};

module.exports = { getSandboxData };