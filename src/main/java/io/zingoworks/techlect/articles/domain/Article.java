package io.zingoworks.techlect.articles.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String meta;
    private String title;
    private String description;
    private String link;

    public Article(Long id, String meta, String title, String description, String link) {
        this.id = id;
        this.meta = meta;
        this.title = title;
        this.description = description;
        this.link = link;
    }

    public Article(String meta, String title, String description, String link) {
        this(null, meta, title, description, link);
    }

}
