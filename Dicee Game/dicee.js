var numberGenerated1=Math.floor(Math.random()*6)+1;
var imageName1="images/dice"+numberGenerated1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imageName1);

var numberGenerated2=Math.floor(Math.random()*6)+1;
var imageName2="images/dice"+numberGenerated2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imageName2);

if(numberGenerated1>numberGenerated2)
{
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(numberGenerated1==numberGenerated2)
{
  document.querySelector("h1").innerHTML="Draw!";
}
else
{
  document.querySelector("h1").innerHTML="🚩 Player 2 Wins!";
}
