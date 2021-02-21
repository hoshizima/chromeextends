console.log("start content.js");
let video = document.getElementsByClassName("video-stream html5-main-video");
let minutes, seconds;
setInterval(function ()
{
    minutes = Math.floor(video[0].currentTime / 60);
    seconds = Math.floor(video[0].currentTime % 60);
    chrome.storage.sync.set({ minutes: minutes, seconds: seconds });

}, 1000)