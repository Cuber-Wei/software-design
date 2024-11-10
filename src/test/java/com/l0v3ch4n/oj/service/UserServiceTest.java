package com.l0v3ch4n.oj.service;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

/**
 * 用户服务测试
 */
@SpringBootTest
public class UserServiceTest {

    @Resource
    private UserService userService;

    @Test
    void userRegister() {
        String userAccount = "yupi";
        String userPassword = "";
        String checkPassword = "123456";
        String userPhone = "12345678910";
        String userMail = "yupi@gmail.com";
        String verityCode = "123456";
        try {
            long result = userService.userRegister(userAccount, userPassword, checkPassword, userPhone, userMail, verityCode);
            Assertions.assertEquals(-1, result);
            userAccount = "yu";
            result = userService.userRegister(userAccount, userPassword, checkPassword, userPhone, userMail, verityCode);
            Assertions.assertEquals(-1, result);
        } catch (Exception e) {

        }
    }
}
