<?php

header("Content-disposition: attachment; filename=satisfactory-export.json");
header("Content-type: application/json");

if(isset($_POST) && isset($_POST["data"])) {
    echo $_POST["data"];
}
