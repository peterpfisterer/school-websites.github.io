<?php

// create location class
class Location {
    //set values
    function set_id($locID) {
        $this->locID = $locID;
    }
    function set_name($name) {
        $this->name = $name;
    }
    function set_lat($lat) {
        $this->lat = $lat;
    }
    function set_long($long) {
        $this->long = $long;
    }
    function set_rating($rating) {
        $this->rating = $rating;
    }
    
    // return values
    function get_id() {
        return $this->locID;
    }
    function get_name() {
        return $this->name;
    }
    function get_lat() {
        return $this->lat;
    }
    function get_long() {
        return $this->long;
    }
    function get_rating() {
        return $this->rating;
    }  
}
