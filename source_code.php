<?php
$contents = file_get_contents($_REQUEST["file"]);
highlight_string($contents);
?>