
//get search term
function searchRSS(){
var ele = document.getElementById("search");
  var str = ele.value;
    RSS(str);
}

function clicked(str){
    RSS(str);
}

//get RSS
function RSS(str) {
  if (str.length ===0) { 
    document.getElementById("rssOutput").innerHTML="";
    return;
  }
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
    
  //when ready out put
  xmlhttp.onreadystatechange=function() {
  document.getElementById("feeds").innerHTML=xmlhttp.responseText;
  };
  xmlhttp.open("GET","getrss.php?q="+str,true);
  xmlhttp.send();
}

function link(str){
   var t = window.Event.target;
t.location.href = str;
}
window.onload = function () {
        //sidebar();
        //feeds()
        RSS(" ");
    };

