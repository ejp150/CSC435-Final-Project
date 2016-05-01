<?php

//get the search term  from URL
$q= $_GET["q"];

//search google news
$xml=("http://news.google.com/news?cf=all&hl=en&pz=1&ned=us&q=$q&output=rss");

//create new xmldoc
$xmlDoc = new DOMDocument();
$xmlDoc->load($xml);

//get elements from "<channel>"
$channel=$xmlDoc->getElementsByTagName('channel')->item(0);
$channel_title = $channel->getElementsByTagName('title')
->item(0)->childNodes->item(0)->nodeValue;
$channel_link = $channel->getElementsByTagName('link')
->item(0)->childNodes->item(0)->nodeValue;

//output elements from "<channel>"
/*
echo("<p><a href='" . $channel_link
  . "'>" . $channel_title . "</a>");
echo("<br>");
echo($channel_desc . "</p>");
*/

//get 8 <item> elements
$x=$xmlDoc->getElementsByTagName('item');
for ($i=0; $i<=7; $i++) {
    $item_link=$x->item($i)->getElementsByTagName('link')
  ->item(0)->childNodes->item(0)->nodeValue;
  $item_desc=$x->item($i)->getElementsByTagName('description')
  ->item(0)->childNodes->item(0)->nodeValue;
$des = explode("...", $item_desc); 
    
//output <item> elements   
echo ("<div class='feed'  onclick=location.href='$item_link' style='cursor:pointer;'<p>" . $des[0] . "...</table></description></p></div>");
}

?>
