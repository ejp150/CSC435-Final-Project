(function () {
    "use strict";
    
    window.onload = function () {
        sidebar();
        feeds();
    }; 
    
    function sidebar(){
        var sidebar = document.getElementById("nav");
        for(var i = 0; i<7 ; i++){
            var newEle = document.createElement("BUTTON");
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
})();