        /*    
        @licstart  The following is the entire license notice for the 
        JavaScript code in this page.

        Copyright (C) 2020  Bonjour

        The JavaScript code in this page is free software: you can
        redistribute it and/or modify it under the terms of the GNU
        General Public License (GNU GPL) as published by the Free Software
        Foundation, either version 3 of the License, or (at your option)
        any later version.  The code is distributed WITHOUT ANY WARRANTY;
        without even the implied warranty of MERCHANTABILITY or FITNESS
        FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

        As additional permission under GNU GPL version 3 section 7, you
        may distribute non-source (e.g., minimized or compacted) forms of
        that code without the copy of the GNU GPL normally required by
        section 4, provided you include this license notice and a URL
        through which recipients can access the Corresponding Source.   


        @licend  The above is the entire license notice
        for the JavaScript code in this page.
        */
// IMAGES
var player_right=new Image();
var player_left=new Image();
var car0=new Image();
var tree1=new Image();
var tree2=new Image();
var caution=new Image();
var cam1=new Image();
var cam2=new Image();
var cam3=new Image();
var teleport=new Image();
var wolf_left=new Image();
var wolf_right=new Image();
var electric_ray=new Image();
var electric_ray_x=new Image();
var diseases=new Array();
for (var i=1;i<13;i++)
diseases[i]=new Image();
var analgesic=new Image();
var castle=new Image();
var metalicstring=new Image();
var flag=new Image();
var brick_wall=new Image();
var window1=new Image();
var door1=new Image();
var canyon=new Image();
var canyonfire=new Image();
var torch=new Image();
var woman=new Image();
var heart=new Image();
function preloader() 
    {
    if (document.images) 
        {
        player_right.setAttribute("src", "player-spritemap-v9.png");
        player_left.setAttribute("src", "player-spritemap-v9_left.png");
        car0.setAttribute("src", "car0.png");
        tree1.setAttribute("src", "tree-1.png");
        tree2.setAttribute("src", "tree-2.png");
        caution.setAttribute("src", "caution.png");
        cam1.setAttribute("src", "1.png");
        cam2.setAttribute("src", "2.png");
        cam3.setAttribute("src", "3.png");
        teleport.setAttribute("src", "teleport.png");
        wolf_left.setAttribute("src", "wolf_walk_left.png");
        wolf_right.setAttribute("src", "wolf_walk_right.png");
        electric_ray.setAttribute("src", "electric-ray.png");
        electric_ray_x.setAttribute("src", "electric-ray-x.png");
        for (var i=1;i<10;i++)
        diseases[i].setAttribute("src", "sparks_effect_0" + i + ".png");
        for (var i=10;i<13;i++)
        diseases[i].setAttribute("src", "sparks_effect_" + i + ".png");
        analgesic.setAttribute("src", "analgesic.png");
        castle.setAttribute("src", "castle.png");
        metalicstring.setAttribute("src", "string.png");
        flag.setAttribute("src", "flag.png");
        brick_wall.setAttribute("src", "brick_wall.png");
        window1.setAttribute("src", "window1.png");
        door1.setAttribute("src", "door.png");
        canyon.setAttribute("src", "canyon.png");
        canyonfire.setAttribute("src", "canyon-fire.png");
        torch.setAttribute("src", "Torch_Gif.gif");
        woman.setAttribute("src", "woman.png");
        heart.setAttribute("src", "heart.png");
	    }
    }
function addLoadEvent(func) 
    {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') 
        {
		window.onload = func;
	    } 
    else 
        {
    	window.onload = function() 
            {
			if (oldonload) 
                {
				oldonload();
			    }
			func();
		    }
    	}
    }
//VARIABLES
var interval;
var screen=0;
var health=100;
var position_x=76;
var position_y=222;
var velocity_right=0;
var velocity_left=0;
var last_move='right';
var run_animation_right=0;
var run_animation_left=0;
var jump=false;
var bend=false;
var cam_position_x=350;
var eye="closed";
var last_screen;
var wolf_position_x;
var wolf_to_left;
var wolf_walking_image_number=0;
var wolf1_position_x;
var wolf2_position_x;
var wolf3_position_x;
var wolf1_to_left;
var wolf2_to_left;
var wolf3_to_left;
var wolf1_walking_image_number=0;
var wolf2_walking_image_number=0;
var wolf3_walking_image_number=0;
var teleporting=false;
var counter_diseases=0;
var analgesic_in_screen_19=true;
var analgesic_in_screen_25=true;
var analgesic_in_screen_35=true;
var opened_path=false;
var time;

// CANVAS
var canvas = document.getElementById('canvas');
if (canvas.getContext) 
    {
    var ctx = canvas.getContext('2d');
    }
function screens()
    {
    if (screen==1 && position_x>349 && jump==false){screen=2;position_x=0;last_screen=1;}
    if (screen==2 && position_x<-29 && jump==false){screen=1;position_x=320;last_screen=2;}
    if (screen==2 && position_x>349 && jump==false){screen=3;position_x=0;last_screen=2;}
    if (screen==3 && position_x<-29 && jump==false){screen=2;position_x=320;last_screen=3;}
    if (screen==3 && position_x>349 && jump==false){screen=4;position_x=0;last_screen=3;}
    if (screen==4 && position_x<-29 && jump==false){screen=3;position_x=320;last_screen=4;}
    if (screen==4 && position_x>349 && jump==false){screen=5;position_x=0;last_screen=4;}
    if (screen==5 && position_x<-29 && jump==false){screen=4;position_x=320;last_screen=5;}
    if (screen==5 && position_x>349 && jump==false){screen=6;position_x=0;last_screen=5;}
    if (screen==6 && position_x<-29 && jump==false){screen=5;position_x=320;last_screen=6;}
    if (screen==6 && position_x>349 && jump==false){screen=7;position_x=0;last_screen=6;}
    if (screen==7 && position_x<-29 && jump==false){screen=6;position_x=320;last_screen=7;}
    if (screen==7 && position_x>349 && jump==false){screen=8;position_x=0;last_screen=7;}
    if (screen==8 && position_x<-29 && jump==false){screen=7;position_x=320;last_screen=8;}
    if (screen==8 && position_x>349 && jump==false){screen=9;position_x=0;last_screen=8;}
    if (screen==9 && position_x<-29 && jump==false){screen=8;position_x=320;last_screen=9;}
    if (screen==9 && position_x>349 && jump==false){screen=10;position_x=0;last_screen=9;}
    if (screen==10 && position_x<-29 && jump==false){screen=9;position_x=320;last_screen=10;}
    if (screen==10 && position_x>349 && jump==false){screen=11;position_x=0;last_screen=10;}
    if (screen==11 && position_x<-29 && jump==false){screen=10;position_x=320;last_screen=11;}
    if (screen==11 && position_x>349 && jump==false){screen=12;position_x=0;last_screen=11;}
    if (screen==12 && position_x<-29 && jump==false){screen=11;position_x=320;last_screen=12;}
    if (screen==12 && position_x>349 && jump==false){screen=13;position_x=0;last_screen=12;}
    if (screen==13 && position_x<-29 && jump==false){screen=12;position_x=320;last_screen=13;}
    if (screen==13 && position_x>349 && jump==false){screen=14;position_x=0;last_screen=13;}
    if (screen==14 && position_x<-29 && jump==false){screen=13;position_x=320;last_screen=14;}
    if (screen==14 && position_x>349 && jump==false){screen=15;position_x=0;last_screen=14;}
    if (screen==15 && position_x<-29 && jump==false){screen=14;position_x=320;last_screen=15;}
    if (screen==15 && position_x>349 && jump==false){screen=16;position_x=0;last_screen=15;}
    if (screen==16 && position_x<-29 && jump==false){screen=15;position_x=320;last_screen=16;}
    if (screen==16 && position_x>349 && jump==false){screen=17;position_x=0;last_screen=16;}
    if (screen==17 && position_x<-29 && jump==false){screen=16;position_x=320;last_screen=17;}
    if (screen==17 && position_x>349 && jump==false){screen=18;position_x=0;last_screen=17;}
    if (screen==18 && position_x<-29 && jump==false){screen=17;position_x=320;last_screen=18;}
    if (screen==18 && position_x>349 && jump==false){screen=19;position_x=0;last_screen=18;}
    if (screen==19 && position_x<-29 && jump==false){screen=18;position_x=320;last_screen=19;}
    if (screen==19 && position_x>349 && jump==false){screen=20;position_x=0;last_screen=19;}
    if (screen==20 && position_x<-29 && jump==false){screen=19;position_x=320;last_screen=20;}
    if (screen==20 && position_x>349 && jump==false){screen=21;position_x=0;last_screen=20;}
    if (screen==21 && position_x<-29 && jump==false){screen=20;position_x=320;last_screen=21;}
    if (screen==21 && position_x>349 && jump==false){screen=22;position_x=0;last_screen=21;}
    if (screen==22 && position_x<-29 && jump==false){screen=21;position_x=320;last_screen=22;}
    if (screen==22 && position_x>349 && jump==false){screen=23;position_x=0;last_screen=22;}
    if (screen==23 && position_x<-29 && jump==false){screen=22;position_x=320;last_screen=23;}
    if (screen==23 && position_x>349 && jump==false){screen=24;position_x=0;last_screen=23;}
    if (screen==24 && position_x<-29 && jump==false){screen=23;position_x=320;last_screen=24;}
    if (screen==24 && position_x>349 && jump==false){screen=25;position_x=0;last_screen=24;}
    if (screen==25 && position_x<-29 && jump==false){screen=24;position_x=320;last_screen=25;}
    if (screen==25 && position_x>349 && jump==false){screen=26;position_x=0;last_screen=25;}
    if (screen==26 && position_x<-29 && jump==false){screen=25;position_x=320;last_screen=26;}
//  screen 26 to 27 in keyboard section
//  screen 27 to 26 in keyboard section
    if (screen==27 && position_x>349 && jump==false){screen=28;position_x=0;last_screen=27;}
    if (screen==28 && position_x<-29 && jump==false){screen=27;position_x=320;last_screen=28;}
    if (screen==28 && position_x>349 && jump==false){screen=29;position_x=0;last_screen=28;}
    if (screen==29 && position_x<-29 && jump==false){screen=28;position_x=320;last_screen=29;}
//  screen 29 to 30 in keyboard section
//  screen 30 to 29 in keyboard section
    if (screen==30 && position_x<-29 && jump==false){screen=36;position_x=320;last_screen=30;} //multiple exits
    if (screen==30 && position_x>349 && jump==false){screen=31;position_x=0;last_screen=30;}
    if (screen==31 && position_x<-29 && jump==false){screen=30;position_x=320;last_screen=31;}
    if (screen==31 && position_x>349 && jump==false){screen=32;position_x=0;last_screen=31;}
    if (screen==32 && position_x<-29 && jump==false){screen=31;position_x=320;last_screen=32;}
    if (screen==32 && position_x>349 && jump==false){screen=33;position_x=0;last_screen=32;}
    if (screen==33 && position_x<-29 && jump==false){screen=32;position_x=320;last_screen=33;}
    if (screen==33 && position_x>349 && jump==false){screen=34;position_x=0;last_screen=33;}
    if (screen==34 && position_x<-29 && jump==false){screen=33;position_x=320;last_screen=34;}
    if (screen==34 && position_x>349 && jump==false){screen=35;position_x=0;last_screen=34;}
    if (screen==35 && position_x<-29 && jump==false){screen=34;position_x=320;last_screen=35;}
    if (screen==36 && position_x>329 && jump==false){screen=30;position_x=0;last_screen=36;}
    }
function draw() 
    {
    screens();
    //clean canvas screen
    canvas.width=canvas.width;
    //screen
    ctx.beginPath();
    if(screen==1)
        {
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(0,0,360,270); //sky
        ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(car0,0,0,80,40,10,235,70,35); //car
        ctx.drawImage(tree1,0,0,48,76,160,171,60,99); //tree
        ctx.drawImage(caution,0,0,50,50,270,220,50,50); //caution
        ctx.arc(290,70,15,0,(Math.PI/180)*360,true);//moon
        ctx.fillStyle='#cccccc';
        ctx.fill();
        }
    if(screen==2)
        {
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(0,0,360,270); //sky
        ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(tree1,0,0,48,76,55,171,50,99); //tree
        ctx.drawImage(tree1,0,0,48,76,70,171,50,99); //tree
        ctx.drawImage(tree1,0,0,48,76,155,171,50,99); //tree
        ctx.drawImage(tree1,0,0,48,76,200,171,50,99); //tree
        ctx.arc(290,70,15,0,(Math.PI/180)*360,true);//moon
        ctx.fillStyle='#cccccc';
        ctx.fill(); 
        ctx.moveTo(80, 271); //electric mine
        ctx.lineTo(105, 271);
        ctx.stroke(); 
        ctx.moveTo(170, 271); //electric mine
        ctx.lineTo(190, 271);
        ctx.stroke();
        ctx.moveTo(215, 271); //electric mine
        ctx.lineTo(235, 271);
        ctx.stroke();
        }
    if(screen==3)
        {
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(0,0,360,270); //sky
        ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(tree1,0,0,48,76,100,171,50,99); //tree
        ctx.drawImage(tree1,0,0,48,76,250,171,50,99); //tree
        ctx.drawImage(tree1,0,0,48,76,150,171,50,99); //tree
        ctx.drawImage(tree1,0,0,48,76,170,171,50,99); //tree
        ctx.arc(290,70,15,0,(Math.PI/180)*360,true);//moon
        ctx.fillStyle='#cccccc';
        ctx.fill();
        ctx.moveTo(115, 271); //electric mine
        ctx.lineTo(135, 271);
        ctx.stroke(); 
        ctx.moveTo(170, 271); //electric mine
        ctx.lineTo(205, 271);
        ctx.stroke();
        ctx.moveTo(265, 271); //electric mine
        ctx.lineTo(285, 271);
        ctx.stroke();
        cam_position_x=350;
        }
    if(screen==4)
        {
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(0,0,360,270); //sky
        ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(tree1,0,0,48,76,55,171,50,100); //tree
        ctx.drawImage(tree1,0,0,48,76,200,171,50,99); //tree
        ctx.drawImage(tree1,0,0,48,76,135,171,50,99); //tree
        ctx.drawImage(tree1,0,0,48,76,160,171,50,99); //tree
        ctx.drawImage(tree1,0,0,48,76,180,171,50,99); //tree
        ctx.drawImage(tree1,0,0,48,76,260,171,50,99); //tree
        ctx.drawImage(caution,0,0,50,50,280,220,50,50); //caution
        ctx.arc(290,70,15,0,(Math.PI/180)*360,true);//moon
        ctx.fillStyle='#cccccc';
        ctx.fill();
        }
    if(screen==5)
        {
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(0,0,360,270); //sky
        ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(0,270,360,360); //floor
        ctx.arc(290,70,15,0,(Math.PI/180)*360,true);//moon
        ctx.fillStyle='#cccccc';
        ctx.fill(); 
        ctx.moveTo(0, 271); //sensor cam
        ctx.lineTo(100, 271);
        ctx.stroke(); 
        if (eye=="closed") 
            {      
            ctx.drawImage(cam1,0,0,32,64,cam_position_x,121,32,64); //cam
            if(cam_position_x>223){cam_position_x=cam_position_x-2;}
            }
        if(cam_position_x==224 && eye=="closed")
            {
            eye="middle";
            ctx.drawImage(cam2,0,0,32,64,cam_position_x,121,32,64); 
            }
       if(cam_position_x==224 && (eye=="middle" || eye=="open"))
            {
            eye="open";
            ctx.drawImage(cam3,0,0,32,64,cam_position_x,121,32,64); 
            }
        if(position_x>=224)
            {
            cam_position_x=position_x;
            ctx.drawImage(cam3,0,0,32,64,cam_position_x,121,32,64); 
            } 
        if(position_x<224 && eye=="open" && last_screen==4){cam_position_x=224;}
        if(position_x<224 && eye=="open" && last_screen==6)
            {
            cam_position_x=224;
            eye="middle";
            ctx.drawImage(cam2,0,0,32,64,cam_position_x,121,32,64); 
            }
        if(cam_position_x==224 && (eye=="middle" || eye=="closed") && last_screen==6)
            {
            eye="closed";
            ctx.drawImage(cam1,0,0,32,64,cam_position_x,121,32,64); 
            }
        }
    if(screen==6)
        {
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(0,0,360,270); //sky
        ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(0,270,360,360); //floor
        ctx.arc(290,70,15,0,(Math.PI/180)*360,true);//moon
        ctx.fillStyle='#cccccc';
        ctx.fill();
        cam_position_x=position_x;
        ctx.drawImage(cam3,0,0,32,64,cam_position_x,121,32,64); 
        }
    if(screen==7)
        {
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(0,0,360,270); //sky
        ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(0,270,360,360); //floor
        ctx.arc(290,70,15,0,(Math.PI/180)*360,true);//moon
        ctx.fillStyle='#cccccc';
        ctx.fill();
        if(cam_position_x==164 && eye=="closed") 
            {      
            ctx.drawImage(cam1,0,0,32,64,cam_position_x,121,32,64); //cam
            }
        if(cam_position_x==164 && eye=="middle")
            {
            eye="closed";
            ctx.drawImage(cam2,0,0,32,64,cam_position_x,121,32,64); 
            }
        if(position_x<=164)
            {
            cam_position_x=position_x;
            ctx.drawImage(cam3,0,0,32,64,cam_position_x,121,32,64); 
            } 
        if(position_x>164 && eye=="open")
            {
            cam_position_x=164;
            eye="middle";
            ctx.drawImage(cam2,0,0,32,64,cam_position_x,121,32,64); 
            } 
        if(position_x>164 && (eye=="middle" || eye=="closed"))
            {
            cam_position_x=164;
            eye="closed";
            ctx.drawImage(cam1,0,0,32,64,cam_position_x,121,32,64); 
            } 
        }
    if(screen==8)
        {
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(0,0,360,270); //sky
        ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(0,270,360,360); //floor
        ctx.arc(290,70,15,0,(Math.PI/180)*360,true);//moon
        ctx.fillStyle='#cccccc';
        ctx.fill();
        ctx.drawImage(tree1,0,0,48,76,135,171,50,99); //tree
        ctx.drawImage(caution,0,0,50,50,270,220,50,50); //caution
        }
    if(screen==9)
        {
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(0,0,360,270); //sky
        ctx.fillRect(90,270,270,360); //sky
        ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(0,270,90,360); //floor
        ctx.fillRect(270,270,90,360); //floor
        ctx.arc(290,70,15,0,(Math.PI/180)*360,true);//moon
        ctx.fillStyle='#cccccc';
        ctx.fill();
        }
    if(screen==10)
        {
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(0,0,360,270); //sky
        ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(tree2,0,0,48,76,55,171,50,100); //tree
        ctx.drawImage(tree2,0,0,48,76,200,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,135,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,160,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,180,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,260,171,50,99); //tree
        ctx.drawImage(caution,0,0,50,50,280,220,50,50); //caution
        ctx.arc(290,70,15,0,(Math.PI/180)*360,true);//moon
        ctx.fillStyle='#cccccc';
        ctx.fill();
        }
    if(screen==11)
        {
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(0,0,360,270); //sky
        ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(tree2,0,0,48,76,100,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,250,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,150,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,170,171,50,99); //tree
        ctx.arc(290,70,15,0,(Math.PI/180)*360,true);//moon
        ctx.fillStyle='#cccccc';
        ctx.fill();
        ctx.moveTo(115, 271); //electric mine
        ctx.lineTo(135, 271);
        ctx.stroke(); 
        ctx.moveTo(170, 271); //electric mine
        ctx.lineTo(205, 271);
        ctx.stroke();
        ctx.moveTo(265, 271); //electric mine
        ctx.lineTo(285, 271);
        ctx.stroke();
        cam_position_x=350;
        }
    if(screen==12)
        {
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(0,0,360,270); //sky
        ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(tree2,0,0,48,76,55,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,70,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,155,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,200,171,50,99); //tree
        ctx.arc(290,70,15,0,(Math.PI/180)*360,true);//moon
        ctx.fillStyle='#cccccc';
        ctx.fill(); 
        ctx.moveTo(80, 271); //electric mine
        ctx.lineTo(105, 271);
        ctx.stroke(); 
        ctx.moveTo(170, 271); //electric mine
        ctx.lineTo(190, 271);
        ctx.stroke();
        ctx.moveTo(215, 271); //electric mine
        ctx.lineTo(235, 271);
        ctx.stroke();
        }
    if(screen==13)
        {
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(0,0,360,270); //sky
        ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(0,270,360,360); //floor
        ctx.arc(290,70,15,0,(Math.PI/180)*360,true);//moon
        ctx.fillStyle='#cccccc';
        ctx.fill();
        ctx.drawImage(tree2,0,0,48,76,135,171,50,99); //tree
        ctx.drawImage(caution,0,0,50,50,270,220,50,50); //caution
        }
    if(screen==14)
        {
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(0,0,360,270); //sky
        ctx.fillRect(90,270,270,360); //sky
        ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(0,270,90,90); //floor
        ctx.fillRect(150,270,60,90); //floor
        ctx.fillRect(270,270,90,90); //floor
        ctx.arc(290,70,15,0,(Math.PI/180)*360,true);//moon
        ctx.fillStyle='#cccccc';
        ctx.fill();
        }
    if(screen==15)
        {
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(0,0,360,270); //sky
        ctx.fillRect(90,270,270,360); //sky
        ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(0,270,90,90); //floor
        ctx.fillRect(150,270,60,90); //floor
        ctx.fillRect(270,270,90,90); //floor
        ctx.arc(290,70,15,0,(Math.PI/180)*360,true);//moon
        ctx.fillStyle='#cccccc';
        ctx.fill();
        }
    if(screen==16)
        {
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(0,0,360,270); //sky
        ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(0,270,360,360); //floor
        ctx.arc(290,70,15,0,(Math.PI/180)*360,true);//moon
        ctx.fillStyle='#cccccc';
        ctx.fill();
        ctx.drawImage(tree2,0,0,48,76,135,171,50,99); //tree
        ctx.drawImage(caution,0,0,50,50,270,220,50,50); //caution
        }
    if(screen==17)
        {
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(0,0,360,270); //sky
        ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(tree2,0,0,48,76,55,171,50,100); //tree
        ctx.drawImage(tree2,0,0,48,76,200,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,135,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,160,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,180,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,260,171,50,99); //tree
        ctx.arc(290,70,15,0,(Math.PI/180)*360,true);//moon
        ctx.fillStyle='#cccccc';
        ctx.fill();
        if(wolf_to_left==true)
            {
            if (wolf_walking_image_number==0)
            ctx.drawImage(wolf_left,0,0,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==1)
            ctx.drawImage(wolf_left,64,0,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==2)
            ctx.drawImage(wolf_left,0,64,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==3)
            ctx.drawImage(wolf_left,64,64,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==4)
            ctx.drawImage(wolf_left,0,128,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==5)
            ctx.drawImage(wolf_left,64,128,64,64,wolf_position_x,244,32,32); //wolf
            }
        if(wolf_to_left==false)
            {
            if (wolf_walking_image_number==5)
            ctx.drawImage(wolf_right,0,0,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==4)
            ctx.drawImage(wolf_right,64,0,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==3)
            ctx.drawImage(wolf_right,0,64,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==2)
            ctx.drawImage(wolf_right,64,64,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==1)
            ctx.drawImage(wolf_right,0,128,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==0)
            ctx.drawImage(wolf_right,64,128,64,64,wolf_position_x,244,32,32); //wolf
            }
        }
    if(screen==18)
        {
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(0,0,360,270); //sky
        ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(tree2,0,0,48,76,50,171,50,100); //tree
        ctx.drawImage(tree2,0,0,48,76,220,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,105,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,170,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,155,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,266,171,50,99); //tree
        ctx.arc(290,70,15,0,(Math.PI/180)*360,true);//moon
        ctx.fillStyle='#cccccc';
        ctx.fill();
        if(wolf1_to_left==true)
            {
            if (wolf1_walking_image_number==0)
            ctx.drawImage(wolf_left,0,0,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==1)
            ctx.drawImage(wolf_left,64,0,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==2)
            ctx.drawImage(wolf_left,0,64,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==3)
            ctx.drawImage(wolf_left,64,64,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==4)
            ctx.drawImage(wolf_left,0,128,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==5)
            ctx.drawImage(wolf_left,64,128,64,64,wolf1_position_x,244,32,32); //wolf
            }
        if(wolf1_to_left==false)
            {
            if (wolf1_walking_image_number==5)
            ctx.drawImage(wolf_right,0,0,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==4)
            ctx.drawImage(wolf_right,64,0,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==3)
            ctx.drawImage(wolf_right,0,64,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==2)
            ctx.drawImage(wolf_right,64,64,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==1)
            ctx.drawImage(wolf_right,0,128,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==0)
            ctx.drawImage(wolf_right,64,128,64,64,wolf1_position_x,244,32,32); //wolf
            }
        if(wolf2_to_left==true)
            {
            if (wolf2_walking_image_number==0)
            ctx.drawImage(wolf_left,0,0,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==1)
            ctx.drawImage(wolf_left,64,0,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==2)
            ctx.drawImage(wolf_left,0,64,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==3)
            ctx.drawImage(wolf_left,64,64,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==4)
            ctx.drawImage(wolf_left,0,128,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==5)
            ctx.drawImage(wolf_left,64,128,64,64,wolf2_position_x,244,32,32); //wolf
            }
        if(wolf2_to_left==false)
            {
            if (wolf2_walking_image_number==5)
            ctx.drawImage(wolf_right,0,0,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==4)
            ctx.drawImage(wolf_right,64,0,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==3)
            ctx.drawImage(wolf_right,0,64,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==2)
            ctx.drawImage(wolf_right,64,64,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==1)
            ctx.drawImage(wolf_right,0,128,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==0)
            ctx.drawImage(wolf_right,64,128,64,64,wolf2_position_x,244,32,32); //wolf
            }
        if(wolf3_to_left==true)
            {
            if (wolf3_walking_image_number==0)
            ctx.drawImage(wolf_left,0,0,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==1)
            ctx.drawImage(wolf_left,64,0,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==2)
            ctx.drawImage(wolf_left,0,64,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==3)
            ctx.drawImage(wolf_left,64,64,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==4)
            ctx.drawImage(wolf_left,0,128,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==5)
            ctx.drawImage(wolf_left,64,128,64,64,wolf3_position_x,244,32,32); //wolf
            }
        if(wolf3_to_left==false)
            {
            if (wolf3_walking_image_number==5)
            ctx.drawImage(wolf_right,0,0,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==4)
            ctx.drawImage(wolf_right,64,0,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==3)
            ctx.drawImage(wolf_right,0,64,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==2)
            ctx.drawImage(wolf_right,64,64,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==1)
            ctx.drawImage(wolf_right,0,128,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==0)
            ctx.drawImage(wolf_right,64,128,64,64,wolf3_position_x,244,32,32); //wolf
            }
        }
    if(screen==19)
        {
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(0,0,360,270); //sky
        ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(0,270,360,360); //floor
        ctx.arc(290,70,15,0,(Math.PI/180)*360,true);//moon
        ctx.fillStyle='#cccccc';
        ctx.fill();
        ctx.drawImage(tree2,0,0,48,76,55,171,50,100); //tree
        ctx.drawImage(tree2,0,0,48,76,200,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,135,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,160,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,180,171,50,99); //tree
        ctx.drawImage(tree2,0,0,48,76,260,171,50,99); //tree
        if(analgesic_in_screen_19==true){ctx.drawImage(analgesic,0,0,32,32,180-16,253,16,16);} //analgesic
        if(analgesic_in_screen_19==true && position_x>140 && position_x<140+16 && position_y==222){analgesic_in_screen_19=false;health=100;}
        }
    if(screen==20)
        {
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(0,0,360,270); //sky
        ctx.fillStyle = 'saddlebrown';
        ctx.fillRect(0,270,360,360); //floor
        ctx.arc(290,70,15,0,(Math.PI/180)*360,true);//moon
        ctx.fillStyle='#cccccc';
        ctx.fill();
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(210,275,120,30); //sky2
        ctx.fillStyle = 'blue';
        ctx.fillRect(210,305,120,30); //water
        ctx.fillStyle = 'darkgoldenrod';
        ctx.fillRect(190,270,140,5); //door in floor
        ctx.drawImage(castle,0,0,50,50,90,220,50,50); //castle
        ctx.drawImage(flag,0,0,300,300,270,50,80,80); //castle
        }
    if(screen==21)
        {
        ctx.drawImage(brick_wall,0,0,160,160,0,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,0,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,110,160,160); //brick wall
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(155,30,50,50); //sky window
        ctx.drawImage(window1,0,0,50,50,155,30,50,50); //window1
        ctx.fillStyle = '#606060';//more dark grey
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(torch,0,0,320,320,80,200,32,32); //torch
        }
    if(screen==22)
        {
        ctx.drawImage(brick_wall,0,0,160,160,0,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,0,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,110,160,160); //brick wall
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(155,30,50,50); //sky window
        ctx.drawImage(window1,0,0,50,50,155,30,50,50); //window1
        ctx.fillStyle = '#606060';//more dark grey
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(torch,0,0,320,320,80,200,32,32); //torch
        if(wolf_to_left==true)
            {
            if (wolf_walking_image_number==0)
            ctx.drawImage(wolf_left,0,0,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==1)
            ctx.drawImage(wolf_left,64,0,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==2)
            ctx.drawImage(wolf_left,0,64,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==3)
            ctx.drawImage(wolf_left,64,64,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==4)
            ctx.drawImage(wolf_left,0,128,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==5)
            ctx.drawImage(wolf_left,64,128,64,64,wolf_position_x,244,32,32); //wolf
            }
        if(wolf_to_left==false)
            {
            if (wolf_walking_image_number==5)
            ctx.drawImage(wolf_right,0,0,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==4)
            ctx.drawImage(wolf_right,64,0,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==3)
            ctx.drawImage(wolf_right,0,64,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==2)
            ctx.drawImage(wolf_right,64,64,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==1)
            ctx.drawImage(wolf_right,0,128,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==0)
            ctx.drawImage(wolf_right,64,128,64,64,wolf_position_x,244,32,32); //wolf
            }
        }
    if(screen==23)
        {
        ctx.drawImage(brick_wall,0,0,160,160,0,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,0,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,110,160,160); //brick wall
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(155,30,50,50); //sky window
        ctx.drawImage(window1,0,0,50,50,155,30,50,50); //window1
        ctx.fillStyle = '#606060';//more dark grey
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(torch,0,0,320,320,80,200,32,32); //torch
        if(wolf1_to_left==true)
            {
            if (wolf1_walking_image_number==0)
            ctx.drawImage(wolf_left,0,0,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==1)
            ctx.drawImage(wolf_left,64,0,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==2)
            ctx.drawImage(wolf_left,0,64,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==3)
            ctx.drawImage(wolf_left,64,64,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==4)
            ctx.drawImage(wolf_left,0,128,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==5)
            ctx.drawImage(wolf_left,64,128,64,64,wolf1_position_x,244,32,32); //wolf
            }
        if(wolf1_to_left==false)
            {
            if (wolf1_walking_image_number==5)
            ctx.drawImage(wolf_right,0,0,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==4)
            ctx.drawImage(wolf_right,64,0,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==3)
            ctx.drawImage(wolf_right,0,64,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==2)
            ctx.drawImage(wolf_right,64,64,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==1)
            ctx.drawImage(wolf_right,0,128,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==0)
            ctx.drawImage(wolf_right,64,128,64,64,wolf1_position_x,244,32,32); //wolf
            }
        if(wolf2_to_left==true)
            {
            if (wolf2_walking_image_number==0)
            ctx.drawImage(wolf_left,0,0,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==1)
            ctx.drawImage(wolf_left,64,0,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==2)
            ctx.drawImage(wolf_left,0,64,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==3)
            ctx.drawImage(wolf_left,64,64,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==4)
            ctx.drawImage(wolf_left,0,128,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==5)
            ctx.drawImage(wolf_left,64,128,64,64,wolf2_position_x,244,32,32); //wolf
            }
        if(wolf2_to_left==false)
            {
            if (wolf2_walking_image_number==5)
            ctx.drawImage(wolf_right,0,0,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==4)
            ctx.drawImage(wolf_right,64,0,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==3)
            ctx.drawImage(wolf_right,0,64,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==2)
            ctx.drawImage(wolf_right,64,64,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==1)
            ctx.drawImage(wolf_right,0,128,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==0)
            ctx.drawImage(wolf_right,64,128,64,64,wolf2_position_x,244,32,32); //wolf
            }
        if(wolf3_to_left==true)
            {
            if (wolf3_walking_image_number==0)
            ctx.drawImage(wolf_left,0,0,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==1)
            ctx.drawImage(wolf_left,64,0,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==2)
            ctx.drawImage(wolf_left,0,64,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==3)
            ctx.drawImage(wolf_left,64,64,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==4)
            ctx.drawImage(wolf_left,0,128,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==5)
            ctx.drawImage(wolf_left,64,128,64,64,wolf3_position_x,244,32,32); //wolf
            }
        if(wolf3_to_left==false)
            {
            if (wolf3_walking_image_number==5)
            ctx.drawImage(wolf_right,0,0,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==4)
            ctx.drawImage(wolf_right,64,0,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==3)
            ctx.drawImage(wolf_right,0,64,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==2)
            ctx.drawImage(wolf_right,64,64,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==1)
            ctx.drawImage(wolf_right,0,128,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==0)
            ctx.drawImage(wolf_right,64,128,64,64,wolf3_position_x,244,32,32); //wolf
            }
        }
    if(screen==24)
        {
        ctx.drawImage(brick_wall,0,0,160,160,0,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,0,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,110,160,160); //brick wall
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(155,30,50,50); //sky window
        ctx.drawImage(window1,0,0,50,50,155,30,50,50); //window1
        ctx.fillStyle = '#606060';//more dark grey
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(torch,0,0,320,320,80,200,32,32); //torch
        if(wolf_to_left==true)
            {
            if (wolf_walking_image_number==0)
            ctx.drawImage(wolf_left,0,0,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==1)
            ctx.drawImage(wolf_left,64,0,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==2)
            ctx.drawImage(wolf_left,0,64,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==3)
            ctx.drawImage(wolf_left,64,64,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==4)
            ctx.drawImage(wolf_left,0,128,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==5)
            ctx.drawImage(wolf_left,64,128,64,64,wolf_position_x,244,32,32); //wolf
            }
        if(wolf_to_left==false)
            {
            if (wolf_walking_image_number==5)
            ctx.drawImage(wolf_right,0,0,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==4)
            ctx.drawImage(wolf_right,64,0,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==3)
            ctx.drawImage(wolf_right,0,64,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==2)
            ctx.drawImage(wolf_right,64,64,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==1)
            ctx.drawImage(wolf_right,0,128,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==0)
            ctx.drawImage(wolf_right,64,128,64,64,wolf_position_x,244,32,32); //wolf
            }
        if(wolf1_to_left==true)
            {
            if (wolf1_walking_image_number==0)
            ctx.drawImage(wolf_left,0,0,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==1)
            ctx.drawImage(wolf_left,64,0,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==2)
            ctx.drawImage(wolf_left,0,64,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==3)
            ctx.drawImage(wolf_left,64,64,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==4)
            ctx.drawImage(wolf_left,0,128,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==5)
            ctx.drawImage(wolf_left,64,128,64,64,wolf1_position_x,244,32,32); //wolf
            }
        if(wolf1_to_left==false)
            {
            if (wolf1_walking_image_number==5)
            ctx.drawImage(wolf_right,0,0,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==4)
            ctx.drawImage(wolf_right,64,0,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==3)
            ctx.drawImage(wolf_right,0,64,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==2)
            ctx.drawImage(wolf_right,64,64,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==1)
            ctx.drawImage(wolf_right,0,128,64,64,wolf1_position_x,244,32,32); //wolf
            if (wolf1_walking_image_number==0)
            ctx.drawImage(wolf_right,64,128,64,64,wolf1_position_x,244,32,32); //wolf
            }
        if(wolf2_to_left==true)
            {
            if (wolf2_walking_image_number==0)
            ctx.drawImage(wolf_left,0,0,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==1)
            ctx.drawImage(wolf_left,64,0,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==2)
            ctx.drawImage(wolf_left,0,64,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==3)
            ctx.drawImage(wolf_left,64,64,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==4)
            ctx.drawImage(wolf_left,0,128,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==5)
            ctx.drawImage(wolf_left,64,128,64,64,wolf2_position_x,244,32,32); //wolf
            }
        if(wolf2_to_left==false)
            {
            if (wolf2_walking_image_number==5)
            ctx.drawImage(wolf_right,0,0,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==4)
            ctx.drawImage(wolf_right,64,0,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==3)
            ctx.drawImage(wolf_right,0,64,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==2)
            ctx.drawImage(wolf_right,64,64,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==1)
            ctx.drawImage(wolf_right,0,128,64,64,wolf2_position_x,244,32,32); //wolf
            if (wolf2_walking_image_number==0)
            ctx.drawImage(wolf_right,64,128,64,64,wolf2_position_x,244,32,32); //wolf
            }
        if(wolf3_to_left==true)
            {
            if (wolf3_walking_image_number==0)
            ctx.drawImage(wolf_left,0,0,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==1)
            ctx.drawImage(wolf_left,64,0,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==2)
            ctx.drawImage(wolf_left,0,64,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==3)
            ctx.drawImage(wolf_left,64,64,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==4)
            ctx.drawImage(wolf_left,0,128,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==5)
            ctx.drawImage(wolf_left,64,128,64,64,wolf3_position_x,244,32,32); //wolf
            }
        if(wolf3_to_left==false)
            {
            if (wolf3_walking_image_number==5)
            ctx.drawImage(wolf_right,0,0,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==4)
            ctx.drawImage(wolf_right,64,0,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==3)
            ctx.drawImage(wolf_right,0,64,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==2)
            ctx.drawImage(wolf_right,64,64,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==1)
            ctx.drawImage(wolf_right,0,128,64,64,wolf3_position_x,244,32,32); //wolf
            if (wolf3_walking_image_number==0)
            ctx.drawImage(wolf_right,64,128,64,64,wolf3_position_x,244,32,32); //wolf
            }
        }
    if(screen==25)
        {
        ctx.drawImage(brick_wall,0,0,160,160,0,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,0,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,110,160,160); //brick wall
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(155,30,50,50); //sky window
        ctx.drawImage(window1,0,0,50,50,155,30,50,50); //window1
        ctx.fillStyle = '#606060';//more dark grey
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(torch,0,0,320,320,80,200,32,32); //torch
        if(analgesic_in_screen_25==true){ctx.drawImage(analgesic,0,0,32,32,180-16,253,16,16);} //analgesic
        if(analgesic_in_screen_25==true && position_x>140 && position_x<140+16 && position_y==222){analgesic_in_screen_25=false;health=100;}
        }
    if(screen==26)
        {
        ctx.drawImage(brick_wall,0,0,160,160,0,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,0,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,110,160,160); //brick wall
        ctx.drawImage(door1,0,0,50,120,265,210,25,60); //door1
        ctx.fillStyle = '#606060';//more dark grey
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(torch,0,0,320,320,80,200,32,32); //torch
        }
    if(screen==27)
        {
        ctx.drawImage(brick_wall,0,0,160,160,0,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,0,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,110,160,160); //brick wall
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(155,30,50,50); //sky window
        ctx.drawImage(window1,0,0,50,50,155,30,50,50); //window1
        ctx.fillStyle = '#606060';//more dark grey
        ctx.fillRect(0,270,360,360); //floor
        //and light from door
        }
    if(screen==28)
        {
        ctx.drawImage(brick_wall,0,0,160,160,0,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,0,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,110,160,160); //brick wall
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(155,30,50,50); //sky window
        ctx.drawImage(window1,0,0,50,50,155,30,50,50); //window1
        ctx.fillStyle = '#606060';//more dark grey
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(torch,0,0,320,320,80,200,32,32); //torch
        }
    if(screen==29)
        {
        ctx.drawImage(brick_wall,0,0,160,160,0,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,0,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,110,160,160); //brick wall
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(155,30,50,50); //sky window
        ctx.drawImage(window1,0,0,50,50,155,30,50,50); //window1
        ctx.fillStyle = '#606060';//more dark grey
        ctx.fillRect(0,270,360,360); //floor
        //and light from door
        }
    if(screen==30)
        {
        ctx.drawImage(brick_wall,0,0,160,160,0,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,0,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,110,160,160); //brick wall
        ctx.drawImage(door1,0,0,50,120,265,210,25,60); //door1
        ctx.fillStyle = '#606060';//more dark grey
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(torch,0,0,320,320,80,200,32,32); //torch
        if(opened_path==false)
            {
            ctx.fillStyle = 'darkgoldenrod';
            ctx.fillRect(20,0,20,270); //door in floor
            }
        }
    if(screen==31)
        {
        ctx.drawImage(brick_wall,0,0,160,160,0,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,0,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,110,160,160); //brick wall
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(155,30,50,50); //sky window
        ctx.drawImage(window1,0,0,50,50,155,30,50,50); //window1
        ctx.fillStyle = '#606060';//more dark grey
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(torch,0,0,320,320,80,200,32,32); //torch
        ctx.fillRect(330,0,10,position_y); //suport canyon
        if(time % 3 != 0)
            {
            ctx.drawImage(canyon,0,0,60,30,290,position_y,60,30); //canyon
            }
        if(time % 3 == 0)
            {
            ctx.drawImage(canyonfire,0,0,60,30,290,position_y,60,30); //canyon fire
            if (bend==false && position_x<290){health=health-2}
            }
        }
    if(screen==32)
        {
        ctx.drawImage(brick_wall,0,0,160,160,0,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,0,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,110,160,160); //brick wall
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(155,30,50,50); //sky window
        ctx.drawImage(window1,0,0,50,50,155,30,50,50); //window1
        ctx.fillStyle = '#606060';//more dark grey
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(torch,0,0,320,320,80,200,32,32); //torch
        ctx.fillRect(330,0,10,position_y); //suport canyon
        if(time % 3 != 0)
            {
            ctx.drawImage(canyon,0,0,60,30,290,position_y,60,30); //canyon
            }
        if(time % 3 == 0)
            {
            ctx.drawImage(canyonfire,0,0,60,30,290,position_y,60,30); //canyon fire
            if (bend==false && position_x<290){health=health-2}
            }
        if(wolf_to_left==true)
            {
            if (wolf_walking_image_number==0)
            ctx.drawImage(wolf_left,0,0,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==1)
            ctx.drawImage(wolf_left,64,0,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==2)
            ctx.drawImage(wolf_left,0,64,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==3)
            ctx.drawImage(wolf_left,64,64,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==4)
            ctx.drawImage(wolf_left,0,128,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==5)
            ctx.drawImage(wolf_left,64,128,64,64,wolf_position_x,244,32,32); //wolf
            }
        if(wolf_to_left==false)
            {
            if (wolf_walking_image_number==5)
            ctx.drawImage(wolf_right,0,0,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==4)
            ctx.drawImage(wolf_right,64,0,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==3)
            ctx.drawImage(wolf_right,0,64,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==2)
            ctx.drawImage(wolf_right,64,64,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==1)
            ctx.drawImage(wolf_right,0,128,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==0)
            ctx.drawImage(wolf_right,64,128,64,64,wolf_position_x,244,32,32); //wolf
            }
        }
    if(screen==33)
        {
        ctx.drawImage(brick_wall,0,0,160,160,0,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,0,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,110,160,160); //brick wall
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(155,30,50,50); //sky window
        ctx.drawImage(window1,0,0,50,50,155,30,50,50); //window1
        ctx.fillStyle = '#606060';//more dark grey
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(torch,0,0,320,320,80,200,32,32); //torch
        ctx.fillRect(330,0,10,position_y); //suport canyon
        if(time % 3 != 0)
            {
            ctx.drawImage(canyon,0,0,60,30,290,position_y,60,30); //canyon
            }
        if(time % 3 == 0)
            {
            ctx.drawImage(canyonfire,0,0,60,30,290,position_y,60,30); //canyon fire
            if (bend==false && position_x<290){health=health-2}
            }
        }
    if(screen==34)
        {
        ctx.drawImage(brick_wall,0,0,160,160,0,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,0,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,110,160,160); //brick wall
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(155,30,50,50); //sky window
        ctx.drawImage(window1,0,0,50,50,155,30,50,50); //window1
        ctx.fillStyle = '#606060';//more dark grey
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(torch,0,0,320,320,80,200,32,32); //torch
        ctx.fillRect(330,0,10,position_y); //suport canyon
        if(time % 3 != 0)
            {
            ctx.drawImage(canyon,0,0,60,30,290,position_y,60,30); //canyon
            }
        if(time % 3 == 0)
            {
            ctx.drawImage(canyonfire,0,0,60,30,290,position_y,60,30); //canyon fire
            if (bend==false && position_x<290){health=health-2}
            }
        if(wolf_to_left==true)
            {
            if (wolf_walking_image_number==0)
            ctx.drawImage(wolf_left,0,0,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==1)
            ctx.drawImage(wolf_left,64,0,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==2)
            ctx.drawImage(wolf_left,0,64,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==3)
            ctx.drawImage(wolf_left,64,64,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==4)
            ctx.drawImage(wolf_left,0,128,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==5)
            ctx.drawImage(wolf_left,64,128,64,64,wolf_position_x,244,32,32); //wolf
            }
        if(wolf_to_left==false)
            {
            if (wolf_walking_image_number==5)
            ctx.drawImage(wolf_right,0,0,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==4)
            ctx.drawImage(wolf_right,64,0,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==3)
            ctx.drawImage(wolf_right,0,64,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==2)
            ctx.drawImage(wolf_right,64,64,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==1)
            ctx.drawImage(wolf_right,0,128,64,64,wolf_position_x,244,32,32); //wolf
            if (wolf_walking_image_number==0)
            ctx.drawImage(wolf_right,64,128,64,64,wolf_position_x,244,32,32); //wolf
            }
        }
    if(screen==35)
        {
        ctx.drawImage(brick_wall,0,0,160,160,0,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,0,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,110,160,160); //brick wall
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(155,30,50,50); //sky window
        ctx.drawImage(window1,0,0,50,50,155,30,50,50); //window1
        ctx.fillStyle = '#606060';//more dark grey
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(torch,0,0,320,320,80,200,32,32); //torch
        if(opened_path==false)
            {
            ctx.lineWidth = 5; //stick control closed path
            ctx.moveTo(280, 240);
            ctx.lineTo(310, 270);
            ctx.stroke();
            }
         if(opened_path==true)
            {
            ctx.lineWidth = 5;//stick control closed path
            ctx.moveTo(340, 240);
            ctx.lineTo(310, 270);
            ctx.stroke();
            }
        ctx.fillStyle = 'yellow';
        ctx.fillRect(295,260,30,10);
        if(analgesic_in_screen_35==true){ctx.drawImage(analgesic,0,0,32,32,180-16,253,16,16);} //analgesic
        if(analgesic_in_screen_35==true && position_x>140 && position_x<140+16 && position_y==222){analgesic_in_screen_35=false;health=100;}
        }
    if(screen==36)
        {
        ctx.drawImage(brick_wall,0,0,160,160,0,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,0,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,160,110,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,320,110,160,160); //brick wall
        ctx.fillStyle = '#606060';//more dark grey
        ctx.fillRect(0,270,360,360); //floor
        ctx.drawImage(torch,0,0,320,320,80,200,32,32); //torch
        ctx.drawImage(woman,0,0,66,114,290,221,33,57); //woman
        ctx.drawImage(player_left,320,0,46,50,316,222,46,50);
        ctx.drawImage(heart,0,0,125,125,300,180,50,50); //heart
        ctx.fillStyle = 'black';
        ctx.font = "20px arial";
        ctx.fillText("Health: " + health + "%" , 10, 35);
        ctx.fillText("Time: " + time , 10, 60);
        ctx.fillStyle = 'black';
        ctx.font = "47px arial";
        ctx.fillText("Congratulations!" , 10, 130);
        if (timeworker!==undefined)
        timeworker.terminate();
        timeworker=undefined;
        return;
        }
    //final
    if (screen==36)
        {
        ctx.fillStyle = 'black';
        ctx.font = "47px arial";
        ctx.fillText("Congratulations!" , 10, 130);
        }
    //game over
    if(health<1 || time<0.2 || position_y>360)
        {
        ctx.fillStyle = 'black';
        ctx.font = "62px arial";
        ctx.fillText("Game Over!" , 10, 180);
        if (timeworker!==undefined)
        timeworker.terminate();
        timeworker=undefined;
        return;
        }
    //text
    ctx.fillStyle = 'black';
    ctx.font = "20px arial";
    ctx.fillText("Health: " + health + "%" , 10, 35);
    ctx.fillText("Time: " + Math.floor(time) , 10, 60);

    if (screen==1)
        {
        ctx.fillText("Thinking: I must find my love one... " , 10, 110);
        }
    if (screen==2)
        {
        ctx.fillText("Thinking: I smell danger..." , 10, 110);
        }
    if (screen==3)
        {
        ctx.fillText("Thinking: I smell danger..." , 10, 110);
       }
    if (screen==4)
        {
        ctx.fillText("Thinking: It seems quiet here..." , 10, 110);
        }
    if (screen==5)
        {
        ctx.fillText("Thinking: I feel observed..." , 10, 110);
        }
    if (screen==6)
        {
        ctx.fillText("Thinking: I feel observed..." , 10, 110);
        }
    if (screen==7)
        {
        ctx.fillText("Thinking: I feel observed..." , 10, 110);
        }
    if (screen==8)
        {
        ctx.fillText("Thinking: It seems quiet here..." , 10, 110);
        }
    if (screen==9)
        {
        ctx.fillText("Thinking: It looks like a mix" , 10, 110);
        ctx.fillText("of 'Star Trek' and 'Road Runner'..." , 10, 135);
        }
    if (screen==10)
        {
        ctx.fillText("Thinking: It seems quiet here..." , 10, 110);
        }
    if (screen==11)
        {
        ctx.fillText("Thinking: I smell danger..." , 10, 110);
        }
    if (screen==12)
        {
        ctx.fillText("Thinking: I smell danger..." , 10, 110);
        }
    if (screen==13)
        {
        ctx.fillText("Thinking: It seems quiet here..." , 10, 110);
        }
    if (screen==14)
        {
        ctx.fillText("Thinking: A fall would be lethal..." , 10, 110);
        }
    if (screen==15)
        {
        ctx.fillText("Thinking: A fall would be lethal..." , 10, 110);
        }
    if (screen==16)
        {
        ctx.fillText("Thinking: It seems quiet here..." , 10, 110);
        }
    if (screen==17)
        {
        ctx.fillText("Thinking: It could transmit a" , 10, 110);
        ctx.fillText("diseases... " , 10, 135);
        }
    if (screen==18)
        {
        ctx.fillText("Thinking: It could transmit a" , 10, 110);
        ctx.fillText("diseases... " , 10, 135);
        }
    if (screen==19) //repassar
        {
        ctx.fillText("Thinking: An analgesic can help me..." , 10, 110);
        }
    if (screen==20)
        {
        ctx.fillText("Thinking: I must find my love" , 10, 110);
        ctx.fillText("one... " , 10, 135);
        }
    if (screen==21)
        {
        ctx.fillText("Thinking: It seems quiet here..." , 10, 110);
        }
    if (screen==22)
        {
        ctx.fillText("Thinking: It could transmit a" , 10, 110);
        ctx.fillText("diseases... " , 10, 135);
        }
    if (screen==23)
        {
        ctx.fillText("Thinking: It could transmit a" , 10, 110);
        ctx.fillText("diseases... " , 10, 135);
        }
    if (screen==24)
        {
        ctx.fillText("Thinking: It could transmit a" , 10, 110);
        ctx.fillText("diseases... " , 10, 135);
        }
    if (screen==25) //repassar
        {
        ctx.fillText("Thinking: An analgesic can help me..." , 10, 110);
        }
    if (screen==26) //repassar
        {
        ctx.fillText("Thinking: A door..." , 10, 110);
        }
    if (screen==27) //repassar
        {
        ctx.fillText("Thinking: Light from a door..." , 10, 110);
        }
    if (screen==28)
        {
        ctx.fillText("Thinking: It seems quiet here..." , 10, 110);
        }
    if (screen==29) //repassar
        {
        ctx.fillText("Thinking: Light from a door..." , 10, 110);
        }
    if (screen==30) //repassar
        {
        ctx.fillText("Thinking: A door..." , 10, 110);
        }
    if (screen==31)
        {
        ctx.fillText("Thinking: I smell danger..." , 10, 110);
        }
    if (screen==32)
        {
        ctx.fillText("Thinking: I smell danger..." , 10, 110);
        }
    if (screen==33)
        {
        ctx.fillText("Thinking: I smell danger..." , 10, 110);
        }
    if (screen==34)
        {
        ctx.fillText("Thinking: I smell danger..." , 10, 110);
        }
    if (screen==35)
        {
        ctx.fillText("Thinking: A stick..." , 10, 110);
        }

    //player
    if ((screen!=9 && screen!=14 && screen!=15) || (screen==9 && position_x<80) || (screen==9 && position_x>235) || ((screen==14 || screen==15) && position_x>-30 && position_x<75) || ((screen==14 || screen==15) && position_x>115 && position_x<200) || ((screen==14 || screen==15) && position_x>235 && position_x<380))
        {
	    if(velocity_right==0 && last_move=='right' && jump==false && bend==false && position_y==222){ctx.drawImage(player_right,0,0,46,50,position_x,222,46,50);} //stand right
	    if(velocity_left==0 && last_move=='left' && jump==false && bend==false && position_y==222){ctx.drawImage(player_left,320,0,46,50,position_x,222,46,50);} //stand left
	    if(velocity_right==1 && run_animation_right==0 && jump==false && bend==false && position_y==222){ctx.drawImage(player_right,(0+46*0),150,46,50,position_x,222,46,50);} //run right
	    if(velocity_right==1 && run_animation_right==1 && jump==false && bend==false && position_y==222){ctx.drawImage(player_right,(0+46*1),150,46,50,position_x,222,46,50);}
	    if(velocity_right==1 && run_animation_right==2 && jump==false && bend==false && position_y==222){ctx.drawImage(player_right,(0+46*2),150,46,50,position_x,222,46,50);}
	    if(velocity_right==1 && run_animation_right==3 && jump==false && bend==false && position_y==222){ctx.drawImage(player_right,(0+46*3),150,46,50,position_x,222,46,50);}
	    if(velocity_right==1 && run_animation_right==4 && jump==false && bend==false && position_y==222){ctx.drawImage(player_right,(0+46*4),150,46,50,position_x,222,46,50);}
	    if(velocity_right==1 && run_animation_right==5 && jump==false && bend==false && position_y==222){ctx.drawImage(player_right,(0+46*5),150,46,50,position_x,222,46,50);}
	    if(velocity_right==1 && run_animation_right==6 && jump==false && bend==false && position_y==222){ctx.drawImage(player_right,(0+46*6),150,46,50,position_x,222,46,50);}
	    if(velocity_right==1 && run_animation_right==7 && jump==false && bend==false && position_y==222){ctx.drawImage(player_right,(0+46*7),150,46,50,position_x,222,46,50);}
	    if(velocity_left==1 && run_animation_left==0 && jump==false && bend==false && position_y==222){ctx.drawImage(player_left,(322-46*0),150,46,50,position_x,222,48,50);} //run left
	    if(velocity_left==1 && run_animation_left==1 && jump==false && bend==false && position_y==222){ctx.drawImage(player_left,(322-46*1),150,46,50,position_x,222,46,50);}
	    if(velocity_left==1 && run_animation_left==2 && jump==false && bend==false && position_y==222){ctx.drawImage(player_left,(322-46*2),150,46,50,position_x,222,46,50);}
	    if(velocity_left==1 && run_animation_left==3 && jump==false && bend==false && position_y==222){ctx.drawImage(player_left,(322-46*3),150,46,50,position_x,222,46,50);}
	    if(velocity_left==1 && run_animation_left==4 && jump==false && bend==false && position_y==222){ctx.drawImage(player_left,(322-46*4),150,46,50,position_x,222,46,50);}
	    if(velocity_left==1 && run_animation_left==5 && jump==false && bend==false && position_y==222){ctx.drawImage(player_left,(322-46*5),150,46,50,position_x,222,46,50);}
	    if(velocity_left==1 && run_animation_left==6 && jump==false && bend==false && position_y==222){ctx.drawImage(player_left,(322-46*6),150,46,50,position_x,222,46,50);}
	    if(velocity_left==1 && run_animation_left==7 && jump==false && bend==false && position_y==222){ctx.drawImage(player_left,(322-46*7),150,46,50,position_x,222,46,50);}
	    if(last_move=="right" && jump==false && bend==true){ctx.drawImage(player_right,(0+46*1),0,46,50,position_x,position_y,46,50);} //bend
	    if(last_move=="left" && jump==false && bend==true){ctx.drawImage(player_left,(0+46*6),0,46,50,position_x,position_y,46,50);}
	    if(last_move=="right" && jump==true && bend==false && position_y<222){ctx.drawImage(player_right,(0+46*6),0,46,50,position_x,position_y,46,50);} //jump
	    if(last_move=="left" && jump==true && bend==false && position_y<222){ctx.drawImage(player_left,(0+46*1),0,46,50,position_x,position_y,46,50);}
	    if(last_move=="right" && jump==false && bend==false && position_y<222){ctx.drawImage(player_right,(0+46*7),0,46,50,position_x,position_y,46,50);} //gravity jump
	    if(last_move=="left" && jump==false && bend==false && position_y<222){ctx.drawImage(player_left,(0+46*0),0,46,50,position_x,position_y,46,50);}
        }
    if ((screen==9 && position_x>=80 && position_x<=235) || ((screen==14 ||screen==15) && position_x>=75 && position_x<=115) || ((screen==14 ||screen==15) && position_x>=200 && position_x<=235))
        {
	    if(last_move=="right" && jump==true && bend==false && position_y<222){ctx.drawImage(player_right,(0+46*6),0,46,50,position_x,position_y,46,50);} //jump
	    if(last_move=="left" && jump==true && bend==false && position_y<222){ctx.drawImage(player_left,(0+46*1),0,46,50,position_x,position_y,46,50);}
	    if(last_move=="right" && jump==false && bend==false && position_y<222){ctx.drawImage(player_right,(0+46*7),0,46,50,position_x,position_y,46,50);} //gravity jump
	    if(last_move=="left" && jump==false && bend==false && position_y<222){ctx.drawImage(player_left,(0+46*0),0,46,50,position_x,position_y,46,50);}
        if(last_move=="right" && jump==false && bend==false){ctx.drawImage(player_right,(0+46*7),0,46,50,position_x,position_y,46,50);} //gravity screen 9
	    if(last_move=="left" && jump==false && bend==false){ctx.drawImage(player_left,(0+46*0),0,46,50,position_x,position_y,46,50);}
        }
    //transparent door 
    if(screen==27 || screen==29)
        {
        ctx.fillStyle = "rgba(255,255,255,0.1)";
        ctx.fillRect(265,210,25,60); //door transparent rectangle 
        }
    //castle
    if(screen==20)
        {
        //ctx.fillStyle = 'grey';
        //ctx.fillRect(330,0,30,270); //castle
        ctx.drawImage(brick_wall,0,0,160,160,330,-50,160,160); //brick wall
        ctx.drawImage(brick_wall,0,0,160,160,330,110,160,160); //brick wall
        ctx.drawImage(metalicstring,0,0,140,140,190,130,140,140); //metalic string
        }
    //teleport
    if(screen==9)
        {
        ctx.drawImage(teleport,0,0,40,80,50,190,40,80); //teleport
        ctx.drawImage(teleport,0,0,40,80,270,190,40,80); //teleport
        if(teleporting==true){ctx.drawImage(electric_ray_x,0,0,618,157,72,190,206,52);} // electric ray 
        }
    //electric mines/electric rays           
    if (screen==2 && position_x>50 && position_x<90 && position_y==222){health--;ctx.drawImage(electric_ray,0,347,157,270,55,0,157,270);} //electric rays
    if (screen==2 && position_x>140 && position_x<170 && position_y==222){health--;ctx.drawImage(electric_ray,0,347,157,270,145,0,157,270);}
    if (screen==2 && position_x>185 && position_x<215 && position_y==222){health--;ctx.drawImage(electric_ray,0,347,157,270,190,0,157,270);}
    if (screen==3 && position_x>85 && position_x<115 && position_y==222){health--;ctx.drawImage(electric_ray,0,347,157,270,90,0,157,270);}
    if (screen==3 && position_x>140 && position_x<185 && position_y==222){health--;ctx.drawImage(electric_ray,0,347,157,270,145,0,157,270);}
    if (screen==3 && position_x>240 && position_x<270 && position_y==222){health--;ctx.drawImage(electric_ray,0,347,157,270,245,0,157,270);}
    if (screen==11 && position_x>85 && position_x<115 && position_y==222){health--;ctx.drawImage(electric_ray,0,347,157,270,90,0,157,270);}
    if (screen==11 && position_x>140 && position_x<185 && position_y==222){health--;ctx.drawImage(electric_ray,0,347,157,270,145,0,157,270);}
    if (screen==11 && position_x>240 && position_x<270 && position_y==222){health--;ctx.drawImage(electric_ray,0,347,157,270,245,0,157,270);}
    if (screen==12 && position_x>50 && position_x<90 && position_y==222){health--;ctx.drawImage(electric_ray,0,347,157,270,55,0,157,270);}
    if (screen==12 && position_x>140 && position_x<170 && position_y==222){health--;ctx.drawImage(electric_ray,0,347,157,270,145,0,157,270);}
    if (screen==12 && position_x>185 && position_x<215 && position_y==222){health--;ctx.drawImage(electric_ray,0,347,157,270,190,0,157,270);}
    //wolf/wolfs(wolf1,wolf2,wolf3)
    if(((wolf_position_x==position_x || wolf_position_x==position_x+1 || wolf_position_x==position_x+2 || wolf_position_x==position_x+3 || wolf_position_x==position_x+4) && position_y>200 && (screen==17 || screen==22 || screen==24 || screen==32 || screen==34)) || ((wolf1_position_x==position_x || wolf1_position_x==position_x+1 || wolf1_position_x==position_x+2 || wolf1_position_x==position_x+3 || wolf1_position_x==position_x+4) && position_y>200 && (screen==18 || screen==23 || screen==24)) || ((wolf2_position_x==position_x || wolf2_position_x==position_x+1 || wolf2_position_x==position_x+2 || wolf2_position_x==position_x+3 || wolf2_position_x==position_x+4) && position_y>200 && (screen==18 || screen==23 || screen==24)) || ((wolf3_position_x==position_x || wolf3_position_x==position_x+1 || wolf3_position_x==position_x+2 || wolf3_position_x==position_x+3 || wolf3_position_x==position_x+4) && position_y>200 && (screen==18 || screen==23 || screen==24)))
        {
        health=health-5;
        if(counter_diseases<12)
            {
            counter_diseases++;
            }
        else
            {
            counter_diseases=1;
            }
        ctx.drawImage(diseases[counter_diseases],0,0,64,64,position_x,position_y,64,64); //diseases
        }

    }

function restart()
    {
    //stop workers
    if (gravityworker!==undefined)
    gravityworker.terminate();
    if (jumpworker!==undefined)
    jumpworker.terminate();
    if (wolfworker!==undefined)
    wolfworker.terminate();
    if (timeworker!==undefined)
    timeworker.terminate();
    if (wolfsworker!==undefined)
    wolfsworker.terminate();
    gravityworker=undefined;
    jumpworker=undefined;
    wolfworker=undefined;
    timeworker=undefined;
    wolfsworker=undefined;
    //reset variables
    screen=1;
    health=100;
    position_x=76;
    position_y=222;
    velocity_right=0;
    velocity_left=0;
    last_move='right';
    run_animation_right=0;
    run_animation_left=0;
    jump=false;
    bend=false;
    cam_position_x=350;
    eye="closed";
    wolf_walking_image_number=0;
    wolf1_walking_image_number=0;
    wolf2_walking_image_number=0;
    wolf3_walking_image_number=0;
    teleporting=false;
    counter_diseases=0;
    analgesic_in_screen_19=true;
    analgesic_in_screen_25=true;
    analgesic_in_screen_35=true;
    opened_path=false;
    //start workers
    init_gravityworker();
    init_jumpworker();
    init_wolfworker();
    init_timeworker();
    init_wolfsworker();
    }
// CANVAS
var canvas = document.getElementById('canvas');
// KEYBOARD
document.onkeydown = checkKeyDown;
function checkKeyDown(e) 
    {
    if (e.keyCode == '37') //left cursor
        {
        if ((screen!=9 && screen!=14 && screen!=15 && screen!=27 && screen!=30) || (screen==9 && position_x<80) || (screen==9 && position_x>235) || ((screen==14 ||screen==15) && position_x>-30 && position_x<75) || ((screen==14 ||screen==15) && position_x>115 && position_x<200) || ((screen==14 ||screen==15) && position_x>235 && position_x<380) && bend==false)
            {
            velocity_right=0;
            velocity_left=1;
            last_move='left';
            if (run_animation_left==7){run_animation_left=0;}else{run_animation_left++;}
            if (position_x>-50){position_x=position_x-5;}
            }
        else if(screen==27  && position_x>-10 && bend==false)
            {
            velocity_right=0;
            velocity_left=1;
            last_move='left';
            if (run_animation_left==7){run_animation_left=0;}else{run_animation_left++;}
            if (position_x>-10){position_x=position_x-5;}
            }
        else if(screen==30 && opened_path==false && position_x>30 && bend==false)
            {
            velocity_right=0;
            velocity_left=1;
            last_move='left';
            if (run_animation_left==7){run_animation_left=0;}else{run_animation_left++;}
            if (position_x>30){position_x=position_x-5;}
            }
        else if(screen==30 && opened_path==true && position_x>-50 && bend==false)
            {
            velocity_right=0;
            velocity_left=1;
            last_move='left';
            if (run_animation_left==7){run_animation_left=0;}else{run_animation_left++;}
            if (position_x>-50){position_x=position_x-5;}
            }
        else
            {
            gravityworker.postMessage({position_y: position_y, screen: screen, position_x: position_x});
            }
        }
    if (e.keyCode == '39') //right cursor
        {
        if ((screen!=9 && screen!=14 && screen!=15 && screen!=26 && screen!=29 && screen!=35 )|| (screen==9 && position_x<80) || (screen==9 && position_x>235) || ((screen==14 ||screen==15) && position_x>-30 && position_x<75) || ((screen==14 ||screen==15) && position_x>115 && position_x<200) || ((screen==14 ||screen==15) && position_x>235 && position_x<380) && bend==false)
            {
            velocity_left=0;
            velocity_right=1;
            last_move='right';
            if (run_animation_right==7){run_animation_right=0;}else{run_animation_right++;}
            if (position_x<370){position_x=position_x+5;}
            } 
       else if((screen==26 || screen==29 || screen==35) && position_x<320 && bend==false)
            {
            velocity_left=0;
            velocity_right=1;
            last_move='right';
            if (run_animation_right==7){run_animation_right=0;}else{run_animation_right++;}
            if (position_x<320){position_x=position_x+5;}
            }
        else
            {
            gravityworker.postMessage({position_y: position_y, screen: screen, position_x: position_x});
            }
        }
    if (e.keyCode == '38') //up cursor
        {
        if (position_y==222 && position_x<350 && position_x>-40){jump=true;health=health-1;} 
        jumpworker.postMessage({position_y: position_y, position_x: position_x, last_move: last_move});
        }
    if (e.keyCode == '40') //down cursor
        {
        bend=true;   
        }
    if (e.keyCode == '13') //enter
        {
        var teleported=false;   
        if ((screen==9 && position_x>=40) && (screen==9 && position_x<80))
            {
            teleporting=true;
            position_x=260;
            teleported=true;
            }
        if ((screen==9 && position_x>=240) && (screen==9 && position_x<280) && teleported==false)
            {
            teleporting=true;
            position_x=60;
            }
        var screen26to27orreverse=false;
        if (screen==26 && position_x>245 && position_x<270 && jump==false && screen26to27orreverse==false){screen=27;last_screen=26;screen26to27orreverse=true}
        if (screen==27 && position_x>245 && position_x<270 && jump==false && screen26to27orreverse==false){screen=26;last_screen=27;}
        var screen29to30orreverse=false;
        if (screen==29 && position_x>245 && position_x<270 && jump==false && screen29to30orreverse==false){screen=30;last_screen=29;screen29to30orreverse=true}
        if (screen==30 && position_x>245 && position_x<270 && jump==false && screen29to30orreverse==false){screen=29;last_screen=30;}
        var stick_changed=false;
        if (screen==35 && position_x>280 && position_x<320 && opened_path==false && stick_changed==false){opened_path=true;stick_changed=true;}
        if (screen==35 && position_x>280 && position_x<320 && opened_path==true && stick_changed==false){opened_path=false;}
        }
    if (e.keyCode == '27') //escape
        {
        restart();
        }
    }
document.onkeyup = checkKeyUp;
function checkKeyUp(e) 
    {
    if (e.keyCode == '37') //left cursor
        {
        velocity_left=0;
        run_animation_left=0;
        }
    if (e.keyCode == '39') //right cursor
        {
        velocity_right=0;
        run_animation_right=0;
        }
    if (e.keyCode == '38') //up cursor
        {
        //
        }
    if (e.keyCode == '40') //down cursor
        {
        bend=false;
        }
    if (e.keyCode == '13') //down cursor
        {
        teleporting=false;
        }
    }

// WEB WORKERS
var timeworker;
function init_timeworker() 
    {
    if (typeof(Worker) !== "undefined") 
        {
        if (typeof(timeworker) == "undefined") 
            {
            timeworker = new Worker("timeworker.js");
            }
        timeworker.onmessage = function(event_time) 
            {
            time=event_time.data.time.toFixed(2);
            };
        }
    }

var gravityworker;
function init_gravityworker() 
    {
    if (typeof(Worker) !== "undefined") 
        {
        if (typeof(gravityworker) == "undefined") 
            {
            gravityworker = new Worker("gravityworker.js");
            }
        gravityworker.onmessage = function(event_gravity) 
            {
            position_y=event_gravity.data.position_y;
            gravityworker.postMessage({position_y: position_y, screen: screen, position_x: position_x});
            };
        }
    }

var jumpworker;
function init_jumpworker() 
    {
    if (typeof(Worker) !== "undefined") 
        {
        if (typeof(jumpworker) == "undefined") 
            {
            jumpworker = new Worker("jumpworker.js");
            }
        jumpworker.onmessage = function(event_jump) 
            {
            if (jump==true)
                {
                position_y=event_jump.data.position_y;
                position_x=event_jump.data.position_x;
                jumpworker.postMessage({position_y: position_y, position_x: position_x, last_move: last_move});
                }
            if (position_y==152){jump=false;gravityworker.postMessage({position_y: position_y});}
            };
        }
    }

var wolfworker;
function init_wolfworker() 
    {
    if (typeof(Worker) !== "undefined") 
        {
        if (typeof(wolfworker) == "undefined") 
            {
            wolfworker = new Worker("wolfworker.js");
            }
        wolfworker.onmessage = function(event_wolf) 
            {
            wolf_position_x=event_wolf.data.wolf_position_x;
            wolf_to_left=event_wolf.data.wolf_to_left;
            if(wolf_walking_image_number<6)
                {
                wolf_walking_image_number++;
                }
            if(wolf_walking_image_number==6)
                {
                wolf_walking_image_number=0;                
                }
            };
        }
    }

var wolfsworker;
function init_wolfsworker() 
    {
    if (typeof(Worker) !== "undefined") 
        {
        if (typeof(wolfsworker) == "undefined") 
            {
            wolfsworker = new Worker("wolfsworker.js");
            }
        wolfsworker.onmessage = function(event_wolfs) 
            {
            wolf1_position_x=event_wolfs.data.wolf1_position_x;
            wolf1_to_left=event_wolfs.data.wolf1_to_left;
            wolf2_position_x=event_wolfs.data.wolf2_position_x;
            wolf2_to_left=event_wolfs.data.wolf2_to_left;
            wolf3_position_x=event_wolfs.data.wolf3_position_x;
            wolf3_to_left=event_wolfs.data.wolf3_to_left;
            if(wolf1_walking_image_number<6)
                {
                wolf1_walking_image_number++;
                }
            if(wolf1_walking_image_number==6)
                {
                wolf1_walking_image_number=0;                
                }
            if(wolf2_walking_image_number<6)
                {
                wolf2_walking_image_number++;
                }
            if(wolf2_walking_image_number==6)
                {
                wolf2_walking_image_number=0;                
                }
            if(wolf3_walking_image_number<6)
                {
                wolf3_walking_image_number++;
                }
            if(wolf3_walking_image_number==6)
                {
                wolf3_walking_image_number=0;                
                }
            };
        }
    }

/*
// PROGRESIVE WEB 
if ('serviceWorker' in navigator) 
    {
    navigator.serviceWorker.register('servicew.js')
    .then(function () 
        {
        console.log('service worker registered');
        })
    .catch(function () 
        {
        console.warn('service worker failed');
        });
    }*/
// PRELOAD IMAGES
addLoadEvent(preloader);
// INIT workers
init_timeworker();
init_gravityworker();
init_jumpworker();
init_wolfworker();
init_wolfsworker();
// INTERVAL DRAW FRAMES
interval=window.setInterval(draw,17);
