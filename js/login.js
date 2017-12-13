/**
 * Created by web-01 on 2017/12/12.
 */
//打开  登录
$("[data-log=login]").click(function () {
    $("div.overlay_bg").show();
    $("#dialog").show();
    //每次点击都重新加载验证码
    $("#setYzm").attr("src","03_code_gg.php")
});
// 关闭 登录
$(".close_login").click(function () {
    $("div.overlay_bg").hide();
    $("#dialog").hide();
});
$(".overlay_bg").click(function () {
    $("div.overlay_bg").hide();
    $("#dialog").hide();
})
//刷新验证码
$("#setYzm").click(function () {
    this.src="03_code_gg.php";
})
//登录验证
(()=>{
    var $txtName = $("#txtName");
    $(".btn-login").on("click",function (e) {
        e.preventDefault();
        $("")
    })
})();
