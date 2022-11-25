<?php
require('../Model/Database.php');
require('../Model/Employee.php');
require('../Model/EmployeeDatabase.php');


$action = filter_input(INPUT_POST, 'action');
if ($action == NULL) {
    $action = filter_input(INPUT_GET, 'action');
    if ($action == NULL) {
        $action = 'list_employees';
    }
}  


switch($action) {
    case 'list_employees':
        $employeeList = EmployeeDB::getEmployees();
        include('employee_list.php');
        break;
    
    case 'delete_employee':
        //get ID
        $deleteID = filter_input(INPUT_POST, 'employeeID');
        //delete employee
        EmployeeDB::deleteEmployee($deleteID);
        //re list employees
        $employeeList= EmployeeDB::getEmployees();
        include 'employee_list.php';
        break;
    
    case'add_employee':
        $employeeID = filter_input(INPUT_POST, 'empID');
        $firstName = filter_input(INPUT_POST, 'firstName');
        $lastName = filter_input(INPUT_POST, 'lastName');
        $jobDesc = filter_input(INPUT_POST, 'jobDesc');
        
        //regex patterns
        $stringPattern = "/^[A-Za-z -.']+$/";
        $idPattern = "/^[0-9]{1,6}$/";
        
        
        //validation
        $isFnameValid = false;
        if ($firstName != null && preg_match($stringPattern, $firstName) != 0) {
            if ($lastName != null && preg_match($stringPattern, $lastName) != 0) {
                    if ($jobDesc != null && preg_match($stringPattern, $jobDesc) != 0) {
                        if ($employeeID != null && preg_match($idPattern, $employeeID) != 0) {
                            //create new employee object and send it to the add employee function
                            $newEmployee = new Employee();
                            $newEmployee->set_fName($firstName);
                            $newEmployee->set_lName($lastName);
                            $newEmployee->set_jobDesc($jobDesc);
                            $newEmployee->set_empID($employeeID);
                            
                            EmployeeDB::addEmployee($newEmployee);
                            echo '<script>alert("Successfully added employee!")</script>';
                            //re list employees
                            $employeeList= EmployeeDB::getEmployees();
                            include 'employee_list.php';
                        } else {
                            echo '<script>alert("One or more fields invalid.")</script>';
                            include('addEmployee.php');
                        }            
                    } else {
                        echo '<script>alert("One or more fields invalid.")</script>';
                        include('addEmployee.php');
                    }     
            } else {
                echo '<script>alert("One or more fields invalid.")</script>';
                include('addEmployee.php');
            }           
        }else {
            echo '<script>alert("One or more fields invalid.")</script>';
            include('addEmployee.php');
        }       
        break;
}