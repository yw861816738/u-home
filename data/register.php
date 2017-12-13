<?php
require('init.php');
@$uname=$_REQUEST["uname"];
@$upwd=$_REQUEST["upwd"];
@$phone=$_REQUEST["phone"];
if($uname&&$upwd){
	$sql="insert into t_user(uid,uname,upwd,phone) values(null,'$uname',md5('$upwd'),'$phone')";
	$result=mysqli_query($conn,$sql);
	return $result;
}
?>