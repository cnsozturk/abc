console.log(document.getElementById("puppy"))



var topPosition = 200;
var leftPosition = -50;
document.getElementById("puppy").style.position='absolute';

// // document.getElementById("puppy").style.top = "200px";
// // document.getElementById("puppy").style.left = "-200px"
// console.log( document.getElementById("abc"));
// // document.getElementById("puppy").style.left= 5+ "px"
var y=200;
var x=-50;
    function runPuppy() {
      

   
    //     puppy = document.getElementById("puppy");
    //     //;
        let width = screen.availWidth;

        console.log(width);
    //    // document.getElementById("puppy").innerHTML="X: " + x  + " Y : " + y
       
    //     // console.log (puppy);

    // //     // document.write(x);
    // //     // document.write();
    //    for(i=0;i<width;i++) 
    //    {
    //     var step=1;
    //     x= x +step;
    //     console.log(x);
    //     // console.log( document.getElementById("puppy").offsetLeft );
    //     document.getElementById("puppy").style.left= x + "px";//horizontal move

    //     document.getElementById("puppy").style.left= x + "px";//horizontal move
    //    }

        if(x < width)
            {
              
                var step=1;
                x= x +step;
                console.log(x);
                // console.log( document.getElementById("puppy").offsetLeft );
                document.getElementById("puppy").style.left= x + "px";//horizontal move
        

         }
        
   


           
           
        }    
        
      
        

    
// add if it reaches the screen end (you can check with screen.availwidth)					

