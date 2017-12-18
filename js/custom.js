// Function to reveal lightbox and adding YouTube autoplay
function revealVideo(div,video_id) {
  var a = document.createElement("div");
  
  a.id = "overlayDiv";
  
  /*
  a.style.zIndex = "9999";
  a.style.backgroundColor = "black";
  a.style.width = "100%";
  a.style.height = "100%";
  */
  
  a.style.cssText = 'position:absolute;z-index:9999;width:100%;height:100%;opacity:0.8;background:#000;top:0%;left:0%';

  document.body.appendChild(a);
  
  
  var video = document.getElementById(video_id).src;
  document.getElementById(video_id).src = video+'&autoplay=1'; // adding autoplay to the URL
  document.getElementById(div).style.display = 'block';
}

// Hiding the lightbox and removing YouTube autoplay
function hideVideo(div,video_id) {
  console.log('close window called');
  var a = document.getElementById("overlayDiv");
  a.style.cssText = 'position:absolute;z-index:-1;width:100%;height:100%;opacity:0.0;background:#000;top:0%;left:0%';
  // $("#overlayDiv").hide();
  var video = document.getElementById(video_id).src;
  var cleaned = video.replace('&autoplay=1',''); // removing autoplay form url
  document.getElementById(video_id).src = cleaned;
  document.getElementById(div).style.display = 'none';
}