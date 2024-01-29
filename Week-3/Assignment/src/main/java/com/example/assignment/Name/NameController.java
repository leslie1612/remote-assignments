package com.example.assignment.Name;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.ui.Model;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;


@Controller
public class NameController {

    // 1. 確認是否有使用者名稱的cookies
    @GetMapping("/myName")
    public String readCookie(
            @CookieValue(name = "username", defaultValue = "trackName") String userId, Model model) {

        // 2. 沒有 -> 顯示輸入表格頁面, 有 -> 顯示使用者名稱頁面
        if (userId.equals("trackName")) {
            return "trackName";
        } else {
            model.addAttribute("name", userId);
            return "username";
        }

    }

    // 3. 取得表格輸入值,設置cookie,並重新導向
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

