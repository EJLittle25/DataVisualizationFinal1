let table;

function preload() {
  table = loadTable('data/basketball.csv', 'header');
}

var chart = c3.generate({
  data: {
    columns: [
        ['data1', 100],
    ],
    type : 'donut',
    onclick: function (d, i) { console.log("onclick", d, i); },
    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
},
donut: {
    title: "Let's Go Duke!"
}
});
function setup(){
setTimeout(function () {
  chart.load({
      columns: [
          [table.get(1,1), table.get(1,"PTS")],
          [table.get(0,1), table.get(0,"PTS")],
          [table.get(2,1), table.get(2,"PTS")],
          [table.get(3,1), table.get(3,"PTS")],
          [table.get(4,1), table.get(4,"PTS")],
          [table.get(5,1), table.get(5,"PTS")],
          [table.get(6,1), table.get(6,"PTS")],
          [table.get(7,1), table.get(7,"PTS")],
          [table.get(8,1), table.get(8,"PTS")]
      ]
  });
}, 1500);
}


setTimeout(function () {
  chart.unload({
      ids: 'data1'
  });
  chart.unload({
      ids: 'data2'
  });
}, 2500);