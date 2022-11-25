<?php

class LocationDB {

    //get locations function
    public function getLocations() {
        $db = Database::getDB();
        $query = 'SELECT * FROM locations';
        $statement = $db->prepare($query);
        $statement->execute();       
        $rows = $statement->fetchAll();
        $statement->closeCursor();
        
        $locations = [];
        foreach($rows as $row) {
            $location = new Location();
            $location->set_id($row['locationID']);
            $location->set_name($row['name']);
            $location->set_lat($row['latitude']);
            $location->set_long($row['longitude']);
            $location->set_rating($row['StarRating']);
            
            $locations[] = $location;
        }       
        return $locations;
    }
}