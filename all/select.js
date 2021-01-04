var mycanvas = document.getElementById("mycanvas");
var q= mycanvas.getContext("2d");

q.beginPath();
q.arc(100,75,50,0,2 * Math.PI);
q.fillarc()
q.stroke();
q.closePath();
function a_click()
{
    var  v = document.querySelector('li.odd');
    v.style.color = 'Red';
}
function b_click()
{
    var v = document.querySelector('li.even');
    v.style.color='Green'
}
function c_click()
{
    var v= document.querySelectorAll('li.odd');
    for( var i=0;i<v.length;i++)
    v[i].style.color='Red';
}
function d_click()
{
    var v= document.querySelectorAll('li.even');
    v[i].style.color='Green';
}
    function e_click()
{
    var v= document.querySelectorAll('li.even, li.odd');
    for( var i=0;i<v.length;i++)
    v[i].style.color='Pink';
}