str=''+num;
b="";
for(i=str.length-1;i>=0;i--)
{
    x=str[i];
    b=b+x+"";
    
}
if(b===str)
    {
        console.log("Yes");
    }
    else{
        console.log("No");
    }