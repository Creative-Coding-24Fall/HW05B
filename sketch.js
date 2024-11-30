let initWidth=260;
let bookXoff=0
let flamePosX=[]
let flamePosY=[]
let flameVelX=[]
let flameVelY=[]
let flameColor=[]
let flameSize=[]
let bookWidth=initWidth;
let bookHeight=330
let bookClosed=false
let flameStartTime

let flameStart=false
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
background(0)
rectMode(CENTER)
strokeWeight(3)
stroke(0)
fill(169,169,146)
push()
translate(bookXoff,0)
rect(width/2+initWidth/2,height/2,initWidth,bookHeight)
rect(width/2-bookWidth/2,height/2,bookWidth,bookHeight)
fill(255)
if(bookWidth>-initWidth){bookWidth-=2}else{
  bookClosed=true
}
if(bookClosed){
  if(bookXoff>-initWidth/2){bookXoff-=3}
  else if(flameStart==false){
    flameStart=true
    flameStartTime=millis()
  }
}
rect(width/2+initWidth*0.9/2,height/2,initWidth*0.9,bookHeight*0.9)
rect(width/2-bookWidth*0.9/2,height/2,bookWidth*0.9,bookHeight*0.9)
textAlign(CENTER,CENTER)
fill(0)
noStroke()
textSize(20)
text("Burn this book after you've read it.\n\n-- Y.O.",width/2+initWidth*0.9/2,height/2,initWidth*0.9,bookHeight*0.9)
stroke(0)
if(bookWidth<0){
fill(169,169,146)
  rect(width/2-bookWidth/2,height/2,bookWidth,bookHeight)

}
pop()
if(flameStart){
  let passTime=millis()-flameStartTime

  let num=passTime/1000
  if(num>30){num=30}
  for(let i=0;i<num;i+=1){

    flamePosX.push(width/2+random(-initWidth/2,initWidth/2))
    flamePosY.push(height/2+random(-bookHeight/2,bookHeight/2))
    flameVelX.push(random(-5,5))
    flameVelY.push(random(-5,5))
  flameSize.push(random(5,20+num))
  flameColor.push(color(random(200,255),random(0,255),0))
  }

}
for(let i=0;i<flamePosX.length;i++){
  if(flameSize[i]>2){
  fill(flameColor[i])
  noStroke()
  ellipse(flamePosX[i],flamePosY[i],flameSize[i])
  flamePosX[i]+=flameVelX[i]
  flamePosY[i]+=flameVelY[i]
  flameSize[i]*=0.98

}}
}