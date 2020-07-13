package io.zingoworks.techlect.articles.application;

import io.zingoworks.techlect.articles.domain.Article;
import io.zingoworks.techlect.articles.domain.ArticleRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ArticleService {

    private final ArticleRepository articleRepository;

    public List<Article> findAll() {
        return articleRepository.findAll();
    }

}
