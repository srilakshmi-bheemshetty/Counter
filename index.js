let counterElement = document.getElementById("counterValue")
let count  = 0;
function onDecrement()
{
    count = count-1;
    counterElement.innerText = count;
    if(count<0)
    {    
        counterElement.style.color = "Red";
    }
    else if(count>0)
    {
        counterElement.style.color = "Green";
    }
    else{
        counterElement.style.color = "Black";
    }
    
}
function onIncrement()
{
    count = count+1;
    counterElement.innerText = count;
    if(count<0)
    {    
        counterElement.style.color = "Red";
    }
    else if(count>0)
    {
        counterElement.style.color = "Green";
    }
    else{
        counterElement.style.color = "Black";
    }
    
}
function onReset()
{
    count = 0
    counterElement.innerText = count;
    counterElement.style.color = "Black";
}