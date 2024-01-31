package com.example.assignment.number;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class NumberController {

    @GetMapping("/sum.html")
    public String sum() {
        return "sum";
    }

    @ResponseBody
    @GetMapping(value = "/data")
    public String getNum(@RequestParam(value = "number", required = false) String num) {

        if (num == null) {
            return "Lack of Parameter";
        } else {
            try {
                int value = Integer.parseInt(num);

                if (value <= 0) {
                    return "Wrong Parameter";
                } else {
                    return Integer.toString((1 + value) * value / 2);
                }
            } catch (NumberFormatException e) {
                return "Wrong Parameter";
            }
        }
    }

}
