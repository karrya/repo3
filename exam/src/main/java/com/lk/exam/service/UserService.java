package com.lk.exam.service;

import com.lk.exam.bean.User;

import java.util.List;

public interface UserService {

    /**
     * 查询所有用户
     */
    public List<User> select_users();

    /**
     * 用户登录
     * @return
     */
    public User select_login(String userPhone,String userPassword, int roleId);

    /**
     * 注册用户
     * @param user
     */
    public void insert_user(User user);

    /**
     * 注册时查询电话号码是否已经注册
     * @param userPhone
     * @return
     */
    public List<User> select_only_user(String userPhone);
}
