# CSC435-Final-Project
RSS Aggregator

  The objective of this project was to create a website that aggregated RSS feeds onto one site and allowed the user to search for
different news topics. The site then presents the user with many news articles related to that topic.

  To use the website, it is relatively simple. When the page initially loads, there are the top stories from across the web displayed to see. 
To see common topics, on the sidebar there are buttons that link to those topics. There is also a search bar that can be used to search all 
of these sources for that one topic or keyword. Then, when you see a story you want to read, just click the box with the story, and it takes 
you to the site, and there you can read the article.

	We used several different languages and tools to create the interactive website. HTML, CSS, AJAX, PHP. AJAX was used to get the 
XML RSS document from the Google news server, with the proper search term. The document was loaded into the getRss.php file and parsed
for desired the items. The items were given proper html tags and elements (like making them clickable) then outputted to the RSS section 
of the website. 
