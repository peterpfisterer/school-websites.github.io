<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Add Employee</title>
        <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    </head>
    <body>
        <header class='bg-dark w-100 text-center text-light p-3'>
            <h1>Add Employee</h1>
        </header>
        <div class='container'>
            <div class='row justify-content-center'>
                <div class='col-sm-12 col-md-8 col-lg-6'>
                    <form action='.' method='post' id='add_employee_form' class='mt-4'>
                       <input type="hidden" name="action" value="add_employee">
                       <label for='firstName'>First Name:</label><br>
                       <input type='text' name='firstName' id='firstName'><br>
                       <label for='lastName' class='mt-3'>Last Name:</label><br>
                       <input type='text' name='lastName' id='lastName'><br>
                       <label for='jobDesc' class='mt-3'>Job Description:</label><br>
                       <input type='text' name='jobDesc' id='jobDesc'><br>
                       <label for='empID' class='mt-3'>6 Integer Employee ID:</label><br>
                       <input type='text' name='empID' id='empID'><br>
                       <input type="submit" class='btn btn-success btn-sm mt-3' value="Add">
                       <a href='index.php' type='button' class='mt-3 mx-2 btn btn-danger btn-sm'>Cancel</a>
                    </form>
                </div>
        </div>

        <footer class='bg-dark w-100 text-center text-light p-3 fixed-bottom'>
            <p class='lead'>User: <?php echo $username ?></p>
        </footer>
    </body>
</html>

