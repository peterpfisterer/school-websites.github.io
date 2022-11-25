<?php
class EmployeeDB {
    
    public function getEmployees() {
        $db = Database::getDB();
        $query = 'SELECT * FROM employees';
        $statement = $db->prepare($query);
        $statement->execute();       
        $rows = $statement->fetchAll();
        $statement->closeCursor();
        
        $employees = [];
        foreach($rows as $row) {
            $employee = new Employee();
            $employee->set_empID($row['EmployeeID']);
            $employee->set_fName($row['FirstName']);
            $employee->set_lName($row['LastName']);
            $employee->set_jobDesc($row['JobDescription']);
            
            $employees[] = $employee;
        }       
        return $employees;
    }
    
    
    public function deleteEmployee($employeeID) {
        $db = Database::getDB();
        $query = 'DELETE FROM employees WHERE EmployeeID = :employeeID';
        $statement = $db->prepare($query);
        $statement->bindValue(':employeeID', $employeeID);
        $statement->execute();       
        $statement->closeCursor();
    }
    
    
    public function addEmployee($employee) {
        $db = Database::getDB();
        $employeeID = $employee->get_empID();
        $firstName = $employee->get_fName();
        $lastName = $employee->get_lName();
        $jobDescription = $employee->get_jobDesc();

        $query = 'INSERT INTO employees
                     (EmployeeID, FirstName, LastName, JobDescription)
                  VALUES
                     (:employeeID, :firstName, :lastName, :jobDescription)';
        $statement = $db->prepare($query);
        $statement->bindValue(':employeeID', $employeeID);
        $statement->bindValue(':firstName', $firstName);
        $statement->bindValue(':lastName', $lastName);
        $statement->bindValue(':jobDescription', $jobDescription);
        $statement->execute();
        $statement->closeCursor();
    }
    
}