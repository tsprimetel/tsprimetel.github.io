











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
    arr.push(new Agents("Marios Paraschou",imageMariosParaschou,0,6));
    arr.push(new Agents("Antreas Anastasiou",imageAntreasAnastasiou,0,15));
    arr.push(new Agents("Antria Kyprianou",imageAntriaKyprianou,0,8));
    arr.push(new Agents("EftychiaPhylactide",imageEftychiaPhylactide,1,5));
    arr.push(new Agents("Filippos Karayiannis",imageFiliposKarayiannis,0,2));
    arr.push(new Agents("George Charalampous",imageGeorgeCharalampous,0,7));
    arr.push(new Agents("George Christodoulou",imageGeorgeChristodoulou,0,4));
    arr.push(new Agents("George Zafeiropoulos",imageGeorgeZafeiropoulos,0,1));
    arr.push(new Agents("Konstantinos Kosta",imageKonstantinosKosta,5,10));
    arr.push(new Agents("Konstantinos Tsitzilonis",imageKonstantinosTsitzilonis,0,11));
    arr.push(new Agents("Michalis Kyprianou",imageMichalisKyprianou,2,12));
    arr.push(new Agents("Michalis Skoutaris",imageMichalisSkoutaris,0,13));
    arr.push(new Agents("Michalis Chatzipapa",imageMichalisChatzipapa,0,14));
    arr.push(new Agents("Stelios Angeli",imageSteliosAngeli,0,3));
    arr.push(new Agents("George Lazari",imageGeorgeLazari,0,16));
    arr.push(new Agents("Giannos Ioannou",imageMariosIordanous,0,17));
    arr.push(new Agents("Andreas Christodoulou",imageAndreasChristodoulou,0,18));
    arr.push(new Agents("Eleni Spyrou",imageEleniSpyrou,0,19));
    arr.push(new Agents("Pavlos Setsidis",imageMariosIordanous,0,20));
    
    
    

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
 
 
 

 
 
 

 
 

 
 
 
