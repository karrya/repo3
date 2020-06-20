$(function () {

    //启动弹窗
    $('[data-toggle="popover"]').popover();

    //清空表单样式及内容
    function reset_form(ele){
        $(ele)[0].reset();
        //清空表单样式
        $(ele).find("*").removeClass("likai_success likai_fail");
        $(ele).find("span").text("");
    }

    //发起QQ启动登录或者启动登录窗口
    $("#login").click(function () {
        //清除表单数据（表单完整重置（表单的数据，表单的样式））
        reset_form("#login_form");
        //window.location.href = "/qqLogin";
        $("#user_model_login").modal({
            backdrop: "static"
        })
    });

    //打开注册模态框
    $("#btn_register").click(function(){

        //清空表单格式及数据
        reset_form("#register_form");

        //1、关闭登录模态框
        $("#user_model_login").modal('hide');
        //2、打开注册模态框
        $("#user_model_register").modal({
            backdrop: "static"
        })
    });

    //登录返回
    $("#btn_return_login").click(function () {
        //1、关闭当前注册模态框
        $("#user_model_register").modal('hide');
        //2、打开登录模态框
        $("#user_model_login").modal({
            backdrop:"static"
        })
    });

    //退出登录
    $("#btn_exit").click(function () {

        //1、关闭显示用户信息模态框
        $("#UserDropdown").attr("hidden","hidden");
        //2、显示登录按钮
        $("#login").removeAttr("hidden");
    });

    //忘记密码
    $("#forget_key").click(function () {
        //清除表单数据（表单完整重置（表单的数据，表单的样式））
        reset_form("#find_key_form1");
        //1、关闭登录模态框
        $("#user_model_login").modal('hide');
        //2、打开找回密码模态框
        $("#user_model_find_key1").modal({
            backdrop:"static"
        })
    });

    //忘记密码返回登录
    $("#btn_find_login").click(function () {
        //1、关闭找回密码模态框
        $("#user_model_find_key1").modal('hide');
        //2、打开登录模态框
        $("#user_model_login").modal({
            backdrop:"static"
        })
    })

    //忘记密码返回登录2
    $("#btn_find_login2").click(function () {
        //1、关闭找回密码模态框
        $("#user_model_find_key2").modal('hide');
        //2、打开登录模态框
        $("#user_model_login").modal({
            backdrop:"static"
        })
    })
});