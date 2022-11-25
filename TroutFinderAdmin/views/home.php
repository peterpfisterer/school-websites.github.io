
<html>
    <head>
        <meta charset="UTF-8">
        <title>Troutfinder Admin</title>
        <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    </head>
    <body>
        <!<!-- Header -->
        <?php include 'views/header.php'?>
        
        <!-- List Locations -->
        <div class='container'>
            <div class='row justify-content-center'>
                <div class='col-sm-12 col-md-10 col-lg-8 h-100 p-3'>
                    <header class='display-3'>Locations:</header>
                    <table class='table'>
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Latitude</th>
                                <th scope='col'>Longitude</th>
                                <th scope='col'>Rating</th>
                                <th scope='col'></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <?php foreach($locations as $location) : ?>                            
                            <tr>
                                <td scope = 'row'><?php echo $location->get_id(); ?></td>
                                <td><?php echo $location->get_name(); ?></td>
                                <td><?php echo $location->get_lat(); ?></td>
                                <td><?php echo $location->get_long(); ?></td>
                                <td><?php echo $location->get_rating(); ?></td>
                                <td>
                                    <form action='.' method='post'>
                                        <input type='hidden' name='action' value='delete'>
                                        <input type='hidden' name='deleteID' value='<?php echo $location->get_id() ?>'>
                                        <button class='btn btn-sm btn-danger' type='submit' id='delete' value='delete'>Delete</button>
                                    </form>
                                </td>
                            </tr>
                        
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <!<!-- List Employees -->
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
                            <?php foreach($employees as $employee) : ?>                            
                            <tr>
                                <td><?php echo $employee->get_empID(); ?></td>
                                <td><?php echo $employee->get_lName(); ?></td>
                                <td><?php echo $employee->get_fName(); ?></td>
                                <td><?php echo $employee->get_jobDesc(); ?></td>               
                            </tr>
                           
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        /*<!-- Footer -->
        <?php include 'views/footer.php'?>
    </body>
</html>
