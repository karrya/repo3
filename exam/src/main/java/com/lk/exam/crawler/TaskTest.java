package com.lk.exam.crawler;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class TaskTest {

    //@Scheduled(cron = "0/5 * * * * *")
    public void tets(){
        System.out.println("我就是这么拽！！！");
    }
}
