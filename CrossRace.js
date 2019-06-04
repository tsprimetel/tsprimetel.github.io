var FilipposKarayiannis = 100;
var GeorgeZafeiropoulos = 100;
var MarinosMourouzis = 100;
var GeorgeChristodoulou = 100;
var SteliosAngeli = 100;
var AlexisMitas = 100;
var AndreasAnastasiou = 100;
var AndraKyprianou = 100;
var ChristosCharalampous = 100;
var DemetrisGeorgiou = 100;
var EftychiaPhylactide = 100;
var FoteinyKyriakou = 100;
var GeorgeCharalampous = 100;
var GeorgeLazari = 100;
var GeorgeLouca = 100;
var KonstantinosTsitzilonis = 100;
var KonstantinosKosta = 100;
var MariosParaschou = 100;
var MichalisKyprianou = 100;
var MichalisSkoutaris = 100;
var PaniCharalampous = 100;
var ParisLoizou = 100;
var AndreasIoannou = 100;

var fil;
var zaf;
var mm;
var gchr;
var sa;
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
var ai;

 var filX = 0;
 var zafX = 0;
 var mmX = 0;
 var gchrX = 0;
 var saX = 0;
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
 var aiX = 0;
 


function preload() {
  // Images repo
  fil = loadImage('fka.PNG');
  zaf = loadImage('gz.PNG');
  mm = loadImage('mm.PNG');
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
  


}
function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  
  

  
  
}


function draw() {
  background(13,150,20);
  
  fill(255);
  noStroke();
  var fnone = height*0.08;
  while(fnone < height){
  rect(0,fnone,width*0.75,1);
    fnone = fnone + height*0.04;
  }
  
  // Finish line Draw
  fill(255);
  noStroke();
  var fnone = height*0.08;
  while(fnone < height){
  rect(width*0.75,fnone,width*0.01,height*0.02);
    fnone = fnone + height*0.04;
  }
  
var fntwo = height*0.10;
  while(fntwo < height){
  rect(width*0.76,fntwo,width*0.01,height*0.02);
    fntwo = fntwo + height*0.04;
  }
  fill(0);
  var fnone = height*0.10;
  while(fnone < height){
  rect(width*0.75,fnone,width*0.01,height*0.02);
    fnone = fnone + height*0.04;
  }
  
var fntwo = height*0.08;
  while(fntwo < height){
  rect(width*0.76,fntwo,width*0.01,height*0.02);
    fntwo = fntwo + height*0.04;
  }
  
  // Agents
  fill(255);
  
  image(fil,filX,height*0.08,width*0.020,height*0.025);
  if(filX < FilipposKarayiannis*0.01*width*0.75){
	    filX = filX + 2 }
		
  image(zaf,zafX,height*0.12,width*0.020,height*0.025);
  if(zafX < GeorgeZafeiropoulos*0.01*width*0.75){
	    zafX = zafX + 2 }
		
  image(mm,mmX,height*0.16,width*0.020,height*0.025);
  if(mmX < MarinosMourouzis*0.01*width*0.75){
	    mmX = mmX + 2 }
		
  image(gchr,gchrX,height*0.20,width*0.020,height*0.025);
  if(gchrX < GeorgeChristodoulou*0.01*width*0.75){
	    gchrX = gchrX + 2 }
 
  image(sa,saX,height*0.24,width*0.020,height*0.025);
  if(saX < SteliosAngeli*0.01*width*0.75){
	    saX = saX + 2
  }		
		
  image(am,amX,height*0.28,width*0.020,height*0.025);
  if(amX < AlexisMitas*0.01*width*0.75){
	  amX = amX +2;
  }
  
  image(aa,aaX,height*0.32,width*0.020,height*0.025);
  if(aaX < AndreasAnastasiou*0.01*width*0.75){
	  aaX = aaX + 2;
  }
  
  image(ak,akX,height*0.36,width*0.020,height*0.025);
  if(akX < AndraKyprianou*0.01*width*0.75){
	  akX = akX + 2;
  }
  
  image(ccha,cchaX,height*0.40,width*0.020,height*0.025);
  if(cchaX < ChristosCharalampous*0.01*width*0.75){
	  cchaX = cchaX +2;
  }
  
  image(dg,dgX,height*0.44,width*0.020,height*0.025);
  if(dgX < DemetrisGeorgiou*0.01*width*0.75){
	  dgX = dgX +2;
  }
  
  image(ef,efX,height*0.48,width*0.020,height*0.025);
  if(efX < EftychiaPhylactide*0.01*width*0.75){
	  efX = efX +2;
  }
  
  image(fot,fotX,height*0.52,width*0.020,height*0.025);
  if(fotX < FoteinyKyriakou*0.01*width*0.75){
	  fotX = fotX +2;
  }
  
  image(gcha,gchaX,height*0.56,width*0.020,height*0.025);
  if(gchaX < GeorgeCharalampous*0.01*width*0.75){
	  gchaX = gchaX +2;
  }
  
  rect(glaX,height*0.60,width*0.020,height*0.025);
  if(glaX < GeorgeLazari*0.01*width*0.75){
	  glaX = glaX +2;
  }
  
  image(glou,glouX,height*0.64,width*0.020,height*0.025);
  if(glouX < GeorgeLouca*0.01*width*0.75){
	  glouX = glouX +2;
  }
  
  image(kt,ktX,height*0.68,width*0.020,height*0.025);
  if (ktX < KonstantinosTsitzilonis*0.01*width*0.75){
	  ktX = ktX +2;
  }
  
  image(kk,kkX,height*0.72,width*0.020,height*0.025);
  if (kkX < KonstantinosKosta*0.01*width*0.75){
	  kkX = kkX +2;	  
  }
  
  image(mp,mpX,height*0.76,width*0.020,height*0.025);
  if (mpX < MariosParaschou*0.01*width*0.75){
	  mpX = mpX +2;;
  }
  
  image(mk,mkX,height*0.80,width*0.020,height*0.025);
   if(mkX < MichalisKyprianou*0.01*width*0.75){
	   mkX = mkX +2;
   }
  
  image(ms,msX,height*0.84,width*0.020,height*0.025);
   if(msX < MichalisSkoutaris*0.01*width*0.75){
	   msX = msX +2;
   }
  
  image(pc,pcX,height*0.88,width*0.020,height*0.025);
   if(pcX < PaniCharalampous*0.01*width*0.75){
	   pcX = pcX + 2;
   }
 
 image(pl,plX,height*0.92,width*0.020,height*0.025);
  if(plX < ParisLoizou*0.01*width*0.75){
	    plX = plX + 2 }
		
 image(ai,aiX,height*0.96,width*0.020,height*0.025);
  if(aiX < AndreasIoannou*0.01*width*0.75){
	    aiX = aiX + 2 }
		
		
	
		
 // Text
 textSize(7);
 textStyle(BOLD);
 fill(219,204,253);

 text("Cross Sales", width*0.825, height*0.04);
 
 fill(0);
 
 text(FilipposKarayiannis, width*0.80,height*0.1);
 text("Filippos Karayiannis", width*0.85,height*0.1);
 
 text(GeorgeZafeiropoulos, width*0.80,height*0.137);
 text("George Zafeiropoulos", width*0.85,height*0.137);
 
 text(MarinosMourouzis, width*0.80,height*0.18);
 text("Marinos Mourouzis", width*0.85,height*0.18);
 
 text(GeorgeChristodoulou, width*0.80,height*0.22);
 text("George Christodoulou", width*0.85,height*0.22);

 text(SteliosAngeli,  width*0.80,height*0.260);
 text("Stelios Angeli", width*0.85,height*0.260);
 
 text(AlexisMitas, width*0.80,height*0.300);
 text("Alexis Mitas", width*0.85,height*0.300);
 
 text(AndreasAnastasiou, width*0.80,height*0.340);
 text("Andreas Anastasiou", width*0.85,height*0.340);
 
 text(AndraKyprianou, width*0.80,height*0.380);
 text("Andria Kyprianou", width*0.85,height*0.380);
 
 text(ChristosCharalampous, width*0.80,height*0.420);
 text("Christos Charalampous", width*0.85,height*0.420);
 
 text(DemetrisGeorgiou, width*0.80,height*0.460);
 text("Demetris Georgiou", width*0.85,height*0.460);
 
 text(EftychiaPhylactide, width*0.80,height*0.500);
 text("Eftychia Phylactide", width*0.85,height*0.500);

 text(FoteinyKyriakou, width*0.80,height*0.540);
 text("Foteini Kyriakou", width*0.85,height*0.540);

 text(GeorgeCharalampous, width*0.80,height*0.580);
 text("George Charalampous", width*0.85,height*0.580);

 text(GeorgeLazari, width*0.80,height*0.620);
 text("George Lazari", width*0.85,height*0.620);

 text(GeorgeLouca, width*0.80,height*0.660);
 text("George Louca", width*0.85,height*0.660);

 text(KonstantinosTsitzilonis, width*0.80,height*0.700);
 text("Konstantinos Tsitzilonis", width*0.85,height*0.700);

 text(KonstantinosKosta, width*0.80,height*0.740);
 text("Konstantinos Kosta", width*0.85,height*0.740);

 text(MariosParaschou, width*0.80,height*0.780);
 text("Marios Paraschou", width*0.85,height*0.780);

 text(MichalisKyprianou, width*0.80,height*0.820);
 text("Michalis Kyprianou", width*0.85,height*0.820);

 text(MichalisSkoutaris, width*0.80,height*0.860);
 text("Michalis Skoutaris", width*0.85,height*0.860);

 text(PaniCharalampous, width*0.80,height*0.900);
 text("Pani Charalampous", width*0.85,height*0.900);

 text(ParisLoizou, width*0.80,height*0.940);
 text("Paris Loizou", width*0.85,height*0.940);

 text(AndreasIoannou,  width*0.80,height*0.980);
 text("Andreas Ioannou", width*0.85,height*0.980);



  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}
function windowResized() {
 canvas = createCanvas(windowWidth,windowHeight);
  
  

  
  
}
