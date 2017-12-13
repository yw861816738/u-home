<?php
session_start();
@$uid=$_SESSION["uid"];
if($uid){
	$sql="select uname from t_user where uid='$uid'";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_all($result,MYSQLI_ASSOC);
	return ["ok"=>1,"uname"=>$row[0]["uname"]];
}else	return ["ok"=>0];
?>
