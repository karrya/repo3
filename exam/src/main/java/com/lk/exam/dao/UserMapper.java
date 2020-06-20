package com.lk.exam.dao;

import com.lk.exam.bean.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserMapper {

    /**
     * 查询所有用户
     * @return
     */
    public List<User> select_users();

    /**
     * 注册时查询电话号码是否已经注册
     * @return
     */
    public List<User> select_only_user(@Param("userPhone")String userPhone);


    /**
     * 登录时查询用户登录情况
     * @param userPhone
     * @param userPassword
     * @param roleId
     * @return
     */
    public User select_login(@Param("userPhone")String userPhone, @Param("userPassword")String userPassword,@Param("roleId")int roleId);


    /**
     * 新增用户（注册用户）
     * @param user
     * @return
     */
    public int insert_login(User user);



}
