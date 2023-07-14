function add()
{
var result =
Number(document.getElementById("firstno").value)+
Number(document.getElementById("secondno").value);
document.getElementById("ans").innerHTML=(result)
}

function subtract()
{
var result =
Number(document.getElementById("firstno").value)-
Number(document.getElementById("secondno").value);
document.getElementById("ans").innerHTML=(result)
}

function multi()
{
var result =
Number(document.getElementById("firstno").value)*
Number(document.getElementById("secondno").value);
document.getElementById("ans").innerHTML=(result)
}

function divi()
{
var result =
Number(document.getElementById("firstno").value)/
Number(document.getElementById("secondno").value);
document.getElementById("ans").innerHTML=(result)
}
