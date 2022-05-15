function diceCheck()
{
    let random1=Math.ceil(Math.random*6);
    let random2=Math.ceil(Math.random*6);
    console.log(random1);
    console.log(random2);
    let image1=`../images/dice${random1}`;
    let image2=`../images/dice${random2}`;
    document.getElementById("img1").setAttribute("src",image1);
    document.getElementById("img2").setAttribute("src",image2);
    if(random1>random2)
    {
        document.getElementById("result1").innerHTML="Player 1 is Winner";
        document.getElementById("result2").innerHTML="Player 2 Needs More Efforts";
    }
    else if(random1 == random2)
    {
        document.getElementById("result1").innerHTML="DRAW";
        document.getElementById("result2").innerHTML="";
    }
    else
    {   
        document.getElementById("result1").style.color="crimson";
        document.getElementById("result2").style.color="rgb(20, 220, 147)";
        document.getElementById("result1").innerHTML="Player 1 Needs More Efforts";
        document.getElementById("result2").innerHTML="Player 2 is Winner";
    }
}