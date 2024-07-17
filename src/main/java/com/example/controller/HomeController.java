package com.example.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@RequestMapping("v1")
@Controller
public class HomeController {



    @GetMapping("/principal")
    public String home() {
        return "principal"; // nombre de la vista (template) que quieres renderizar
    }
}
