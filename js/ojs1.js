
function square( )
{
var a,area,perimeter;
a = parseInt(document.getElementById("f").value);
area = a*a; 
perimeter = 4*a; 
document.getElementById("num").innerHTML="Area of square is : "+area;
document.getElementById("num1").innerHTML="Perimeter of square is : "+perimeter;
}
function circle( )
{
var a,area,perimeter,b;
a = parseInt(document.getElementById("f").value);
b=parseInt(document.getElementById("s").value);
area = b*b*Math.PI; 
perimeter = 2*Math.PI*b; 
document.getElementById("num").innerHTML="Area of circle is : "+area;
document.getElementById("num1").innerHTML="Perimeter of circle is : "+perimeter;
}
function rect( )
{
var a,area,perimeter,b;
a = parseInt(document.getElementById("f").value);
b=parseInt(document.getElementById("s").value);
area = a*b; 
perimeter = 2*(a*b); 
document.getElementById("num").innerHTML="Area of Rectangle is : "+area;
document.getElementById("num1").innerHTML="Perimeter of Rectangle is : "+perimeter;
}
