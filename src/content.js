window.onload = function ()
{
    console.log("content.js start");
    //動画のvideo要素
    let video = document.getElementsByClassName("video-stream html5-main-video");

    //コメント欄clone用
    let commentsclone = document.getElementById("comments").children[1].children[0].cloneNode(true);

    //video要素及び親要素
    let primaryinner = document.getElementById("primary-inner");

    //時間表示用のinput要素
    let inputhtml = '<div id="excontent"></div>'

    //children[0]にvideo要素が入っているので次の要素前に挿入
    primaryinner.children[1].insertAdjacentHTML("beforebegin", inputhtml);

    //独自要素追加後、要素を取得
    let excontent = document.getElementById("excontent");
    //let excurrenttime = document.getElementById("excurrenttime");
    //let excomment = document.getElementById("excomment");

    //コメント欄追加
    excontent.appendChild(commentsclone);

    let minutes, seconds;
    setInterval(function ()
    {
        minutes = Math.floor(video[0].currentTime / 60);
        seconds = "0" + Math.floor(video[0].currentTime % 60);
        //excurrenttime.value = minutes + ":" + seconds.slice(-2);
        //chrome.storage.sync.set({ minutes: minutes, seconds: seconds });
        //console.log(minutes + ":" + seconds);
    }, 1000)
}
