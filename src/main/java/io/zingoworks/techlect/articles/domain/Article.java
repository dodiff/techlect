package io.zingoworks.techlect.articles.domain;

import io.zingoworks.techlect.common.BaseTimeEntity;
import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AccessLevel;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EqualsAndHashCode(of = "id", callSuper = false)
public class Article extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String organization;

    private String title;

    private String description;

    private String link;

    private String author;

    private LocalDate authoredOn;

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
