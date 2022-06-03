var canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

block_img_width=30;
block_img_height=30;

var player_object="";

var block_object="";



function player_update(){
fabric.Image.fromURL("player.png",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_x,
        left:player_y
    })
    canvas.add(player_object)
})
}

function block_update(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height);
        block_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_object)
    })
    }

    window.addEventListener("keydown",my_keydown)


    function my_keydown(e){
keyPressed=e.keyCode//It captures ASCII code of key.



    if (e.shiftKey == true && keyPressed == '80'){
block_img_width=block_img_width+10;
block_img_height=block_img_height+10;
document.getElementById("current_width").innerHTML=block_img_width;
document.getElementById("current_height").innerHTML=block_img_height;
    }

    if (e.shiftKey == true && keyPressed == '77'){
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
            }

if (keyPressed == '87'){
block_update('wall.jpg')
}
if (keyPressed == '71'){
    block_update('ground.png')
    }
    if (keyPressed == '76'){
        block_update('light_green.png')
        }
        if (keyPressed == '84'){
            block_update('trunk.jpg')
            }
            if (keyPressed == '82'){
                block_update('roof.jpg')
                }
                if (keyPressed == '89'){
                    block_update('yellow_wall.png')
                    }
                    if (keyPressed == '68'){
                        block_update('dark_green.png')
                        }
                        if (keyPressed == '85'){
                            block_update('unique.png')
                            }
                            if (keyPressed == '67'){
                                block_update('cloud.jpg')
                                }
                                if (keyPressed == '38'){
                                    up();
                                    console.log("up");
                                    }
                                    if (keyPressed == '40'){
                                        down();
                                        console.log("down");
                                        }
                                        if (keyPressed == '37'){
                                            left();
                                            console.log("left");
                                            }
                                            if (keyPressed == '39'){
                                                right();
                                                console.log("right");
                                                }
        }


        function up(){
            if (player_y>=0){
                  player_y=player_y-block_img_height;
                  canvas.remove(player_object); 
                  player_update();
            }
        }
        function down(){
            if (player_y<=600){
                  player_y=player_y+block_img_height;
                  canvas.remove(player_object); 
                  player_update();
            }
        }
        function left(){
            if (player_x>=0){
                  player_x=player_x-block_img_width;
                  canvas.remove(player_object); 
                  player_update();
            }
        }
        function right(){
            if (player_x<=1000){
                  player_x=player_x+block_img_width;
                  canvas.remove(player_object); 
                  player_update();
            }
        }