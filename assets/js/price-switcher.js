function check() {
  let checkbox = document.getElementById("checkbox");
  let price1 = document.getElementsByClassName("price1");
  let price2 = document.getElementsByClassName("price2");
  for (let i = 0; i < price1.length; i++) {
    if (checkbox.checked == false) {
      price1[i].style.display = "block";
      price2[i].style.display = "none";
    } else if (checkbox.checked == true) {
      price1[i].style.display = "none";
      price2[i].style.display = "block";
    }
  }
}
check();
