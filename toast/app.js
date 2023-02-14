document.getElementsByClassName("site-content")[0].addEventListener("scroll", () => {
  const scrolled = document.getElementsByClassName("site-content")[0].scrollTop;
  console.log(scrolled);
});
