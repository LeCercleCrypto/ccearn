<?PHP 

session_start();

// LOCAL

// $db_server = "localhost";
// $db_user = "root";
// $db_pass = "";
// $db_name = "airtech";

// ONLINE

$db_server = "ks65fl.myd.infomaniak.com";
$db_user = "ks65fl_quent";
$db_pass = "hzTwH-8PnQ0";
$db_name = "ks65fl_skydev";


$conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);

if ($conn) {
    echo 'Connexion validée';
}
?>