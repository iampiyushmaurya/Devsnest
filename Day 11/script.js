var ans1=0,ans2=0,ans3=0,ans4=0,ans5=0;
var ele1,ele2,ele3,ele4,ele5;

function c(id){
    var x=document.getElementById(id);
    
    
    var z=parseInt(id);

    if(id>=1&&id<=4)
    {
        ans1=id;
        ele1=x;
        document.getElementById(z).style.color="blue";
        document.getElementById(z).style.borderColor="blue";
        for(var i=1;i<=4;i++)
        {
            if(i!=z)
            {   
                document.getElementById(i).style.color="black";
                document.getElementById(i).style.borderColor="white";
            }
        }
        
    }
    else if(id>=5&&id<=8)
    {
        ans2=id;
        ele2=x;
        document.getElementById(z).style.color="blue";
        document.getElementById(z).style.borderColor="blue";
        for(var i=4;i<=8;i++)
        {
            if(i!=z)
            {   
                document.getElementById(i).style.color="black";
                document.getElementById(i).style.borderColor="white";
            }
        }
    }
    else if(id>=9&&id<=12)
    {
        ans3=id;
        ele3=x;
        document.getElementById(z).style.color="blue";
        document.getElementById(z).style.borderColor="blue";
        for(var i=9;i<=12;i++)
        {
           
            if(i!=z)
            {   
                document.getElementById(i).style.color="black";
                document.getElementById(i).style.borderColor="white";
            }
        }
        
    }
    else if(id>=13&&id<=16)
    {
        ans4=id;
        ele4=x;
        document.getElementById(z).style.color="blue";
        document.getElementById(z).style.borderColor="blue";
        for(var i=13;i<=16;i++)
        {
            if(i!=z)
            {   
                document.getElementById(i).style.color="black";
                document.getElementById(i).style.borderColor="white";
            }
           
        }
      
    } 
    else if(id>=17&&id<=20)
    {
        ans5=id;
        ele5=x;
        document.getElementById(z).style.color="blue";
        document.getElementById(z).style.borderColor="blue";
        for(var i=17;i<=20;i++)
        {
            if(i!=z)
            {   
                document.getElementById(i).style.color="Black";
                document.getElementById(i).style.borderColor="white";
            }
        }
        
    }
}   

function submit(){
    var count=0;
    if(ans1==1)
    {
        ele1.style.color="green";
        ele1.style.borderColor="green";
        count++;
    }
    else 
    {
        ele1.style.color="red";
        ele1.style.borderColor="red";
    }
    if(ans2==6)
    {
        ele2.style.color="green";
        ele2.style.borderColor="green";
        count++;
    }
    else {
        ele2.style.color="red";
        ele2.style.borderColor="red";
    }
    if(ans3==9)
    {
        ele3.style.color="green";
        ele3.style.borderColor="green";
        count++;
    }
    else {
        ele3.style.color="red";
        ele3.style.borderColor="red";
    }
    if(ans4== 14)
    {
        ele4.style.color="green";
        ele4.style.borderColor="green";
        count++;
    }
    else{
        ele4.style.color="red";
        ele4.style.borderColor="red";
    }
    if(ans5==18)
    {
        ele5.style.color="green";
        ele5.style.borderColor="green";
        count++;
    }
    else{
        ele5.style.color="red";
        ele5.style.borderColor="red";
    }
    

    document.getElementById(1).style.color="green";
    document.getElementById(1).style.borderColor="green";
    document.getElementById(6).style.color="green";
    document.getElementById(6).style.borderColor="green";
    document.getElementById(9).style.color="green";
    document.getElementById(9).style.borderColor="green";
    document.getElementById(14).style.color="green";
    document.getElementById(14).style.borderColor="green";
    document.getElementById(18).style.color="green";
    document.getElementById(18).style.borderColor="green";
        
    document.getElementById("score").innerHTML=count;
    console.log(count);
}

    