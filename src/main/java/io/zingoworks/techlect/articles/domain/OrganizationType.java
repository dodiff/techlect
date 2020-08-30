package io.zingoworks.techlect.articles.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum OrganizationType {

    WOOWA_BROS("우아한 형제들", "https://www.woowahan.com/favicon/favicon.ico"),
    KAKAO("카카오", "https://tech.kakao.com/favicon.ico"),
    ZOOM("줌", "https://minihouse.zumst.com/20200622145155/zuminternetcom/images/favicon_161107.ico?t=1595878802000"),
    SPOQA("스포카", "https://spoqa.github.io/images/favicon.ico");

    private final String title;
    private final String faviconPath;

}
