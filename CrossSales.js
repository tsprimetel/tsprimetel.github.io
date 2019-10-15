





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

let arr = [];



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


    arr.push(new Agents("Dimitris Georgiou",imageDimitrisGeorgiou,0,9));
    arr.push(new Agents("Marios Paraschou",imageMariosParaschou,2,6));
    arr.push(new Agents("Antreas Anastasiou",imageAntreasAnastasiou,0,15));
    arr.push(new Agents("Antria Kyprianou",imageAntriaKyprianou,2,8));
    arr.push(new Agents("EftychiaPhylactide",imageEftychiaPhylactide,0,5));
    arr.push(new Agents("Filippos Karayiannis",imageFiliposKarayiannis,0,2));
    arr.push(new Agents("George Charalampous",imageGeorgeCharalampous,0,7));
    arr.push(new Agents("George Christodoulou",imageGeorgeChristodoulou,0,4));
    arr.push(new Agents("George Zafeiropoulos",imageGeorgeZafeiropoulos,0,1));
    arr.push(new Agents("Konstantinos Kosta",imageKonstantinosKosta,25,10));
    arr.push(new Agents("Konstantinos Tsitzilonis",imageKonstantinosTsitzilonis,2,11));
    arr.push(new Agents("Michalis Kyprianou",imageMichalisKyprianou,6,12));
    arr.push(new Agents("Michalis Skoutaris",imageMichalisSkoutaris,1,13));
    arr.push(new Agents("Pani Charalampous",imagePanagiotaCharalampous,2,14));
    arr.push(new Agents("Stelios Angeli",imageSteliosAngeli,0,3));
    arr.push(new Agents("George Lazari",imageGeorgeLazari,0,16));
    arr.push(new Agents("Frixos Katsampas",imageFrixosKatsampas,0,17));
    arr.push(new Agents("Andreas Christodoulou",imageAndreasChristodoulou,0,18));
    arr.push(new Agents("Eleni Spyrou",imageEleniSpyrou,0,19));
    arr.push(new Agents("Marios Iordanous",imageMariosIordanous,0,20));
    arr.push(new Agents("Michalis Chatzipapa",imageMichalisChatzipapa,0,21));

}

function draw() {
    background(img);
    textFont(myFont);

    fill(0);
    textAlign(CENTER);
    text("CROSS SALES",windowWidth * 0.5,windowHeight * 0.05);
    noFill();
    textAlign(LEFT);
	for (i = 0; i <arr.length; i++){
		arr[i].show();
		arr[i].move();
		
	}
	for (i = 0; i <arr.length; i++){
		arr[i].hoverAgent();
	}


   
}
function windowResized() {
  canvas = createCanvas(windowWidth,windowHeight); 
 }
 
 
 

 
 
 
