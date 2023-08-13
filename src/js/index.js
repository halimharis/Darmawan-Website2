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
  scrollInto(navigation);
}

function scrollInto(element) {
  element.children[carouselPosition].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}

function sendMail(event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;
  const formattedMessage = message.replace(/(?:\r\n|\r|\n)/g, "%0D");

  window.location.href =
    "mailto:dyp.lawoffice@gmail.com?subject=Darmawan on Website - " +
    service +
    "&body=" +
    formattedMessage +
    "%0D" +
    "%0D" +
    "You can call or email me back to" +
    "%0D" +
    phoneNumber +
    "%0D" +
    email +
    "%0D" +
    "%0D" +
    "Best Regards," +
    "%0D" +
    name +
    "%0D%0D";
}
