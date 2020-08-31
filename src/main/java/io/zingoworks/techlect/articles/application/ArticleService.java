package io.zingoworks.techlect.articles.application;

import io.zingoworks.techlect.articles.application.dto.ArticleResponseDto;
import io.zingoworks.techlect.articles.domain.Article;
import io.zingoworks.techlect.articles.domain.ArticleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ArticleService {

    private final ArticleRepository articleRepository;

    @Transactional(readOnly = true)
    public Page<ArticleResponseDto> findAll(Pageable pageable) {
        Page<Article> articles = articleRepository.findAllByOrderByAuthoredOnDesc(pageable);
        return ArticleResponseDto.of(articles);
    }

    public void incrementHits(Long id) {
        articleRepository.incrementHits(id);
    }

}
