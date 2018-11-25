window.onkeydown = function (ch){
    var header = document.getElementById('header');
    var left_col = document.getElementById('left_col');
    var center_col = document.getElementById('center_col');
    var right_col = document.getElementById('right_col');
    var footer = document.getElementById('footer');
    var arr = [header,left_col,right_col,center_col,footer];
    var a = document.getElementsByTagName('a');
    if(ch.keyCode == 77){
        for(var i = 0; i < arr.length; i++){
        arr[i].style.background = 'black';
        arr[i].style.color = 'white';
        arr[i].style.fontFamily = 'monospace';
        }
        for(var i = 0; i < a.length; i++){
        a[i].style.textDecoration = 'none';
        a[i].style.color = 'white';
        a[i].id = 'a_js';
        }
    }
    var color = 500; 
    setInterval(function(){
      for(var i = 0; i < arr.length; i++){
        arr[i].style.background = '#'+ color;
        arr[i].style.transition = '0.5s';
          console.log(arr[i].style.background);
          
        }  
        color += 1;
    },500);
}
