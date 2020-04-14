var GRID_X = 40;
var GRID_Y = GRID_X;

var scale = window.devicePixelRatio;

var ctx = null;
var canvas  = null;
var scale = 1;

document.addEventListener('DOMContentLoaded', e=>{
    
    // get canvas
    canvas = document.getElementById("title");
    //get 2D context
    ctx = canvas.getContext('2d');

    adjust_title_canvas();

    window.requestAnimationFrame(
        update_logo
    )


    // render_grid(ctx, canvas.width, canvas.height);
    // render_logo(ctx, canvas.width, canvas.height);
    // render_title(ctx, canvas.width, canvas.height);

});

window.addEventListener('resize', e=>{

    adjust_title_canvas();

    window.requestAnimationFrame(
        update_logo
    )


});

function adjust_title_canvas(){

    //get the device / pixel ratio
    // for high-res devices where media resolution != physical resolution
    //e.g. retina display, this value will be greater than 1.
    scale = window.devicePixelRatio;
    console.log(scale);
    //fit to screen
    canvas.width =document.documentElement.clientWidth * scale;
    canvas.height = 650 * scale;

    canvas.style.width =  document.documentElement.clientWidth + 'px';
    canvas.style.height = 650 + 'px';

    //ctx.scale(1, 1);
}


document.addEventListener('mousemove', logo_mousemove);
var logo_anim_id = null;

function logo_mousemove(e){

    // to save resources, only fire animation if mouse is close to the logo
    if  (   Math.abs(e.clientX - canvas.width/2) > 200 &&
            Math.abs(e.clientY - canvas.height/2) > 200)
    {
        return null;
    }

    // request a frame from the browser
    event = e;
    window.requestAnimationFrame(
        update_logo
    )
};

var event = null;

function update_logo(){
    e = event;
    // clear the logo
    ctx.clearRect(0,0,canvas.width,canvas.height);

    //render_grid(ctx, canvas.width, canvas.height);
    if (e == null)
        render_logo(ctx, canvas.width, canvas.height);
    else
        render_logo(ctx, canvas.width, canvas.height, e.clientX, e.clientY);



    //even if the mouse is not moving, trigger animation for the jitter effect
    //cancel frame if a previous event (mouse move or request Anim)
    //has requested a frame, since exsessive requests can slow down the animation
    window.cancelAnimationFrame(logo_anim_id);

    //make request
    logo_anim_id = window.requestAnimationFrame(
        update_logo
    )

} 


// function to render a grid on the screen
function render_grid(ctx, w, h){

    ctx.save()
    // grids are gray
    ctx.fillStyle='#eaeaea';
 
    ctx.beginPath();

    let RADIUS = 3.5;

    let i = 0;
    let j = 0;
    let r = 0;

    let f = (n) => Math.pow(n, 2.5);

    for (; i < h; i+=GRID_Y){
        for (j = 0; j < w; j+=GRID_X){
            // draw circle
            let distance = Math.sqrt(Math.pow((j - w/2), 2) + Math.pow((i - h/2), 2));
            
            distance = 2 * distance / w;
            let show_circle = Math.random() > f(1 - distance);
          
            if (show_circle)
                r = 0;
            else 
                r = RADIUS;
            ctx.moveTo(j + r, i);
      
            ctx.arc(j, i, r, 0, Math.PI * 2, false);
        }
    }

    ctx.fill()
    
    ctx.restore();
}
/* https://www.text-image.com/index.html */
var logo_txt = 
`      _____             
    -ohmMMMmho-         
 -dMMMMMMMMMMMd-        
:MMMMMMMMMMMMMMM/       
mMMMMMMMMMMMdysso:-     
NMMMMMMMMd/'     NMNy-  
sMMMMMMN/       /MMMMMy 
 sMMMMM/       /NMMMMMMs
  -yNMN     '/dMMMMMMMMN
     .:ossydMMMMMMMMMMMm
       /MMMMMMMMMMMMMMM:
        -dMMMMMMMMMMMd- 
          -ohmMMMmho-   
             """""      
`;

var logo_txt_alt = 
`                        
                        
                        
========================
There is only one pr    
oblem with common sense;
it’s not very common.”  
— Milt Brycey-          
========================
                        
                        
                        
                        
                        
                        
                        
`;

var random_katakana = "ァィゥヱヲ開発部エーシーエム";
var random_pointer = [  
                        'alias',
                        'all-scroll',
                        'auto',
                        'cell',
                        'context-menu',
                        'col-resize',
                        'copy',
                        'crosshair	',
                        'default',
                        'e-resize',
                        'ew-resize',
                        'grab',
                        'grabbing	',
                        'help',
                        'move',
                        'n-resize',
                        'ne-resize',
                        'nesw-resize',
                        'ns-resize',
                        'nw-resize',
                        'nwse-resize',
                        'no-drop',
                        'none',
                        'not-allowed',
                        'pointer',
                        'progress',
                        'row-resize',
                        's-resize',
                        'se-resize',
                        'sw-resize',
                        'text',
                        'vertical-text',
                        'w-resize',
                        'wait',
                        'zoom-in',
                        'zoom-out',
                        'initial'];
                        

function render_logo(ctx, w, h, mouse_x = 0, mouse_y = 0){

    ctx.save();

    let R = 20 * scale;
    let S = 100 * scale;

    let x = w / 2;
    let y = h / 2;
    ctx.beginPath();


    ctx.moveTo(x-S, y-R);
    ctx.lineTo(x-R, y-S);
    ctx.quadraticCurveTo(x, y-(R+S), x+R, y-S);

    ctx.lineTo(x+S, y-R);
    ctx.quadraticCurveTo(x+(R+S), y, x+S, y+R);

    ctx.lineTo(x+R, y+S);
    ctx.quadraticCurveTo(x, y+(R+S), x-R, y+S);

    ctx.lineTo(x-S, y+R);
    ctx.quadraticCurveTo(x-(R+S), y, x-S, y-R);

    ctx.save();
    ctx.shadowColor = 'rgb(9, 18, 21, 0.3)';
    ctx.shadowOffsetY = 10 * scale;
    ctx.shadowBlur = 30 * scale;
    
    ctx.fillStyle='#333d40';
    ctx.fill();

    ctx.restore();

    let i = 0;
    let j = 0;

    let COL = 25;
    let ROW = 14;

    let x_offset = 51 * scale;
    let y_offset = 51 * scale;
    let x_offset_scale = 4.2 * scale;
    let y_offset_scale = 8 * scale;

    ctx.font = (6 * scale) + 'px Arial';
    ctx.fillStyle='#eeeeee';

    let txt = logo_txt;

    // let num = Math.floor(Math.random() * 64);
    // if (num < 3)
    //     COL = 25 - num;

    if (Math.random() < 0.01){
        x_offset+=Math.random()*20-10;
    }

    // if (Math.random() < 0.8){
    //     canvas.style.cursor = random_pointer[Math.floor(Math.random() * 32)];
    // }

    for (i = 0; i < ROW; i++){
        for (j = 0; j < COL; j++){
            let c = txt[i * COL + j];
            let x_coord = x - x_offset + j*x_offset_scale;
            let y_coord = y - y_offset + i*y_offset_scale;

            let d = Math.abs(x_coord - mouse_x) + Math.abs(y_coord - mouse_y);

            if ( d < 80 && Math.random() < Math.pow((1 - d / 80), 3)){
                c = random_katakana[Math.floor(Math.random() * 14)];
                ctx.save();
                ctx.fillStyle='#72777d';
                ctx.font = 'bold ' + (8 * scale) + 'px Arial';

                ctx.fillText(c, x_coord, y_coord);
                
                ctx.beginPath();
                ctx.strokeStyle = '#72777d';
                ctx.moveTo(x_coord, y_coord);
                ctx.lineTo(x_coord +  (mouse_x - x_coord), y_coord + (mouse_y - y_coord));
                ctx.stroke();
                
                ctx.restore();
                j+=5;
                //i+=1;
                continue;
            }
            if (c != ' ' && Math.random() < 0.01){
                c = random_katakana[Math.floor(Math.random() * 14)];
                ctx.fillStyle='#ffeeee';
            }
            else{
                ctx.fillStyle='#eeeeee';
            }
            
                x_coord+=Math.random()-0.5;
                y_coord+=Math.random()-0.5;
            
            ctx.fillText(c, x_coord, y_coord);
            
        }
    }
    
    ctx.restore();

    render_title(ctx, canvas.width, canvas.height);

} 



function render_title(ctx, w, h){

    ctx.save()

    let x = w / 2;
    let y = 500;

    ctx.font = '600 ' +  45 * scale + 'px Poppins';
    ctx.fillStyle='#333636';
    ctx.textAlign = "center";
    ctx.fillText("ACM Design", x , y);
    
    ctx.restore();
}