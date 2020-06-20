$(function () {
    /***************************************************(登录模块)***************************************************/
    //显示校验结果的提示信息
    function show_validate_msg(ele, status, msg) {
        //清除当前元素的校验状态
        $(ele).removeClass("likai_success likai_fail");
        $(ele).text("");
        if ("success" == status) {
            $(ele).attr("class", "likai_success");
            $(ele).text(msg);
        } else if ("error" == status) {
            $(ele).attr("class", "likai_fail");
            $(ele).text(msg);
        }
    }

    //账号变动验证
    $("#userPhone").change(function () {

        $(this).removeClass("likai_success likai_fail");
        $(this).text("");
        var empPhone = this.value;

        if (empPhone == "" || empPhone == null) {
            show_validate_msg("#login_phone", "error", "手机号不能为空！！！");
            $("#btn_login").attr("ajax-va", "error");
        } else {
            var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;

            if (!reg.test(empPhone)) {
                show_validate_msg("#login_phone", "error", "手机号格式不正确！！！");
                $("#btn_login").attr("ajax-va", "error");
            } else {
                show_validate_msg("#login_phone", "success", "");
                $("#btn_login").attr("ajax-va", "success");
            }
        }
    });


    //点击登录按钮
    $("#btn_login").click(function () {

        if ($(this).attr("ajax-va") == "error") {
            return false;
        } else {
            var userPhone = $("#userPhone").val(); //获得账号
            if (userPhone == null || userPhone == "") {
                show_validate_msg("#login_phone", "error", "手机号不能为空！！！");
                return false
            }
        }

        var userPassword = $("#userPassword").val(); //密码

        if (userPassword == null || userPassword == "") {
            show_validate_msg("#login_psw", "error", "密码不能为空！！！");
            return false
        }

        $.ajax({
            type: "POST",
            url: "/Login",
            data: "userPhone=" + userPhone + "&userPassword=" + userPassword,
            success: function (result) {

                if (result.code == 100) {
                    var user_name = result.extend.session_userName;
                    if (user_name == "" || user_name == null || user_name == undefined) {
                        //不存在的登录，打开登录窗口
                        $("#user_model_login").modal({
                            backdrop: "static"
                        })
                    } else {
                        //出来登录/显示框
                        $("#login").attr("hidden", "hidden");

                        $("#UserDropdown").removeAttr("hidden");

                        //设置显示用户姓名
                        $("#name_span").text(user_name);

                        //关闭登录模态框
                        $("#user_model_login").modal('hide');
                    }
                } else {
                    show_validate_msg("#login_psw", "error", "账号或密码错误！！！");
                }
            }
        })
    });

    /***************************************************(注册模块)***************************************************/

    //姓名变动为空
    $("#register_name").change(function () {
        $(this).removeClass("likai_success likai_fail");
        $(this).text("");
        var register_name = this.value;

        if (register_name == "" || register_name == null) {
            show_validate_msg("#span_register_name", "error", "姓名不能为空！");
        } else {
            show_validate_msg("#span_register_name", "success", "");
        }
    })
    //密码1变动为空
    $("#register_pw1").change(function () {
        $(this).removeClass("likai_success likai_fail");
        $(this).text("");
        var register_pw1 = this.value;

        if (register_pw1 == "" || register_pw1 == null) {
            show_validate_msg("#span_register_pw1", "error", "密码不能为空！");
        } else {
            show_validate_msg("#span_register_pw1", "success", "");
        }
    })
    //密码2变动为空
    $("#register_pw2").change(function () {
        $(this).removeClass("likai_success likai_fail");
        $(this).text("");


        var register_pw2 = this.value;
        var register_pw1 =  $("#register_pw1").val();
        if (register_pw2 == "" || register_pw1 == null) {
            show_validate_msg("#span_register_pw2", "error", "密码不能为空！");
            $("#register_btn").attr("ajax-pass","null");
        } else if(register_pw1 != register_pw2){
            show_validate_msg("#span_register_pw2", "error", "两次密码不一致");
            $("#register_btn").attr("ajax-pass","error");
        }else {
            show_validate_msg("#span_register_pw2", "success", "");
            $("#register_btn").attr("ajax-pass","success");
        }
    })
    //密保变动为空
    $("#register_lock").change(function () {
        $(this).removeClass("likai_success likai_fail");
        $(this).text("");
        var register_lock = this.value;
        if (register_lock == "" || register_lock == null) {
            show_validate_msg("#span_register_lock", "error", "密码不能为空！");
        } else {
            show_validate_msg("#span_register_lock", "success", "");
        }
    })
    //密保答案变动为空
    $("#register_key").change(function () {
        $(this).removeClass("likai_success likai_fail");
        $(this).text("");
        var register_key = this.value;
        if (register_key == "" || register_key == null) {
            show_validate_msg("#span_register_key", "error", "密码不能为空！");
        } else {
            show_validate_msg("#span_register_key", "success", "");
        }
    })

    //账号变动验证
    $("#register_phone").change(function () {

         $(this).removeClass("likai_success likai_fail");
         $(this).text("");
         var empPhone = this.value;

         if (empPhone == "" || empPhone ==null ){
             show_validate_msg("#span_register_phone", "error", "手机号不能为空");
             $("#register_btn").attr("ajax-va","error");
         }else{

             $.ajax({
                 url:"/OnlyPhone",
                 data:"userPhone="+empPhone,
                 type:"POST",
                 success:function(result){

                     if(result.code==100){
                         show_validate_msg("#span_register_phone", "success", "可注册");
                         $("#register_btn").attr("ajax-va","success");
                     }else{
                         alert(result.extend.va_msg)
                         show_validate_msg("#span_register_phone", "error",result.extend.va_msg);
                         $("#register_btn").attr("ajax-va","error");
                     }
                 }
             });


         }
     });

    function validate_add_form(){

        var empPhone = $("#register_phone").val();

        var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;

        if (!reg.test(empPhone)){
            show_validate_msg("#span_register_phone", "error", "手机号格式不正确");
            return false;
        }

        return true;
    }

    $("#register_btn").click(function () {
        $("#register_form").find("*").removeClass("likai_success likai_fail");
        $("#register_form").find("span").text("");


        var userinfo = {};
        userinfo.userName = $("#register_name").val(); //姓名
        if (userinfo.userName == null || userinfo.userName == "") {
            show_validate_msg("#span_register_name", "error", "姓名不能为空！");
            return false
        }
        userinfo.userPhone = $("#register_phone").val(); //电话
        if (userinfo.userPhone == null || userinfo.userPhone == "") {
            show_validate_msg("#span_register_phone", "error", "号码不能为空！");
            return false
        }

        if(!validate_add_form()){
            return false;
        };

        if ($(this).attr("ajax-va") == "error") {
            show_validate_msg("#span_register_phone", "error", "手机号格式不正确");
            return false;
        }

        var userpsw1 = $("#register_pw1").val(); //密码1
        if (userpsw1 == null || userpsw1 == "") {
            show_validate_msg("#span_register_pw1", "error", "密码不能为空！");
            return false
        }
        var userpsw2 = $("#register_pw2").val();//密码2
        if (userpsw2 == null || userpsw2 == "") {
            show_validate_msg("#span_register_pw2", "error", "密码不能为空！");
            return false
        }
        if ($(this).attr("ajax-pass") == "error") {
            show_validate_msg("#span_register_pw2", "error", "两次密码不一致");
            return false;
        }

        userinfo.userPassWord = $("#register_pw1").val();

        userinfo.userLock = $("#register_lock").val();//密保
        if (userinfo.userLock == null || userinfo.userLock == "") {
            show_validate_msg("#span_register_lock", "error", "密保不能为空！");
            return false
        }
        userinfo.userKey = $("#register_key").val();//密保答案
        if (userinfo.userKey == null || userinfo.userKey == "") {
            show_validate_msg("#span_register_key", "error", "答案不能为空！");
            return false
        }

        var formData = new FormData();
        formData.append('userInfo', JSON.stringify(userinfo));

        $.ajax({
            type: "POST",
            url: "/Register",
            data: formData,
            contentType: false,
            processData: false,
            cache: false,
            success: function (result) {
                //1、关闭注册模态框
                $("#user_model_register").modal('hide');
                //2、打开登录模态框
                $("#user_model_login").modal({
                    backdrop:"static"
                })
            }
        })

    })

    /***************************************************(找回密码模块)***************************************************/

    //定义接收用户的密码、密保问题回答、用户账号
    var User_pass;
    var User_ans;

    /**
     *点击确定验证电话号码格式以及是否存在
     */
    $("#btn_find_key_ok").click(function () {
        var userPhone = $("#find_phone").val();

        $("#find_key_phone").removeClass("likai_success likai_fail");
        $("#find_key_phone").text("");


        if (userPhone == "" || userPhone == null) {
            show_validate_msg("#find_key_phone", "error", "手机号不能为空！！！");
            $("#btn_find_key_ok").attr("ajax-va", "error");
            return false;
        } else {
            var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;

            if (!reg.test(userPhone)) {
                show_validate_msg("#find_key_phone", "error", "手机号格式不正确！！！");
                return false;
            } else {

                $.ajax({
                    url:"/OnlyPhone",
                    data:"userPhone="+userPhone,
                    type:"POST",
                    success:function(result){
                        if(result.code==100){
                            show_validate_msg("#find_key_phone", "error", "不存在的用户");
                            return false;
                        }else{

                            //清除数据
                            $("#find_key_form2")[0].reset();
                            //清空表单样式
                            $("#find_key_form2").find("*").removeClass("likai_success likai_fail");
                            $("#find_key_form2").find("span").text("");

                            //1、关闭找回密码输入号码模态框
                            $("#user_model_find_key1").modal('hide');
                            //2、打开输入模态框
                            $("#user_model_find_key2").modal({
                                backdrop:"static"
                            })

                            //3、填充密保数据
                            $("#user_lock").val(result.extend.user.userLock);

                            User_ans = result.extend.user.userKey;
                            User_pass = result.extend.user.userPassWord;
                        }
                    }
                });
            }
        }
    });
    $("#btn_find_key").click(function () {


        $("#find_password").val("");

        $("#find_ansower_password").removeClass("likai_success likai_fail");

        $("#find_ansower_password").text("");

        var us_ansower = $("#find_ansowerPassword").val();

        if (us_ansower == "" || us_ansower == null) {
            show_validate_msg("#find_ansower_password", "error", "回答不能为空！");
            return false;
        } else if (us_ansower == User_ans){
            $("#find_password").val(User_pass);
        }else{
            show_validate_msg("#find_ansower_password", "error", "回答错误！");
            return false;
        }
    })

});