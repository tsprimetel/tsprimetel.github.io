var AlexisMitas = 0;
var AndreasAnastasiou = 0;
var AndraKyprianou = 0;
var ChristosCharalampous = 0;
var DemetrisGeorgiou = 0;
var EftychiaPhylactide = 0;
var FoteinyKyriakou = 0;
var GeorgeCharalampous = 0;
var GeorgeLazari = 0;
var GeorgeLouca = 0;
var KonstantinosTsitzilonis = 0;
var KonstantinosKosta = 0;
var MariosParaschou = 0;
var MichalisKyprianou = 0;
var MichalisSkoutaris = 0;
var PaniCharalampous = 0;
var ParisLoizou = 0;
var GeorgeChristodoulou = 0;
var SteliosAngeli = 0;
var AndreasIoannou = 0;
var FilipposKarayiannis = 0;
var GeorgeZafeiropoulos = 0;

var am;
var aa;
var ak;
var ccha;
var dg;
var ef;
var fot;
var gcha;
var glou;
var kt;
var kk;
var mp; 
var mk;
var ms;
var pc;
var pl;
var gchr;
var sa;
var ai;
var fil;
var zaf;

 var amX = 0;
 var aaX= 0;
 var akX= 0;
 var cchaX = 0;
 var dgX = 0;
 var efX = 0;
 var fotX = 0;
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
 var aiX = 0;
 var filX = 0;
 var zafX = 0;


function preload() {
  // Images repo
  
  am = loadImage('am.png');
  aa = loadImage('aa.PNG');
  ak = loadImage('ak.PNG');
  ccha = loadImage('ccha.PNG');
  dg = loadImage('dg.png');
  ef = loadImage('ef.PNG');
  fot = loadImage('fk.PNG');
  gcha = loadImage('gcha.PNG');
  glou = loadImage('glou.PNG');
  kt = loadImage('kt.PNG');
  kk = loadImage('kk.PNG');
  mp = loadImage('mp.PNG');
  mk = loadImage('mk.PNG');
  ms = loadImage('ms.PNG');
  pc = loadImage('pc.PNG');
  pl = loadImage('pl.png');
  gchr = loadImage('gchr.PNG');
  sa = loadImage('sa.PNG');
  ai = loadImage('ai.PNG');
  fil = loadImage('fka.PNG');
  zaf = loadImage('gz.PNG');


}
function setup() {
  createCanvas(windowWidth,1725);
  
  

  
  
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
  
  image(fot,fotX,500,50,50);
  if(fotX < FoteinyKyriakou*10){
	  fotX = fotX +2;
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
 
 image(pl,plX,1250,50,50);
  if(plX < ParisLoizou*10){
	    plX = plX + 2 }
 
 
 image(gchr,gchrX,1325,50,50);
  if(gchrX < GeorgeChristodoulou*10){
	    gchrX = gchrX + 2 }
 
 image(sa,saX,1400,50,50);
  if(saX < SteliosAngeli*10){
	    saX = saX + 2 }
		
 image(ai,aiX,1475,50,50);
  if(aiX < AndreasIoannou*10){
	    aiX = aiX + 2 }
		
 image(fil,filX,1550,50,50);
  if(filX < FilipposKarayiannis*10){
	    filX = filX + 2 }
		
image(zaf,zafX,1625,50,50);
  if(zafX < GeorgeZafeiropoulos*10){
	    zafX = zafX + 2 }		
	
		
 // Text
 textSize(25);
 textStyle(BOLD);
 fill(219,204,253);

 text("Cross Sales", 1100, 30);
 fill(0);
 text(AlexisMitas, 1100,90);
 text("Alexis Mitas", 1200,90);
 text(AndreasAnastasiou, 1100,165);
 text("Andreas Anastasiou", 1200,165);
 text(AndraKyprianou, 1100,240);
 text("Andria Kyprianou", 1200,240);
 text(ChristosCharalampous, 1100,315);
 text("Christos Charalampous", 1200,315);
 text(DemetrisGeorgiou, 1100,390);
 text("Demetris Georgiou", 1200,390);
 text(EftychiaPhylactide, 1100,465);
  text("Eftychia Phylactide", 1200,465);

 text(FoteinyKyriakou, 1100,540);
 text("Foteini Kyriakou", 1200,540);

 text(GeorgeCharalampous, 1100,615);
 text("George Charalampous", 1200,615);

 text(GeorgeLazari, 1100,690);
 text("George Lazari", 1200,690);

 text(GeorgeLouca, 1100,765);
 text("George Louca", 1200,765);

 text(KonstantinosTsitzilonis, 1100,840);
 text("Konstantinos Tsitzilonis", 1200,840);

 text(KonstantinosKosta, 1100,915);
 text("Konstantinos Kosta", 1200,915);

 text(MariosParaschou, 1100,980);
 text("Marios Paraschou", 1200,980);

 text(MichalisKyprianou, 1100,1055);
 text("Michalis Kyprianou", 1200,1055);

 text(MichalisSkoutaris, 1100,1130);
 text("Michalis Skoutaris", 1200,1130);

 text(PaniCharalampous, 1100,1205);
 text("Pani Charalampous", 1200,1205);

 text(ParisLoizou, 1100,1280);
 text("Paris Loizou", 1200,1280);

 text(GeorgeChristodoulou, 1100,1355);
 text("George Christodoulou", 1200,1355);

 text(SteliosAngeli, 1100,1430);
 text("Stelios Angeli", 1200,1430);

 text(AndreasIoannou, 1100,1505);
 text("Andreas Ioannou", 1200,1505);

 text(FilipposKarayiannis, 1100,1580);
 text("Filippos Karayiannis", 1200,1580);

 text(GeorgeZafeiropoulos, 1100,1655);
 text("George Zafeiropoulos", 1200,1655);

  
  
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
