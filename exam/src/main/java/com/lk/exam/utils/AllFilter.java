package com.lk.exam.utils;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.servlet.*;
import java.io.IOException;

/**
 * 视图页面过滤
 */
//@Configuration
public class AllFilter implements Filter {

    @Bean
    public FilterRegistrationBean<AllFilter> getAllFilter(){
        FilterRegistrationBean<AllFilter> bean = new FilterRegistrationBean<>();
        bean.setFilter(new AllFilter());
        bean.addUrlPatterns("/*");
        return  bean;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {
        filterChain.doFilter(request,response);
    }
}
