 var pics = [ ];
    pics[1] = "img1.jpg";
    pics[2] = "img3.jpg";
    pics[3] = "img2.jpg";
    pics[4] = "img1.jpg";
    pics[5] = "img3.jpg";
    pics[6] = "img2.jpg";
    pics[7] = "img2.jpg";
    pics[8] = "img1.jpg";
    pics[9] = "img4.jpg";
    pics[10] = "img1.jpg";
    pics[11] = "img2.jpg";
    pics[12] = "img4.jpg";

var count = 0,first,second,previousImage;
function c(classname){

    if(count == 1)
    {
        previousImage = element[0].src;
        first = element[0];
    }

    if(count == 2 )
    {
        count = 0;
        previousImage = undefined;
    }

    

    element = document.getElementsByClassName(classname);
    
    
    
    element[0].src = pics[classname];
    count++;

    var currentImage = element[0].src;
    second = element[0];

    if(count==2)
    {
        if(previousImage!=currentImage)
        {
            setTimeout(()=>first.src="default.jpg",250);
            setTimeout(()=>second.src="default.jpg",250);
            first.style.pointerEvents = 'auto';
            second.style.pointerEvents = 'auto';
        }
    }
}
