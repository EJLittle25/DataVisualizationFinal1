var json;

function preload() {
  json = loadJSON('https://jsonplaceholder.typicode.com/posts');
}

function setup() {
  createCanvas(800, 800);
  background(0);

  // Load the XML document
  var title = json[0].title;
  var body = json[0].body;
  background(255);
  fill(0);
  text(String(title), width/2, 10, 180, 190);
  text(String(body), width/2, 300, 180, 190)
}