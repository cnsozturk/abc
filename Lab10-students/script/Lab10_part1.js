function changeColor(){
    var textclr = document.getElementsByName("colour");
    var abc=textclr[0].value;
    if (abc==="red")
    {  var td_text = document.getElementById("td_text");
        document.getElementById("td_text").style.color = 'red';
   

    }
    else if (abc==="blue")
    {  var td_text = document.getElementById("td_text");
        document.getElementById("td_text").style.color = 'blue';

    }
    else if (abc==='green')
    {  var td_text = document.getElementById("td_text");
        document.getElementById("td_text").style.color = 'green';


    }
  




}

var fontColorArray = ["gray","slategray","darkblue","teal","maroon","black"];
var bgColorArray = ["azure","linen","snow","powderblue","ivory","lightpink","lightyellow"];

var curFontColor=1;
var curBgColor=1;

function changeFontColor(){
  
    if (abc==="red")
    {  var td_text = document.getElementById("td_text");
        document.getElementById("td_text").style.color = 'red';
   

    }
    else if (abc==="blue")
    {  var td_text = document.getElementById("td_text");
        document.getElementById("td_text").style.color = 'blue';

    }
    else if (abc==='green')
    {  var td_text = document.getElementById("td_text");
        document.getElementById("td_text").style.color = 'green';


    }
}

function changeBgColor(){
}

function changeBg(){
    var def_text = document.getElementById("colorsel");
    var klm=def[0].value;
    var td_text = document.getElementById("td_text");
        document.getElementById("td_text").style.backgroundcolor = klm;
    }
