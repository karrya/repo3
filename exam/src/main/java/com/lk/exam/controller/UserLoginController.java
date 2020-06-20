package com.lk.exam.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.lk.exam.bean.Msg;
import com.lk.exam.bean.User;
import com.lk.exam.service.impl.UserServiceImpl;
import com.lk.exam.utils.HttpServletRequestUtil;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.websocket.server.PathParam;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
public class UserLoginController {

    @Autowired
    UserServiceImpl userService;

    @RequestMapping(value = "/select", method = RequestMethod.GET)
    public Msg select_users() {
        List<User> users = userService.select_users();
        return Msg.success().add("users", users);
    }

    /**
     * 登录功能的实现
     * @param userPhone：账号（手机号）
     * @param userPassword 密码
     * @param session 存放用户姓名
     * @return 返回JSON信息
     */
    @RequestMapping(value = "/Login", method = RequestMethod.POST)
    public Msg select_login(@PathParam("userPhone") String userPhone, @PathParam("userPassword") String userPassword, HttpSession session) {

        User user = userService.select_login(userPhone, userPassword, 1);

        if (user!= null) {

            session.setAttribute("session_userName", user.getUserName());

            return Msg.success().add("session_userName",user.getUserName());
        } else {

            return Msg.fail().add("msg", "账号密码错误");
        }
    }


    @RequestMapping(value = "/Register",method = RequestMethod.POST)
    public Msg insert_user(HttpServletRequest request){

        String userInfoString = HttpServletRequestUtil.getString(request,"userInfo");

        ObjectMapper mapper = new ObjectMapper();

        User user =null;
        try{
            user= mapper.readValue(userInfoString, User.class);
            System.err.println(user.getUserName());
            System.err.println(user.getUserPassWord());
            System.err.println(user.getUserPhone());
            System.err.println(user.getUserLock());
            System.err.println();
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("解析有问题");
        }

        user.setUserName(user.getUserName());
        user.setUserPhone(user.getUserPhone());
        user.setUserPassWord(user.getUserPassWord());
        user.setCreateTime(new Date());
        user.setUserLock(user.getUserLock());
        user.setUserKey(user.getUserKey());

        userService.insert_user(user);

        return  Msg.success();
    }

    @RequestMapping(value = "/OnlyPhone",method = RequestMethod.POST)
    public Msg seletc_only_user(@Param("userPhone")String userPhone){

        System.out.println(userPhone);
        String regx = "(^[1][3,4,5,6,7,8,9][0-9]{9}$)";
        if (!userPhone.matches(regx)){
            System.out.println("格式验证通不过");
            return Msg.fail().add("va_msg","号码格式错误！！");
        }
        List<User> users = userService.select_only_user(userPhone);
        if (users.size() == 0){

            return Msg.success();
        }else{
            User user =  users.get(0);
            System.out.println(user);
            return Msg.fail().add("va_msg", "该号码已被注册！").add("user",user);
        }

    }
}
