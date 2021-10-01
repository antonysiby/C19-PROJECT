    var luca,lucaImg
    var seaBackground,seaBackgroundImg
    var monster1,monster1Img,monster1G
    var monster2,monster2Img,monster2G
    var monster3,monster3Img,monster3G
    var monster4,monster4Img,monster4G
    var moving_monster1
    var moving_monster2
    var moving_monster3
    var moving_monster4
    var dia,diamondImg,moving_diamond,diaG
    var distance = 0
    var diamondCollection = 0
    var monsterKilled = 0
    var life = 10
    var knife,knifeImg,knifeG

function preload(){
    lucaImg = loadImage("6b7da110b36a5f1fe493a0cc8da67ebb.png")
    seaBackgroundImg = loadImage("underwater-background-clipart-12.jpg")
    monster1Img = loadImage("monster_01.png")
    monster2Img = loadImage("monster_01_purple.png")
    monster3Img = loadImage("pink monster.png ")
    monster4Img = loadImage("orange-monster-hi.png")
    diamondImg = loadImage("diamond-clipart-blue-4.png")
    knifeImg = loadImage("melee-weapons-clipart-14.jpg")
}

function setup() {
    createCanvas(800,600)

    seaBackground = createSprite(200,200)
    seaBackground.addImage(seaBackgroundImg)
    seaBackground.scale = 0.8
    seaBackground.velocityX = 2

    luca = createSprite(650,200)
    luca.addImage(lucaImg)
    luca.scale = 0.2

    monster1G = new Group()
    monster2G = new Group()
    monster3G = new Group()
    monster4G = new Group()
    diaG = new Group()
    knifeG = new Group()
}

function draw() {

    luca.y = World.mouseY

    if(seaBackground.x > 600){
        seaBackground.x = 0
    }

    distance = distance + 1 

    moving_monster1()
    moving_monster2()
    moving_monster3()
    moving_monster4()
    moving_diamond()

    if(luca.isTouching(diaG)){
        diamondCollection = diamondCollection+1
        diaG.destroyEach()
    }

    if(luca.isTouching(monster1G)){
     luca.destroy()
     monster1G.destroyEach()
    }

    if(keyDown("SPACE")){
  knife = createSprite(100,400)
  knife.addImage(knifeImg);
  knife.x = 586
  knife.y=luca.y
  knife.velocityX = -4;
  knife.lifetime = 100;
  knife.scale = 0.01;
  knifeG.add(knife)
    }


    if(knifeG.isTouching(monster1G)){
        monsterKilled = monsterKilled+1
        monster1G.destroyEach()
        knifeG.destroyEach()
    }

    if(knifeG.isTouching(monster2G)){
        monsterKilled = monsterKilled+1
        monster2G.destroyEach()
        knifeG.destroyEach()
    }

    if(knifeG.isTouching(monster3G)){
        monsterKilled = monsterKilled+1
        monster3G.destroyEach()
        knifeG.destroyEach()
    }

    if(knifeG.isTouching(monster4G)){
        monsterKilled = monsterKilled+1
        monster4G.destroyEach()
        knifeG.destroyEach()
    }


    console.log(World.mouseX)

    drawSprites()

    textSize(20)
    fill(255)
    text("Diamonds: "+ diamondCollection,670,30)

    textSize(20)
    fill(255)
    text("Distance: "+ distance,500,30)

    textSize(20)
    fill(255)
    text("Monsters Killed: "+ monsterKilled,310,30)

    textSize(20)
    fill(255)
    text("Life: "+ life,310,30)
    }

function moving_monster1(){
    if(frameCount%350===0){
        monster1 = createSprite(200,200)
        monster1.addImage(monster1Img)
        monster1.y = Math.round(random(100,500))
        monster1.velocityX = 1
        monster1.scale = 0.05
        monster1G.add(monster1)
    }
}

function moving_monster2(){
    if(frameCount%280===0){
        monster2 = createSprite(200,200)
        monster2.addImage(monster2Img)
        monster2.y = Math.round(random(100,500))
        monster2.velocityX = 1
        monster2.scale = 0.05
        monster2G.add(monster2)
    }
}

function moving_monster3(){
    if(frameCount%390===0){
        monster3 = createSprite(200,200)
        monster3.addImage(monster3Img)
        monster3.y = Math.round(random(100,500))
        monster3.velocityX = 1
        monster3.scale = 0.05
        monster3G.add(monster3)
    }
}

function moving_monster4(){
    if(frameCount%430===0){
        monster4 = createSprite(200,200)
        monster4.addImage(monster4Img)
        monster4.y = Math.round(random(100,500))
        monster4.velocityX = 1
        monster4.scale = 0.23
        monster4G.add(monster4)
    }
}

function moving_diamond(){
    if(frameCount%400===0){
        dia = createSprite(200,200)
        dia.addImage(diamondImg)
        dia.y = Math.round(random(100,800))
        dia.velocityX = 1
        dia.scale = 0.03
        diaG.add(dia)
    }
}

  
