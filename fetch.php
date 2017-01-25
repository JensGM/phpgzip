<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$filename = $_GET["filename"];

header("Content-Type: text/JSON; charset=UTF-8");
header("Content-Encoding: gzip");
header("Content-Length: ".filesize($filename));
header("File-Name: ".$filename);
readfile($filename);

die;
?>