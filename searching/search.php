<?php
$keywordMap = [
    "product" => "/project-view.html",
    "contact" => "/contact.html",
    "about" => "/about-us.html",
    "news" => "/news.html"
];

$query = strtolower($_POST['query']);
$path = "/default.php?query=$query"; // Default redirection if no keywords match

foreach ($keywordMap as $keyword => $url) {
    if (strpos($query, $keyword) !== false) {
        $path = $url;
        break;
    }
}

echo $path;
exit();
