// Play all the videos in a web page 
//

function show_play(){
  document.getElementById('play_all').innerHTML = " &#9654;";
}

function show_pause(){
  document.getElementById('play_all').innerHTML = "<b>||</b>";
}


window.onload = function () {
  var x = document.getElementsByTagName('video');

  for (i = 0; i < x.length; i++) {
    x[i].onended=function(e) {
      show_play();
      document.getElementById("play_all").onclick=function(){play_all_videos();};
    };
  }
}


function play_all_videos(){
  var x = document.getElementsByTagName("video");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].play();
  }
  show_pause();
  document.getElementById("play_all").onclick=function(){pause_all_videos();};
}


function pause_all_videos(){
  var x = document.getElementsByTagName("video");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].pause();
  }
  show_play()
  document.getElementById("play_all").onclick=function(){play_all_videos();};
}


function restart_all_videos() {
  var x = document.getElementsByTagName("video");
  show_play();
  for (i = 0; i < x.length; i++) {
      x[i].currentTime = 0;
      x[i].pause();
  }
}

function skip_all_videos(value) {
  var x = document.getElementsByTagName("video");
  for (i = 0; i < x.length; i++) {
      x[i].currentTime += value;
  }
}
