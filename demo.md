---
layout: default
permalink: /demo/
---
<div class="particles">
  <div class="childbox" 
    data-attach-class=".parentbox" 
    data-attach-position="top right" 
    data-child-anchor="top left" 
    data-offset-left="0" 
    data-offset-top="0" 
    data-child-zindex="2">
  </div>
  <div class="childbox" 
    data-attach-class=".parentbox" 
    data-attach-position="top left" 
    data-child-anchor="top right" 
    data-offset-left="0" 
    data-offset-top="0" 
    data-child-zindex="2">
  </div>
</div>




<div class="wrapper hero">
  <div class="grid w12">
    <div>
      <div class="parentbox"></div>      
    </div>
  </div>
</div>


<style>
.particles {
  position: absolute;
  overflow:hidden;
  top:0;
  width:100%; height:100%;
  background-color:rgba(0,0,0,0.3);
  z-index: 100;
      pointer-events:none;
}
.parentbox {
  display: block;
  width:100%; max-width: 800px; height:200px;
  border:3px solid #F00;
  margin:0 auto;

  background-color:rgba(255,0,0,0.5);
  z-index: 10;
}
.childbox {
  position:absolute;
  width:100px;
  height:100px;
  background-color:rgba(255,255,0,0.5);
  z-index: 11;
}
</style>