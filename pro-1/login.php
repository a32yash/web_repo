<?php
    $servername="localhost";
    $username="root";
    $dbpassword="";
    $dbname="users_login";

    $conn=mysqli_connect($servername,$username,$dbpassword,$dbname);
     
    if(!$conn){
        die("invalid");
    }
    
   
     $x=$_POST['email'];
     $y=$_POST['pass'];
    //  $z=password_hash($y,PASSWORD_DEFAULT);
       
      $temp="SELECT * FROM users WHERE email='$x'";
      $res=mysqli_query($conn,$temp);

      if(mysqli_num_rows($res)>0){
          while($row=mysqli_fetch_assoc($res)){
             if(password_verify($y,$row['password'])){
   
                  header("Location:./index.html");

             }
             else{
                echo "wrong password";
             }

          }

      }
      else{
        echo "user not found!";
      }

?>