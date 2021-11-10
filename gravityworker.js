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

var position_y;
var screen;
var position_x;
function gravity()
    {
    //jump
    if (position_y<222)
        {
        position_y=position_y+2;
        postMessage({position_y: position_y});
        }
    //screen 9
    if (screen==9 && position_x>=80 && position_x<=235 && position_y>=222)
        {
        position_y=position_y+2;
        postMessage({position_y: position_y});
        }
    //screen 14 or 15
    if ((screen==14 || screen==15) && ((position_x>=75 && position_x<=115) || (position_x>=200 && position_x<=235)) && position_y>=222)
        {
        position_y=position_y+2;
        postMessage({position_y: position_y});
        }
    }
self.onmessage = function(event) 
    {
    position_y=event.data.position_y;
    screen=event.data.screen;
    position_x=event.data.position_x;
    self.setTimeout(gravity,10);
    }




