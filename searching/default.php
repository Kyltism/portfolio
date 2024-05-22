<?php
$linkMap = [
    "cost" => '<a class="some-class" href="https://sitename/prices.html">Prices</a><br>',
    "price" => [
        '<a class="some-class" href="https://sitename/prices.html">Prices 1</a><br>',
        '<a class="some-class" href="https://sitename/prices.html">Prices 2</a><br>',
        '<a class="some-class" href="https://sitename/prices.html">Prices 3</a><br>',
        '<a class="some-class" href="https://sitename/prices.html">Prices 4</a><br>',
    ],
    "about" => '<a class="some-class" href="https://sitename/prices.html">Prices 5</a><br>',
    "news" => '<a class="some-class" href="https://sitename/prices.html">Prices 6</a><br>'
];


$liks = [];
$query = strtolower($_GET['query']);

foreach ($linkMap as $keyword => $link) {
    if (strpos($query, $keyword) !== false) {
        $links[] = $link;
    }
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<?php
if (!empty($links)) {
    foreach ($links as $link) {
        if (is_array($link)) {
            foreach ($link as $set) {
                echo $set;
            }
            break;
        }
        echo $link;
    }
} else {

    foreach ($linkMap as $link => $set) {

        if (is_array($set)) {
            foreach ($set as $val) {
                echo $val;
            }
        } else {
            echo $set;
        }
    }
}
?>

</body>
</html>
