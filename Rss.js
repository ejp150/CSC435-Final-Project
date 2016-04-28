
    window.onload = function () {
        sidebar();
        //feeds();
    };
    
    function sidebar(){
        var sidebar = document.getElementById("nav");
        for(var i = 0; i<7 ; i++){
            var newEle = document.createElement("BUTTON");
            newEle.className = "navbtn";
            var t = document.createTextNode("Category");  
            newEle.appendChild(t);
            sidebar.appendChild(newEle);
        }
    }
    
    function feeds(){
        var feeds = document.getElementById("feeds");
        for(var i = 0; i<20 ; i++){
            var newEle = document.createElement("div");
            newEle.className = "feed";
            var t = document.createTextNode("content");  
            newEle.appendChild(t);
            feeds.appendChild(newEle);
        } 
    }
    
function showRSS() {
  var ele = document.getElementById("search");
  var str = ele.value;
  if (str.length==0) { 
    document.getElementById("rssOutput").innerHTML="";
    return;
  }
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      document.getElementById("rssOutput").innerHTML=xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET","getrss.php?q="+str,true);
  xmlhttp.send();
}
