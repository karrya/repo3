package com.lk.exam;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

/**
 * 启动类
 * 热更新、热加载
 * 1、Settings->Compiler->Build project anutomatically
 * 2、Ctrl+Shift+A -》s搜索register，找到Registry。。。，注意是后面
 * 3、Ctrl+F9重新部署
 */
@EnableScheduling  //开启定时任务
@SpringBootApplication
@MapperScan("com.lk.exam.dao")
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class,args);
    }
}
