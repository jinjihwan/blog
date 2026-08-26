# 매일공부매니저 블로그 - Jekyll 최종 구조

이 버전은 GitHub Pages의 Jekyll 기능을 사용합니다.

## 처음 한 번 해야 할 일

기존 `jinjihwan/blog` 저장소의 블로그 파일을 이 폴더의 파일들로 교체하세요.

업로드되어야 하는 구조:

/
├─ _config.yml
├─ CNAME
├─ index.html
├─ style.css
├─ share.js
├─ POST_TEMPLATE.md
├─ _layouts/
│  └─ post.html
└─ _posts/
   ├─ 2026-08-26-repeat-mistakes.md
   ├─ 2026-08-19-academy-grades.md
   ├─ 2026-08-12-long-study-no-rise.md
   ├─ 2026-08-05-first-habit.md
   ├─ 2026-07-29-study-time.md
   └─ 2026-07-22-plan-failure.md

GitHub Pages 설정은 기존처럼:
- Branch: main
- Folder: / (root)
- Custom domain: blog.maegongmae.com

`CNAME`에는 이미 `blog.maegongmae.com`이 들어 있습니다.

## 앞으로 새 글을 발행할 때

`index.html`을 수정할 필요가 없습니다.

1. ChatGPT에게 새 글을 요청합니다.
2. 만들어진 `.md` 파일 하나를 `_posts` 폴더에 업로드합니다.
3. 끝입니다.

Jekyll이 자동으로:
- 최신 글을 위에 표시
- 제목 표시
- 날짜 표시
- 설명문 표시
- 글 개수 증가
- 추천 글 목록에 포함
- 개별 글 페이지 생성
- 공통 공유 기능 적용

을 처리합니다.

## 새 글 파일 이름

반드시 다음 형태를 권장합니다.

`YYYY-MM-DD-english-slug.md`

예:
`2026-09-02-why-review-fails.md`

## 글 상단 정보(front matter)

각 글 맨 위에는 다음 정보가 있습니다.

---
title: "글 제목"
date: 2026-09-02
description: "메인 목록에 보여줄 한 문장 설명"
featured: false
permalink: /english-slug.html
---

### featured

대표 글로 상단에 노출하려면:

featured: true

대표 글은 최대 3개만 `true`로 유지하는 것을 권장합니다.

## 공유 기능

모든 게시글은 `_layouts/post.html`을 공통으로 사용하므로
각 글마다 공유 JavaScript를 넣을 필요가 없습니다.

- 공유하기: 휴대폰 기본 공유창
- 링크 복사: 현재 글 주소 복사

`share.js` 한 파일만 관리하면 됩니다.

## 기존 HTML 글 파일

이 Jekyll 버전을 적용한 뒤에는 기존 개별 게시글 HTML 파일은 삭제해도 됩니다.
새 게시글 페이지는 `_posts`의 Markdown을 기반으로 자동 생성됩니다.

각 글에는 기존 URL을 유지하도록 `permalink`를 직접 지정해두었습니다.
