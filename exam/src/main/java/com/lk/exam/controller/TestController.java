package com.lk.exam.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Map;

@Controller
public class TestController {

   /* @RequestMapping("/test")
    public String test() {
        return "Hello Word";
    }
*/

    @RequestMapping("/success")
    public String success(Map<String,Object> map) {
        map.put("hello","<h1>你好</h1>");
        map.put("users", Arrays.asList("zhangsan","李四","王五"));
        return "test/success";
    }
}
