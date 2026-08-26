매일공부매니저 블로그 - 최종 초안

구성
- index.html
- style.css
- CNAME
- 글 HTML 6개

운영 원칙
1. 카테고리를 사용하지 않습니다.
2. 대표 글 3개는 index.html 상단에서 직접 고정합니다.
3. 추천 글은 index.html의 실제 글 목록(.post-item)에서 자동으로 읽습니다.
   별도의 JavaScript 글 배열을 수정할 필요가 없습니다.
4. 추천 글 3개는 새로고침할 때마다 무작위로 바뀝니다.

새 글을 발행할 때
1. 새 글 HTML 파일 하나를 추가합니다.
2. index.html의 전체 글 목록 맨 위에 .post-item 블록 하나를 추가합니다.
3. '6개의 글' 숫자를 7, 8...로 수정합니다.

새 글 블록 예시

<a class="post-item"
   href="./new-post.html"
   data-title="새 글 제목"
   data-date="2026.09.02">
  <div class="post-meta">
    <time datetime="2026-09-02">2026.09.02</time>
  </div>
  <h3 class="post-title">새 글 제목</h3>
  <p class="post-desc">새 글을 한 문장으로 설명합니다.</p>
</a>

추천 글에는 위 블록의 data-title, data-date, href가 자동으로 사용됩니다.
