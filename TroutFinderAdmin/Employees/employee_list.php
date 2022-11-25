
<html>
    <head>
        <meta charset="UTF-8">
        <title>Troutfinder Admin</title>
        <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    </head>
    <body>
    <!-- Header -->
    <?php include '../views/header.php'?>
            <div class='container'>
                <div class='row justify-content-center'>
                    <div class='col-sm-12 col-md-10 col-lg-8 h-100 p-3'>
                        <header class='display-3'>Employees:</header>
                        <table class='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>ID</th>
                                    <th scope='col'>Last Name</th>
                                    <th scope='col'>First Name</th>
                                    <th scope='col'>Job Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php foreach($employeeList as $employee) : ?>                            
                                <tr>
                                    <td><?php echo $employee->get_empID(); ?></td>
                                    <td><?php echo $employee->get_lName(); ?></td>
                                    <td><?php echo $employee->get_fName(); ?></td>
                                    <td><?php echo $employee->get_jobDesc(); ?></td>
                                    
                                    <td>
                                        <form action="." method="post"
                                        id="delete_employee_form">
                                        <input type="hidden" name="action"
                                               value="delete_employee">
                                        <input type="hidden" name="employeeID"
                                               value="<?php echo $employee->get_empID(); ?>">             
                                        <input type="submit" class='btn btn-danger btn-sm' value="Delete"></form>
                                    </td>
                                </tr>

                                <?php endforeach; ?>
                            </tbody>
                        </table>
                        <a href='addEmployee.php' class='btn btn-dark'>Add Employee</a>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <?php include '../views/footer.php'?>
    </body>
</html>
