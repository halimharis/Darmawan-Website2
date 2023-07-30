function toggleNavbar() {
  const element = document.getElementsByTagName("nav");
  element[0].classList.toggle("-translate-y-full");
}

let carouselPosition = 0;

function next() {
  const navigation = document.getElementById("carousel-wrapper");
  const pagination = document.getElementsByName("carousel-page");
  carouselPosition = carouselPosition + 1;
  if (carouselPosition === navigation.children.length) carouselPosition = 0;
  pagination[carouselPosition].checked = true;
  console.log(pagination);
  scrollInto(navigation);
}

function prev() {
  const navigation = document.getElementById("carousel-wrapper");
  const pagination = document.getElementsByName("carousel-page");
  carouselPosition = carouselPosition - 1;
  if (carouselPosition === -1)
    carouselPosition = navigation.children.length - 1;
  pagination[carouselPosition].checked = true;
  scrollInto(navigation);
}

function goToPagination(number) {
  const navigation = document.getElementById("carousel-wrapper");
  carouselPosition = number;
  console.log("masok");
  scrollInto(navigation);
}

function scrollInto(element) {
  element.children[carouselPosition].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}
