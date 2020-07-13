package io.zingoworks.techlect.articles.ui;

import io.zingoworks.techlect.articles.application.ArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class ArticleController {

    private final ArticleService articleService;

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("articles", articleService.findAll());
        return "index";
    }

}
