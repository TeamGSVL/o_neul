package com.gsvl.oneul.user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {

    @GetMapping("/login")
    public void goLoginPage(){ }
    @GetMapping("/join")
    public void goJoinPage(){ }
}
