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
var wolf1_to_left=true;
var wolf1_position_y;
var wolf1_position_x=320;
var wolf2_to_left=false;
var wolf2_position_y;
var wolf2_position_x=180;
var wolf3_to_left=true;
var wolf3_position_y;
var wolf3_position_x=280;
function wolf1()
    {
    if (wolf1_position_x>180 && wolf1_position_x<320 && wolf1_to_left==true)  
        {    
        wolf1_position_x=wolf1_position_x-5;
        }
    if (wolf1_position_x>180 && wolf1_position_x<320 && wolf1_to_left==false)   
        {
        wolf1_position_x=wolf1_position_x+5;
        }
    if (wolf1_position_x==180)
        {
        wolf1_to_left=false;
        wolf1_position_x=185;
        }
    if (wolf1_position_x==320)
        {
        wolf1_to_left=true;
        wolf1_position_x=315;
        }
    }
function wolf2()
    {
    if (wolf2_position_x>180 && wolf2_position_x<320 && wolf2_to_left==true)  
        {    
        wolf2_position_x=wolf2_position_x-5;
        }
    if (wolf2_position_x>180 && wolf2_position_x<320 && wolf2_to_left==false)   
        {
        wolf2_position_x=wolf2_position_x+5;
        }
    if (wolf2_position_x==180)
        {
        wolf2_to_left=false;
        wolf2_position_x=185;
        }
    if (wolf2_position_x==320)
        {
        wolf2_to_left=true;
        wolf2_position_x=315;
        }
    }
function wolf3()
    {
    if (wolf3_position_x>180 && wolf3_position_x<320 && wolf3_to_left==true)  
        {    
        wolf3_position_x=wolf3_position_x-5;
        }
    if (wolf3_position_x>180 && wolf3_position_x<320 && wolf3_to_left==false)   
        {
        wolf3_position_x=wolf3_position_x+5;
        }
    if (wolf3_position_x==180)
        {
        wolf3_to_left=false;
        wolf3_position_x=185;
        }
    if (wolf3_position_x==320)
        {
        wolf3_to_left=true;
        wolf3_position_x=315;
        }
    }
function wolfs()
    {
    wolf1();
    wolf2();
    wolf3();
    postMessage({wolf1_position_x: wolf1_position_x, wolf1_to_left: wolf1_to_left, wolf2_position_x: wolf2_position_x, wolf2_to_left: wolf2_to_left, wolf3_position_x: wolf3_position_x, wolf3_to_left: wolf3_to_left});
    }
var interval=self.setInterval(wolfs,200);
