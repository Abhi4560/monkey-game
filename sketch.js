
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score,ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(500,400);
  
monkey = createSprite(100,315,20,50);
monkey.addAnimation("monkey",monkey_running);
monkey.scale=0.1;

ground = createSprite(400,350,1000,10);
ground.velocityX=-4;
ground.x=ground.width/2;
  
  
  
  
  FoodGroup = new Group();
obstaclesGroup = new Group();
  
  score=0;
}


function draw() {
background("lightblue"); 
  
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
 if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   
    spawnFood();
    spawnObstacles();
  
  drawSprites();
  
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/60) 
  text("Survival Time: "+ survivalTime, 100,50);
}
function spawnFood() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
  
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
     banana.addImage(bananaImage);
    banana.scale=0.05;

    FoodGroup.add(banana);                                       }                                
  }
function spawnObstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(800,320,10,40);

    obstacle.addImage(obstaceImage);
    obstacle.scale=0.1;
    obstacle.velocityX = -6;
         
    obstacle.lifetime = 300;
    
    
    
    obstaclesGroup.add(obstacle);
  }
}



