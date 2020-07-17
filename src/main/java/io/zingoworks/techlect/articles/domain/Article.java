package io.zingoworks.techlect.articles.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EqualsAndHashCode(of = "id")
@ToString
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String organization;

    private String title;

    private String description;

    private String link;

    private String author;

    private LocalDate authoredOn;

    @CreatedDate
    private LocalDateTime createdDateTime;

    public Article(Long id, String organization, String title, String description, String link,
        String author, LocalDate authoredOn) {
        this.id = id;
        this.organization = organization;
        this.title = title;
        this.description = description;
        this.link = link;
        this.author = author;
        this.authoredOn = authoredOn;
    }

    public Article(String organization, String title, String description, String link, String author,
        LocalDate authoredOn) {
        this(null, organization, title, description, link, author, authoredOn);
    }

}
