var canvas = new fabric.Canvas('myCanvas')

player_x =10;
player_y=10;

hero_width= 30;
hero_height= 30;

var player_object = "";
var hero = "";


function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x,
 
    });
    canvas.add(player_object);
    });
  }
  function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
     hero = Img;
     hero.scaleToWidth(hero_width);
     hero.scaleToHeight(hero_height);
     hero.set({
    top:player_y,
    left:player_x,
     });
     canvas.add(hero);
    });
}


window.addEventListener("keydown" , my_keydown)

function my_keydown(e)
{
  keyPressed = e.keyCode;
	console.log(keyPressed);
	if(e.shiftKey == true && keyPressed == '80')
	{
		console.log("p and shift pressed together");
		hero_width = hero_width + 10;
		hero_height = hero_height + 10;
		document.getElementById("current_Width").innerHTML = hero_width;
		document.getElementById("current_Height").innerHTML = hero_height;	
	}
	if(e.shiftKey && keyPressed == '77')
	{
		console.log("m and shift pressed together");
		hero_width = hero_width - 10;
		hero_width = hero_width - 10;
		document.getElementById("current_Width").innerHTML = hero_width;
		document.getElementById("current_Height").innerHTML = hero_height;
	}

  if(keyPressed == '38')
  {
    up();
    console.log(" up key")
  }
  if(keyPressed == '40')
  {
    down();
    console.log(" down key")
  }
  if(keyPressed == '39')
  {
    right();
    console.log(" right key")
  }
  if(keyPressed == '37')
  {
    left();
    console.log(" left key")
  }
  if(keyPressed == '70')
  {
    new_image('thor_face.png')
    console.log("f")
  }
  if(keyPressed == '66')
  {
    new_image('ironman_body.png')
    console.log("b")
  }
  if(keyPressed == '76')
  {
    new_image('hulk_legs.png')
    console.log("l")
  }
  if(keyPressed == '82')
  {
    new_image('thor_right_hand.png')
    console.log("r")
  }
  if(keyPressed == '72')
  {
    new_image('captain_america_left_hand.png')
    console.log("h")
  }
}

function up()
{
  if(player_y >= 0)
  {
    player_y = player_y - hero_height;
    console.log("hero image height =" + hero_height);
    console.log("When up arrow is pressed, Y =" + player_y + "X =" + player_x);
    canvas.remove(player_object);
    player_update();
  }
}
function down()
{
  if(player_y <= 500)
  {
    player_y = player_y + hero_height;
    console.log("hero image height =" + hero_height);
    console.log("When down arrow is pressed Y =" + player_y + "X =" + player_x);
    canvas.remove(player_object);
    player_update();
  }
}
function left()
{
  if(player_x > 0)
  {
    player_x = player_x - hero_width;
    console.log("hero image width =" + hero_width);
    console.log("When left arrow is pressed X =" + player_x + "Y =" + player_y);
    canvas.remove(player_object);
    player_update();
  }
}
function right()
{
  if(player_x <= 850)
  {
    player_x = player_x + hero_width;
    console.log("hero image width =" + hero_width);
    console.log("When left arrow is pressed X =" + player_x + "Y =" + player_y);
    canvas.remove(player_object);
    player_update();
  }
}