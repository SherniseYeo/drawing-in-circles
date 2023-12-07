var mouseEvent="empty"
var lastpositionofx,lastpositonofy
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="hotpink"
widthoftheline=5
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    mouseEvent="mouseDown"
    color=document.getElementById('color').value;
    widthoftheline = document.getElementById('widthoftheline').value;
    radius = document.getElementById('radius').value;
}
canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
    mouseEvent="mouseleave"
}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    mouseEvent="mouseup"
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
  current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.clientY - canvas.offsetTop;
      if(mouseEvent=="mouseDown"){
        ctx.beginPath()
         ctx.strokeStyle=color
          ctx.lineWidth=widthoftheline
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,10,0,2*Math.PI)
                 ctx.stroke();
       
      }
    lastpositionofx=current_position_of_mouse_x
    lastpositionofy=current_position_of_mouse_y
}

