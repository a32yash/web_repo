<?php
    $servername="localhost";
    $username="root";
    $dbpassword="";
    $dbname="users_login";

    $conn=mysqli_connect($servername,$username,$dbpassword,$dbname);
     
    if(!$conn){
        die("invalid");
    }
    
     $a=$_POST['name'];
     $b=$_POST['email'];
     $c=$_POST['pass'];
     $d=password_hash($c,PASSWORD_DEFAULT);
     $temp="SELECT * FROM users WHERE email='$b'";

     $res=mysqli_query($conn,$temp);

      if(mysqli_num_rows($res)>0){
        echo "user exists";
      }
      else{
        $temp2="INSERT INTO users(sno, name, email, password) VALUES (NULL,'$a','$b','$d')";

        if(mysqli_query($conn,$temp2)){
            // echo "success";  
            header("Location:login.html");
        }
          else
            {
    
                echo "failed";
            }   
        
      }


     
   mysqli_close($conn);
?>
