var AlexisMitas = 90;
var AndreasAnastasiou = 4;
var AndraKyprianou = 5;
var ChristosCharalampous = 13;
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
var SteliosAngeli = 50;


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

 var amX = 0;
 var aaX= 0;
 var akX= 0;
 var cchaX = 0;
 var dgX = 0;
 var efX = 0;
 var fkX = 0;
 var gchaX = 0;
 var glaX = 0;
 var glouX = 0;
 var ktX = 0;
 var kkX = 0;
 var mpX = 0;
 var mkX = 0;
 var msX = 0;
 var pcX = 0;
 var plX = 0;
 var gchrX = 0;
 var saX = 0;



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
  
  
  image(am,amX,50,50,50);
  if(amX < AlexisMitas*10){
	  amX = amX +2;
  }
  
  image(aa,aaX,125,50,50);
  if(aaX < AndreasAnastasiou*10){
	  aaX = aaX + 2;
  }
  
  image(ak,akX,200,50,50);
  if(akX < AndraKyprianou*10){
	  akX = akX + 2;
  }
  
  image(ccha,cchaX,275,50,50);
  if(cchaX < ChristosCharalampous*10){
	  cchaX = cchaX +2;
  }
  
  image(dg,dgX,350,50,50);
  if(dgX < DemetrisGeorgiou*10){
	  dgX = dgX +2;
  }
  
  image(ef,efX,425,50,50);
  if(efX < EftychiaPhylactide*10){
	  efX = efX +2;
  }
  
  image(fk,fkX,500,50,50);
  if(fkX < FoteinyKyriakou*10){
	  fkX = fkX +2;
  }
  
  image(gcha,gchaX,575,50,50);
  if(gchaX < GeorgeCharalampous*10){
	  gchaX = gchaX +2;
  }
  
  rect(glaX,650,50,50);
  if(glaX < GeorgeLazari*10){
	  glaX = glaX +2;
  }
  
  image(glou,glouX,725,50,50);
  if(glouX < GeorgeLouca*10){
	  glouX = glouX +2;
  }
  
  image(kt,ktX,800,50,50);
  if (ktX < KonstantinosTsitzilonis*10){
	  ktX = ktX +2;
  }
  
  image(kk,kkX,875,50,50);
  if (kkX < KonstantinosKosta*10){
	  kkX = kkX +2;	  
  }
  
  image(mp,mpX,950,50,50);
  if (mpX < MariosParaschou*10){
	  mpX = mpX +2;;
  }
  
  image(mk,mkX,1025,50,50);
   if(mkX < MichalisKyprianou*10){
	   mkX = mkX +2;
   }
  
  image(ms,msX,1100,50,50);
   if(msX < MichalisSkoutaris*10){
	   msX = msX +2;
   }
  
  image(pc,pcX,1175,50,50);
   if(pcX < PaniCharalampous*10){
	   pcX = pcX + 2;
   }
 
 rect(plX,1250,50,50);
  if(plX < ParisLoizou*10){
	    plX = plX + 2 }
 
 
 image(gchr,gchrX,1325,50,50);
  if(gchrX < GeorgeChristodoulou*10){
	    gchrX = gchrX + 2 }
 
 image(sa,saX,1400,50,50);
  if(saX < SteliosAngeli*10){
	    saX = saX + 2 }
		
 // Text
 textSize(25);
 textStyle(BOLD);
 fill(219,204,253);

 text("Cross Sales", 1000, 30);
 fill(0);
 text(AlexisMitas, 1100,90);
 text(AndreasAnastasiou, 1100,165);
 text(AndraKyprianou, 1100,240);
 text(ChristosCharalampous, 1100,315);
 text(DemetrisGeorgiou, 1100,390);
 text(EftychiaPhylactide, 1100,465);
 text(FoteinyKyriakou, 1100,540);
 text(GeorgeCharalampous, 1100,615);
 text(GeorgeLazari, 1100,690);
 text(GeorgeLouca, 1100,765);
 text(KonstantinosTsitzilonis, 1100,840);
 text(KonstantinosKosta, 1100,915);
 text(MariosParaschou, 1100,980);
 text(MichalisKyprianou, 1100,1055);
 text(MichalisSkoutaris, 1100,1130);
 text(PaniCharalampous, 1100,1205);
 text(ParisLoizou, 1100,1280);
 text(GeorgeChristodoulou, 1100,1355);
 text(SteliosAngeli, 1100,1430);


  
  
  
  // Lanes
  var lanes = 50;
  while(lanes < height){
	  rect(-10, width,1,1);
	  lanes = lanes +50;
  }
  
  
  
  
  
  
  // Finish line Draw
  fill(255);
  noStroke();
  var fnone = 50;
  while(fnone < height){
  rect(1000,fnone,25,25);
    fnone = fnone + 50;
  }
  
  var fntwo = 75;
  while(fntwo < height){
  rect(1025,fntwo,25,25);
    fntwo = fntwo + 50;
  }
  fill(0);
  var fnBone = 50;
  while(fnBone < height){
  rect(1025,fnBone,25,25);
    fnBone = fnBone + 50;
  }
   var fnBtwo = 75;
  while(fnBtwo < height){
  rect(1000,fnBtwo,25,25);
    fnBtwo = fnBtwo + 50;
  }
  
  
  
  
  
  
}
