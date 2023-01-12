var btn = document.getElementById('btn')
  var rotate = document.getElementById('rotate')
  var close = document.getElementById("close")
  var gif = document.getElementById("gif")
  var jpg = document.getElementById('jpg')
btn.addEventListener('click', function(){
  
  if(rotate.style.display === 'none'){
    rotate.style.display = 'inline';
    close.style.display = 'none';
    gif.style.display = 'none';
    jpg.style.display = 'inline';
  } else {
    rotate.style.display = 'none';
    close.style.display = 'inline';
    gif.style.display = 'inline';
    jpg.style.display = 'none';
  }
})
