<?php

class Employee {
    // set values
    function set_empID($empID) {
        $this->empID = $empID;
    }
    function set_fName($fName) {
        $this->fName = $fName;
    }
    function set_lName($lName) {
        $this->lName = $lName;
    }
    function set_jobDesc($jobDesc) {
        $this->jobDesc = $jobDesc;
    }
    
    // return values
    function get_empID() {
        return $this->empID;
    }
    function get_fName() {
        return $this->fName;
    }
    function get_lName() {
        return $this->lName;
    }
    function get_jobDesc() {
        return $this->jobDesc;
    }
}
