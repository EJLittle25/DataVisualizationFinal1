let xpos = 0;
let ypos= 0;


function prelaod() {
    table = loadTable("data/data.csv", "header");
}

function setup(){
    createCanvas(800, 800);
    loadData();
}


function draw(){
    
}

function loadData(){
    bubbles = []

    for(var i =0; i<table.getRowCount(); i++){
        var row = table.getRow(i);

        x = row.get("x");
        y = row.get("y");
        diamter = row.get("diameter");
        count = row.get("count");
        emotion = row.get("emotion");

        bubbles[i] = new Bubble(x, y, dimater, count, emotion);
    }
}

class Bubble{
    constructor(x, y, diameter, c, e){
        this.x = Number(x);
        this.y = Number(x);
        this.diamter = Number(diamter);
        this.count = c;
        this.emotion = e;
        this.over = false;
        this.x_map = map(this.x, 72, 427, 100, 700);
        this.y_map = map(this.y, 12, 512, 100, 700);
        
    }

}