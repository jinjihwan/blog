
async function sharePost() {
  const title = document.querySelector(".article-title")?.textContent?.trim() || document.title;
  const shareData = {
    title: title,
    text: title,
    url: window.location.href
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error && error.name === "AbortError") return;
    }
  }

  await copyPostLink();
}

async function copyPostLink() {
  const button = document.querySelector(".copy-button");

  try {
    await navigator.clipboard.writeText(window.location.href);

    if (button) {
      const original = button.textContent;
      button.textContent = "복사되었습니다";
      setTimeout(() => {
        button.textContent = original;
      }, 1500);
    }
  } catch (error) {
    window.prompt("아래 주소를 복사해주세요.", window.location.href);
  }
}
