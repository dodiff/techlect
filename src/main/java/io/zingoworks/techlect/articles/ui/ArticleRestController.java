package io.zingoworks.techlect.articles.ui;

import io.zingoworks.techlect.articles.application.ArticleService;
import io.zingoworks.techlect.articles.application.dto.ArticleResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/articles")
@RequiredArgsConstructor
public class ArticleRestController {

    private final ArticleService articleService;

    @GetMapping
    public Page<ArticleResponseDto> findAll(final Pageable pageable) {
        return articleService.findAll(pageable);
    }

    @PostMapping("/hits")
    public String incrementHits(Long id) {
        return "ok!";
    }

}
