


let imageMariosParaschou,MariosParaschou;
let imageDimitrisGeorgiou,DimitrisGeorgiou;
let imageAntreasAnastasiou,AntreasAnastasiou;
let imageAntriaKyprianou,AntriaKyprianou;
let imageEftychiaPhylactide,EftychiaPhylactide;
let imageFiliposKarayiannis,FiliposKarayiannis;
let imageGeorgeCharalampous,GeorgeCharalampous;
let imageGeorgeChristodoulou,GeorgeChristodoulou;
let imageGeorgeZafeiropoulos,GeorgeZafeiropoulos;
let imageKonstantinosKosta,KonstantinosKosta;
let imageKonstantinosTsitzilonis,KonstantinosTsitzilonis;
let imageMichalisKyprianou,MichalisKyprianou;
let imageMichalisSkoutaris,MichalisSkoutaris;
let imagePanagiotaCharalampous,PanagiotaCharalampous;
let imageSteliosAngeli,SteliosAngeli;
let imageGeorgeLazari,GeorgeLazari;
let imageFrixosKatsampas,FrixosKatsampas;
let imageAndreasChristodoulou,AndreasChristodoulou;
let imageEleniSpyrou,EleniSpyrou;
let imageMariosIordanous,MariosIordanous;
let imageMichalisChatzipapa,MichalisChatzipapa;



let img;
let myFont;





function preload() {
 
  imageDimitrisGeorgiou = loadImage('assets/imageDimitrisGeorgiou.png');
  imageMariosParaschou = loadImage('assets/imageMariosParaschou.png');
  imageAntreasAnastasiou = loadImage('assets/imageAntreasAnastasiou.png');
  imageAntriaKyprianou = loadImage('assets/imageAntriaKyprianou.png');
  imageEftychiaPhylactide  = loadImage('assets/imageEftychiaPhylactide.png');
  imageFiliposKarayiannis = loadImage('assets/imageFiliposKarayiannis.png');
  imageGeorgeCharalampous = loadImage('assets/imageGeorgeCharalampous.png');
  imageGeorgeChristodoulou  = loadImage('assets/imageGeorgeChristodoulou.png');
  imageGeorgeZafeiropoulos  = loadImage('assets/imageGeorgeZafeiropoulos.png');
  imageKonstantinosKosta = loadImage('assets/imageKonstantinosKosta.png');
  imageKonstantinosTsitzilonis = loadImage('assets/imageKonstantinosTsitzilonis.png');
  imageMichalisKyprianou  = loadImage('assets/imageMichalisKyprianou.png');
  imageMichalisSkoutaris   = loadImage('assets/imageMichalisSkoutaris.png');
  imagePanagiotaCharalampous  = loadImage('assets/imagePanagiotaCharalampous.png');
  imageSteliosAngeli = loadImage('assets/imageSteliosAngeli.png');
  imageGeorgeLazari =  loadImage('assets/imageGeorgeLazari.png');
  imageFrixosKatsampas  =  loadImage('assets/imageFrixosKatsampas.png');
  imageAndreasChristodoulou =  loadImage('assets/imageAndreasChristodoulou.png');
  imageEleniSpyrou =  loadImage('assets/imageEleniSpyrou.png');
  imageMariosIordanous =  loadImage('assets/template.png');
  imageMichalisChatzipapa =  loadImage('assets/imageMichalisChatzipapa.png');

  img = loadImage('assets/background.png');
  myFont = loadFont('assets/veteran.ttf');

}
function setup() {
    canvas = createCanvas(windowWidth,windowHeight); 


    DimitrisGeorgiou = new Agents("Dimitris Georgiou",imageDimitrisGeorgiou,0,9);
    MariosParaschou = new Agents("Marios Paraschou",imageMariosParaschou,2,6);
    AntreasAnastasiou = new Agents("Antreas Anastasiou",imageAntreasAnastasiou,0,15);
    AntriaKyprianou = new Agents("Antria Kyprianou",imageAntriaKyprianou,2,8);
    EftychiaPhylactide  = new Agents("EftychiaPhylactide",imageEftychiaPhylactide,0,5);
    FiliposKarayiannis  = new Agents("Filipos Karayiannis",imageFiliposKarayiannis,0,2);
    GeorgeCharalampous = new Agents("George Charalampous",imageGeorgeCharalampous,0,7);
    GeorgeChristodoulou = new Agents("George Christodoulou",imageGeorgeChristodoulou,0,4);
    GeorgeZafeiropoulos  = new Agents("George Zafeiropoulos",imageGeorgeZafeiropoulos,0,1);
    KonstantinosKosta = new Agents("Konstantinos Kosta",imageKonstantinosKosta,25,10);
    KonstantinosTsitzilonis = new Agents("Konstantinos Tsitzilonis",imageKonstantinosTsitzilonis,2,11);
    MichalisKyprianou   = new Agents("Michalis Kyprianou",imageMichalisKyprianou,6,12);
    MichalisSkoutaris   = new Agents("Michalis Skoutaris",imageMichalisSkoutaris,1,13);
    PanagiotaCharalampous = new Agents("Pani Charalampous",imagePanagiotaCharalampous,2,14);
    SteliosAngeli  = new Agents("Stelios Angeli",imageSteliosAngeli,0,3);
    GeorgeLazari = new Agents("George Lazari",imageGeorgeLazari,0,16);
    FrixosKatsampas = new Agents("Frixos Katsampas",imageFrixosKatsampas,0,17);
    AndreasChristodoulou = new Agents("Andreas Christodoulou",imageAndreasChristodoulou,0,18);
    EleniSpyrou = new Agents("Eleni Spyrou",imageEleniSpyrou,0,19);
    MariosIordanous = new Agents("Marios Iordanous",imageMariosIordanous,0,20);
    MichalisChatzipapa  = new Agents("Michalis Chatzipapa",imageMichalisChatzipapa,0,21);

}

function draw() {
    background(img);
    textFont(myFont);

    fill(0);
    textAlign(CENTER);
    text("CROSS SALES",windowWidth * 0.5,windowHeight * 0.05);
    noFill();
    textAlign(LEFT);


    DimitrisGeorgiou.show(); DimitrisGeorgiou.move();     
    MariosParaschou.show(); MariosParaschou.move();  
    AntreasAnastasiou.show();AntreasAnastasiou.move();
    AntriaKyprianou.show(); AntriaKyprianou.move();
    EftychiaPhylactide.show(); EftychiaPhylactide.move();
    FiliposKarayiannis.show(); FiliposKarayiannis.move();
    GeorgeCharalampous.show(); GeorgeCharalampous.move();
    GeorgeChristodoulou.show(); GeorgeChristodoulou.move();
    GeorgeZafeiropoulos.show(); GeorgeZafeiropoulos.move();
    KonstantinosKosta.show(); KonstantinosKosta.move();
    KonstantinosTsitzilonis.show(); KonstantinosTsitzilonis.move();
    MichalisKyprianou.show(); MichalisKyprianou.move();
    MichalisSkoutaris.show(); MichalisSkoutaris.move();
    PanagiotaCharalampous.show(); PanagiotaCharalampous.move();
    SteliosAngeli.show(); SteliosAngeli.move();
    GeorgeLazari.show(); GeorgeLazari.move();
    FrixosKatsampas.show(); FrixosKatsampas.move();
    AndreasChristodoulou.show(); AndreasChristodoulou.move();
    EleniSpyrou.show(); EleniSpyrou.move();
    MariosIordanous.show(); MariosIordanous.move();
    MichalisChatzipapa.show(); MichalisChatzipapa.move();
   
    DimitrisGeorgiou.hoverAgent();
    MariosParaschou.hoverAgent();
    AntreasAnastasiou.hoverAgent();
    AntriaKyprianou.hoverAgent();
    EftychiaPhylactide.hoverAgent();
    FiliposKarayiannis.hoverAgent();
    GeorgeCharalampous.hoverAgent();
    GeorgeChristodoulou.hoverAgent();
    GeorgeZafeiropoulos.hoverAgent();
    KonstantinosKosta.hoverAgent();
    KonstantinosTsitzilonis.hoverAgent();
    MichalisKyprianou.hoverAgent();
    MichalisSkoutaris.hoverAgent();
    PanagiotaCharalampous.hoverAgent();
    SteliosAngeli.hoverAgent();
    GeorgeLazari.hoverAgent();
    FrixosKatsampas.hoverAgent();
    AndreasChristodoulou.hoverAgent();
    EleniSpyrou.hoverAgent();
    MariosIordanous.hoverAgent();
    MichalisChatzipapa.hoverAgent();

}
function windowResized() {
  canvas = createCanvas(windowWidth,windowHeight); 
 }
 
 
 
