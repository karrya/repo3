package com.lk.exam.bean;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class User implements Serializable {
    private Integer userId;    //主键id
    private String openID;     //qq登录用户唯一标识
    private String userName;   //姓名
    private String userPhone; //账号（电话号）
    private String userPassWord;//密码
    private int isOff;         //是否被封号：0、未被封号 1、被封号
    private int roleId;       //权限：1、普通用户 2、管理员 3、超级管理员
    private Date createTime;   //创建时间
    private String userLock;   //密保问题
    private String userKey;    //密保问题

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getOpenID() {
        return openID;
    }

    public void setOpenID(String openID) {
        this.openID = openID;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public String getUserPassWord() {
        return userPassWord;
    }

    public void setUserPassWord(String userPassWord) {
        this.userPassWord = userPassWord;
    }

    public int getIsOff() {
        return isOff;
    }

    public void setIsOff(int isOff) {
        this.isOff = isOff;
    }

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getUserLock() {
        return userLock;
    }

    public void setUserLock(String userLock) {
        this.userLock = userLock;
    }

    public String getUserKey() {
        return userKey;
    }

    public void setUserKey(String userKey) {
        this.userKey = userKey;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", openID='" + openID + '\'' +
                ", userName='" + userName + '\'' +
                ", userPhone='" + userPhone + '\'' +
                ", userPassWord='" + userPassWord + '\'' +
                ", isOff=" + isOff +
                ", roleId=" + roleId +
                ", createTime=" + createTime +
                ", userLock='" + userLock + '\'' +
                ", userKey='" + userKey + '\'' +
                '}';
    }
}
