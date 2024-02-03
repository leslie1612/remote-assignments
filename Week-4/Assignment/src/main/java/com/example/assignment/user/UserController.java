package com.example.assignment.user;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // home page
    @GetMapping("/")
    public String sign() {
        return "home";
    }


    @PostMapping("/signup")
    public String signUp(@ModelAttribute User user, RedirectAttributes redirectAttributes) {

        if (userService.findUser(user) != null) {
            redirectAttributes.addFlashAttribute("result", "Email has been registered");
            return "redirect:/";
        }
        userService.saveUser(user);
        redirectAttributes.addFlashAttribute("result", user.getEmail());
        return "redirect:/member";

    }


    @PostMapping("/signin")
    public String signIn(@ModelAttribute User user, RedirectAttributes redirectAttributes) {

        String result = userService.checkUser(user);

        if (result.equals("success")) {
            redirectAttributes.addFlashAttribute("result", user.getEmail());
            return "redirect:/member";
        }else {
            redirectAttributes.addFlashAttribute("result", result);
            return "redirect:/";
        }
    }


    @GetMapping("/member")
    public String member(@ModelAttribute("result") String mail, Model model) {
        if (mail.isEmpty()) {
            return "redirect:/";
        } else {
            model.addAttribute("mail", mail);
            return "member";
        }
    }

}