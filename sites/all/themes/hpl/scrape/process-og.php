<?php
function scrape($url){
$output = file_get_contents($url); 
return $output;
}

 function fetchdata($data, $start, $end){
        $data = stristr($data, $start); // Stripping all data from before $start
        $data = substr($data, strlen($start));  // Stripping $start
        $stop = stripos($data, $end);   // Getting the position of the $end of the data to scrape
        $data = substr($data, 0, $stop);    // Stripping all data from after and including the $end of the data to scrape
        return $data;   // Returning the scraped data from the function
    }
	
	//$url = 'https://www.flickr.com/cameras/nikon/d7000/';
    $url = $_POST['url'];
    

        $page = scrape($url);   
        $result = fetchdata($page, "<div id=\"thumb-wrapper\">", "<div class=\"paginator\">");
        
        $thumbnails = explode("<img id=\"",$result);

        foreach($thumbnails as $thumb) {            
            $images[] = fetchdata($thumb, "\" src=\"", "\"width");
        }

        echo json_encode(array('status' => 'Success', 'imageset' => $images));
    
?>

