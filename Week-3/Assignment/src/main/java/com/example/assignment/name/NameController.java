package com.example.assignment.name;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.ui.Model;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;


@Controller
public class NameController {

    @GetMapping("/myName")
    public String readCookie(
            @CookieValue(name = "username", defaultValue = "trackName") String userId, Model model) {

        if (userId.equals("trackName")) {
            return "trackName";
        } else {
            model.addAttribute("name", userId);
            return "username";
        }

    }

    @GetMapping("/trackName")
    public RedirectView setCookie(HttpServletRequest request, HttpServletResponse response, @RequestParam("name") String username) {

        Cookie cookie = new Cookie("username",username );
        cookie.setMaxAge(60);
        cookie.setSecure(true);
        cookie.setHttpOnly(true);
        cookie.setPath("/myName");
        cookie.setDomain("localhost");

        response.addCookie(cookie);

        return new RedirectView("/myName");
    }
}

