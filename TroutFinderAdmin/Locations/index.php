<?php
require ('../Model/Database.php');
require ('../Model/Location.php');
require ('../Model/LocationDatabase.php');

$action = filter_input(INPUT_POST, 'action');

if ($action == NULL) {
    $action = filter_input(INPUT_GET, 'action');
    if ($action == NULL) {
        $action = 'list_locations';
    }
}  

switch($action) {
    case 'list_locations':
        $locationList = LocationDB::getLocations();
    include 'location_list.php';
}
