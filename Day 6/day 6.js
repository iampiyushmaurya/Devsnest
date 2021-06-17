function day6(){

    //Write a JavaScript function to check whether an `input` is an array or not

    console.log(Array.isArray('w3resource'));
    console.log(Array.isArray([1, 2, 4, 0]));

    //Write a JavaScript function to clone an array

    X=[1, 2, 4, 0];
    Y=[1, 2, [4, 0]];
    
    var dupx = X.slice();
    var dupy = Y.slice();

    console.log(dupx);
    console.log(dupy); 

    //Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.


     function first(array, n) {
    if (array == null) 
        return;
    if (n == null) 
        return array[0];
    if (n < 0)
        return [];
    if (n > 0)
        return array.slice(0,n);
    }
    console.log(first([7, 9, 0, -2]));
    console.log(first([],3));
    console.log(first([7, 9, 0, -2],3));
    console.log(first([7, 9, 0, -2],6));
    console.log(first([7, 9, 0, -2],-3));

 

//Write a simple JavaScript program to join all elements of the following array into a string.


 myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));
 

//Write a JavaScript program to find the most frequent item of an array


var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var max = 1,count = 0, value;
for (var i = 0; i < arr.length; i++)
{  
        for (var j = i; j < arr.length; j++)
        {
                if (arr[i] == arr[j])
                 count++;
                if (count>max)
                {
                  max = count; 
                  value = arr[i];
                }
        }
        count = 0;
}
console.log(value); 
}

day6();