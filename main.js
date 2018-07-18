var menuControl, drawerStatus, menuItems, treads, drawerTl;

function initialSetup() {
  'use strict';
  menuControl = document.getElementById('menu-control');
  drawerStatus = 0;
  menuItems = document.getElementsByClassName('nav-link');
  treads = document.getElementsByClassName('tread');

  //Set Up Timelines
  drawerTl = new TimelineMax();
  drawerTl.add(TweenMax.to('#treads', 0.0, {left:'196px'}), 0);
  drawerTl.add(TweenMax.to('#vert1', 0.1, {left:'6px'}), 0);
  drawerTl.add(TweenMax.to('#vert2', 0.1, {opacity:0}), 0);
  drawerTl.add(TweenMax.to('#vert3', 0.1, {left:'-6px'}), 0);
  drawerTl.add(TweenMax.to('#vert1', 0.2, {rotation:45}), 0.1);
  drawerTl.add(TweenMax.to('#vert3', 0.2, {rotation:-45}), 0.1);
  drawerTl.add(TweenMax.to('#drawer', 0.2, {width:'196px', borderColor:'#ffffff', ease:Quad.easeOut}), 0.3);
  drawerTl.add(TweenMax.to('#logo', 0.2, {width:'156px'}), 0.3);
  drawerTl.add(TweenMax.to('#close', 0.2, {width:'74px', opacity:1}), 0.6);
  drawerTl.staggerTo(treads, 0.6, {width:'25%', opacity:1, ease:Power2.easeOut}, 0.2, 0.9);
  drawerTl.staggerTo(menuItems, 0.8, {textIndent:0, ease:Power2.easeOut}, 0.1, 1.4);
  drawerTl.add(TweenMax.to('#job-bubble', 0.2, {opacity:1}), 2.4);
  drawerTl.pause();

  menuControl.addEventListener('click', function() {
    if (drawerStatus===0) {
      drawerTl.play().timeScale(1);
      drawerStatus = 1;
    }
    else {
      drawerTl.reverse().timeScale(2);
      drawerStatus = 0;
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  'use strict';
  setTimeout(function() {
    initialSetup(0);
  }, 100);
});