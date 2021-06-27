function c(idnumber){
    
    console.log(idnumber);
   
    if(idnumber == 1 || idnumber == 6 || idnumber == 9 || idnumber == 14 || idnumber == 18)
    document.getElementById('idnumber').style.background = "Green";
    else
    console.log("false",idnumber)
}