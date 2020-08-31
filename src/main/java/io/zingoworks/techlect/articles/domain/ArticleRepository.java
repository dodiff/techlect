package io.zingoworks.techlect.articles.domain;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ArticleRepository extends JpaRepository<Article, Long> {

    Page<Article> findAllByOrderByAuthoredOnDesc(Pageable pageable);

    @Modifying
    @Query("UPDATE Article SET hits = hits + 1 WHERE id = :id")
    void incrementHits(@Param("id") Long id);

}
