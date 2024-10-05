<?PHP 

include 'db_connect.php';

if (isset($_GET['checkUserToken'])){
    $name = 'admin';
    $req = mysqli_query($conn, "SELECT * FROM users_table_tokens WHERE user_name = '$name'");

    if ($req){
        if (mysqli_num_rows($req) > 0){
            if ($row = mysqli_fetch_assoc($req)){
                echo $row['user_name'];
                echo $row['counter_coins'];
            }
        }
    }
}
?>