var x=5;
var y=10;
class shape
{
    constructor(a,b)
    {
        this.a = x;
        this.b =y;
    }
}
class circle extends shape
{
    constructor(a)
    {
        var a,area,perimeter;
        super(a,b);
        Show()
        {
        area = a*a*Math.PI; 
perimeter = 2*Math.PI*a; 
document.getElementById("num").innerHTML="Area of circle is : "+area;
document.getElementById("num1").innerHTML="Perimeter of circle is : "+perimeter;
        }

}
}
let abc= new circle(a);

document.getElementById("num1").innerHTML=abc.show();