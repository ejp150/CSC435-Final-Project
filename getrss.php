<?php
//get the search term  from URL
$q= $_GET["q"];
//search google news
$xml=("http://news.google.com/news?cf=all&hl=en&pz=1&ned=us&q=$q&output=rss&num=28");

//create new xmldoc
$xmlDoc = new DOMDocument();
$xmlDoc->load($xml);

//get 8 <item> elements
$x=$xmlDoc->getElementsByTagName('item');
for ($i=0; $i<28; $i++) {
    $item_link=$x->item($i)->getElementsByTagName('link')
  ->item(0)->childNodes->item(0)->nodeValue;
  $item_desc=$x->item($i)->getElementsByTagName('description')
  ->item(0)->childNodes->item(0)->nodeValue;
  
//cut off unnecessary text
$des = explode("...", $item_desc); 
$dess = split("/font&gt;&lt;br&gt;&lt;font class=&quot;p&quot; size=&quot;-1&quot;&gt;&lt;a", $des[0]); 

//output <item> elements   
echo ("<div class='feed'  onclick=location.href='$item_link' style='cursor:pointer;'<p>" . $dess[0] . "...</table></description></p></div>");
}
?>
