package com.lk.exam.service.impl;

import com.lk.exam.bean.User;
import com.lk.exam.dao.UserMapper;
import com.lk.exam.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserServiceImpl  implements UserService {

    @Autowired
    UserMapper userMapper;

    /**
     * 查询所有用户
     */
    @Override
    public List<User> select_users() {
        return userMapper.select_users();
    }

    /**
     * 用户登录
     * @return
     */
    @Override
    public User select_login(String userPhone, String userPassword, int roleId) {
        return userMapper.select_login(userPhone,userPassword,roleId);
    }

    /**
     * 注册
     * @param user
     */
    @Override
    public void insert_user(User user) {
        userMapper.insert_login(user);
    }

    /**
     * 注册时查询电话号码是否已经注册
     * @param userPhone
     * @return
     */
    @Override
    public List<User> select_only_user(String userPhone) {
        return userMapper.select_only_user(userPhone);
    }
}
