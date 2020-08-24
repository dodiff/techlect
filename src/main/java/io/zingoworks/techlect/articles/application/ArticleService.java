package io.zingoworks.techlect.articles.application;

import io.zingoworks.techlect.articles.application.dto.ArticleResponseDto;
import io.zingoworks.techlect.articles.domain.Article;
import io.zingoworks.techlect.articles.domain.ArticleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ArticleService {

    private final ArticleRepository articleRepository;

    public Page<ArticleResponseDto> findAll(Pageable pageable) {
        Page<Article> articles = articleRepository.findAllByOrderByAuthoredOnDesc(pageable);
        return ArticleResponseDto.of(articles);
    }

}
