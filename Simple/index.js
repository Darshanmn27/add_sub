let count=1;
function increment()
{
    count++;
    document.getElementById("cur_data").innerHTML=count;
}
function decrerement()
{
    if(count>=1)
    {

        count--;
        document.getElementById("cur_data").innerHTML=count;
    }
}