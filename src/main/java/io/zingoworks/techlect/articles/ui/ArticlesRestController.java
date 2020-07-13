package io.zingoworks.techlect.articles.ui;

import io.zingoworks.techlect.articles.application.ArticleService;
import io.zingoworks.techlect.articles.domain.Article;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/articles")
public class ArticlesRestController {

    private final ArticleService articleService;

    @GetMapping
    public List<Article> articles() {
        return articleService.findAll();
    }

}
