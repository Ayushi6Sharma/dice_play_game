function diceCheck()
{
    let random1=Math.ceil(Math.random*6);
    let random2=Math.ceil(Math.random*6);
    let image1=;
    let image2=;
}
if(random1>random2)
{
    document.getElementById("result1").innerText="Player 1 is Winner";
    document.getElementById("result2").innerText="Player 2 Needs More Efforts";
}
else if(random1 == random2)
{
    document.getElementById("result1").innerText="DRAW";
    document.getElementById("result2").innerText="";
}
else
{
    document.getElementById("result1").innerText="Player 1 Needs More Efforts";
    document.getElementById("result1").innerText="Player 2 is Winner";
}