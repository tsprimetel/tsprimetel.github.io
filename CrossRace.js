var AlexisMitas = 90;
var AndreasAnastasiou = 4;
var AndraKyprianou = 5;
var ChristosCharalampous = 10;
var DemetrisGeorgiou = 2;
var EftychiaPhylactide = 6;
var FoteinyKyriakou = 5;
var GeorgeCharalampous = 0;
var GeorgeLazari = 12;
var GeorgeLouca = 14;
var KonstantinosTsitzilonis = 3;
var KonstantinosKosta = 7;
var MariosParaschou = 18;
var MichalisKyprianou = 23;
var MichalisSkoutaris = 2;
var PaniCharalampous = 6;
var ParisLoizou = 18;
var GeorgeChristodoulou = 73;
var SteliosAngeli = 9;


let am;
let aa;
let ak;
let ccha;
let dg;
let ef;
let fk;
let gcha;
let glou;
let kt;
let kk;
let mp; 
let mk;
let ms;
let pc;
let gchr;
let sa;



function preload() {
  // Images repo
  
  am = loadImage('am.png');
  aa = loadImage('aa.PNG');
  ak = loadImage('ak.PNG');
  ccha = loadImage('ccha.PNG');
  dg = loadImage('dg.png');
  ef = loadImage('ef.PNG');
  fk = loadImage('fk.PNG');
  gcha = loadImage('gcha.PNG');
  glou = loadImage('glou.PNG');
  kt = loadImage('kt.PNG');
  kk = loadImage('kk.PNG');
  mp = loadImage('mp.PNG');
  mk = loadImage('mk.PNG');
  ms = loadImage('ms.PNG');
  pc = loadImage('pc.PNG');
  gchr = loadImage('gchr.PNG');
  sa = loadImage('sa.PNG');





}
function setup() {
  createCanvas(1150,1500);
  
  

  
  
}

function draw() {
  background(13,150,20);
  
  // Agents
  fill(255);
  
  image(am,AlexisMitas*10,50,50,50);
  image(aa,AndreasAnastasiou*10,125,50,50);
  image(ak,AndraKyprianou*10,200,50,50);
  image(ccha,ChristosCharalampous*10,275,50,50);
  image(dg,DemetrisGeorgiou*10,350,50,50);
  image(ef,EftychiaPhylactide*10,425,50,50);
  image(fk,FoteinyKyriakou*10,500,50,50);
  image(gcha,GeorgeCharalampous*10,575,50,50);
  rect(GeorgeLazari*10,650,50,50);
  image(glou,GeorgeLouca*10,725,50,50);
  image(kt,KonstantinosTsitzilonis*10,800,50,50);
  image(kk,KonstantinosKosta*10,875,50,50);
  image(mp,MariosParaschou*10,950,50,50);
  image(mk,MichalisKyprianou*10,1025,50,50);
  image(ms,MichalisSkoutaris*10,1100,50,50);
  image(pc,PaniCharalampous*10,1175,50,50);
  rect(ParisLoizou*10,1250,50,50);
  image(gchr,GeorgeChristodoulou*10,1325,50,50);
  image(sa,SteliosAngeli*10,1400,50,50);

  // Lanes
  var lanes = 50;
  while(lanes < height){
	  rect(-10, width,1,1);
	  lanes = lanes +50;
  }
  
  
  
  
  
  
  // Finish line Draw
  fill(255);
	noStroke();
  
  var fnone = 0;
  while(fnone < height){
  rect(1000,fnone,25,25);
    fnone = fnone + 50;
  }
  
  var fntwo = 25;
  while(fntwo < height){
  rect(1025,fntwo,25,25);
    fntwo = fntwo + 50;
  }
  
  
  
}
