const url = process.argv[2];
const request = require('request');
const key = "https://api.thecatapi.com/v1/breeds/search?q=" + url.slice(0, 3).toLowerCase();


request(key, (error, response, body) => {
  const data = JSON.parse(body);
  try {
    if (data.length < 1) {
      return console.log("Breed not found!");
    }
    console.log('Description:', data.map(x => x.description));
  }
  catch (error) {
    console.log('error:', error.message);
  }
});

