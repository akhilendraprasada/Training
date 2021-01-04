
function full_screen()
{
    if("fullscreenEnabled" in document)
    {
        if(document.fullscreenEnabled)
        console.log("user allows function");
        var a=document.getElementById("box");
        if("requestFullscreen" in a)
        {
            a.requestFullscreen();
        }
    }
    else
    {
        console.log("user cant allowed for full screen");
    }
}

function screen_change()
{
    if(document.fullscreenElement)
    {
        console.log("current full screen elemnet is" +(document.fullscreenElement));

    }
    else
    {
        if("exitFullscrren" in document)
        {
            document.exitFullscreen();
        }
    }
}
document.addEventListener("fullscreenchange", screen_change);
document.addEventListener("fullscreenerror", function(){
    console.log("full screen failed");
});
