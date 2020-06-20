package com.lk.exam.crawler;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.processor.PageProcessor;
import us.codecraft.webmagic.scheduler.BloomFilterDuplicateRemover;
import us.codecraft.webmagic.scheduler.QueueScheduler;

@Component
public class Task_Crawler implements PageProcessor {

    String url = "http://www.xsfanwen.com/2018/10-18/194249.html";

    @Override
    public void process(Page page) {
        System.out.println(page.getHtml().toString());
    }

    private Site site = Site.me()
            .setCharset("utf-8")   //编码
            .setTimeOut(10*10000) //超时时长
            .setRetrySleepTime(3*1000) //设置重发请求时间间隔
            .setRetryTimes(3); //设置重连次数

    @Override
    public Site getSite() {
        return this.site;
    }

    //@Scheduled(fixedDelay = 10000)
    public void test(){
        Spider.create(new Task_Crawler())
                .addUrl(url)
                .setScheduler(new QueueScheduler().setDuplicateRemover(new BloomFilterDuplicateRemover(100000))) //对10万条数据去重
                .thread(10)  //开启10个线程去处理
                .run();
    }
}
