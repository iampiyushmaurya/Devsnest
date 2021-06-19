var cell = [ ];
for (let i=0;i<=399;i++)
{
  cell[i]=0;
}

function changec(classnumber){
  element=document.getElementsByClassName(classnumber);
  n=element;
  if(cell[n] == 0)
  {
    cell[n]=1;
  element[0].style.backgroundColor = "white";
  }
  else
  {
    cell[n]=0;
    element[0].style.backgroundColor ="#e43926";
  }
}