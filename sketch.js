var a;

var b;

function setup(){
      createCanvas(400,400);
      a = 1;
      b = 2;
}

function draw(){
      background("white");

      console.log(a);
      console.log(b);
}

function mousePressed(){
      var ans = a+b;
      console.log(ans);
      text(ans,200,200);
}