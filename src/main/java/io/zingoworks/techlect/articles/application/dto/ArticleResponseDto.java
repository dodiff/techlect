package io.zingoworks.techlect.articles.application.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.zingoworks.techlect.articles.domain.Article;
import java.time.LocalDate;
import lombok.Getter;
import org.springframework.data.domain.Page;

@Getter
public class ArticleResponseDto {

    private final Long id;
    private final String organization;
    private final String title;
    private final String description;
    private final String author;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private final LocalDate authoredOn;
    private final String link;

    public ArticleResponseDto(Article entity) {
        this.id = entity.getId();
        this.organization = entity.getOrganization();
        this.title = entity.getTitle();
        this.description = entity.getDescription();
        this.author = entity.getAuthor();
        this.authoredOn = entity.getAuthoredOn();
        this.link = entity.getLink();
    }

    public static Page<ArticleResponseDto> of(Page<Article> entity) {
        return entity.map(ArticleResponseDto::new);
    }

}
