package com.example.demo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
@ComponentScan({"data.*","naver.cloud"})
@MapperScan({"data.mapper"})
@SpringBootApplication
public class SpringReactProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringReactProjectApplication.class, args);
	}

}
