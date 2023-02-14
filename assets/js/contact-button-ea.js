const plan_basic = $(".plan-basic").text(),
  plan_premium = $(".plan-premium").text(),
  plan_pro = $(".plan-pro").text(),
  phone = ["6288218403282", "628113030082"],
  i = parseInt(Math.random() * 2);

const basic_btn = document.querySelector(".buy-btn.basic");
basic_btn.setAttribute("href", "https://api.whatsapp.com/send?phone=" + phone[i] + "&text=Halo%20Admin,%20saya%20berminat%20untuk%20berlangganan%20EA%20Orion%20dengan%20plan%20 " + plan_basic + " %20bagaimana%20caranya?");

const premium_btn = document.querySelector(".buy-btn.premium");
premium_btn.setAttribute("href", "https://api.whatsapp.com/send?phone=" + phone[i] + "&text=Halo%20Admin,%20saya%20berminat%20untuk%20berlangganan%20EA%20Orion%20dengan%20plan%20 " + plan_premium + " %20bagaimana%20caranya?");

const pro_btn = document.querySelector(".buy-btn.pro");
pro_btn.setAttribute("href", "https://api.whatsapp.com/send?phone=" + phone[i] + "&text=Halo%20Admin,%20saya%20berminat%20untuk%20berlangganan%20EA%20Orion%20dengan%20plan%20 " + plan_pro + " %20bagaimana%20caranya?");

const trial_btn = document.querySelector(".trial-btn");
trial_btn.setAttribute("href", "https://api.whatsapp.com/send?phone=" + phone[i] + "&text=Halo%20Admin,%20saya%20berminat%20untuk%20trial%20EA%20Orion%20System");

const floating_btn = document.querySelector(".floating-btn");
floating_btn.setAttribute("href", "https://api.whatsapp.com/send?phone=" + phone[i] + "&text=Halo%20Admin,%20saya%20ingin%20bertanya%20seputar%20EA%20Orion%20System");

const contact_btn = document.querySelector(".contact-btn");
contact_btn.setAttribute("href", "https://api.whatsapp.com/send?phone=" + phone[i] + "&text=Halo%20Admin,%20saya%20ingin%20bertanya%20seputar%20EA%20Orion%20System");
