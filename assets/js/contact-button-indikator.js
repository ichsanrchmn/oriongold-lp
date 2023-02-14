const indikator_plan = $(".indikator-plan").text(),
  phone = ["6288218403282", "628113030082"],
  i = parseInt(Math.random() * 2);

const buy_indikator = document.querySelector(".buy-btn.indikator");
buy_indikator.setAttribute("href", "https://api.whatsapp.com/send?phone=" + phone[i] + "&text=Halo%20Admin,%20saya%20berminat%20untuk%20berlangganan%20Indikator%20Orion%20 " + indikator_plan + " %20bagaimana%20caranya?");

const trial_indi_btn = document.querySelector(".trial-btn.indikator");
trial_indi_btn.setAttribute("href", "https://api.whatsapp.com/send?phone=" + phone[i] + "&text=Halo%20Admin,%20saya%20berminat%20untuk%20trial%20Indikator%20Orion%20System");

const floating_btn_indikator = document.querySelector(".floating-btn.indikator");
floating_btn_indikator.setAttribute("href", "https://api.whatsapp.com/send?phone=" + phone[i] + "&text=Halo%20Admin,%20saya%20ingin%20bertanya%20seputar%20Indikator%20Orion%20System");

const contact_btn_indikator = document.querySelector(".contact-btn.indikator");
contact_btn_indikator.setAttribute("href", "https://api.whatsapp.com/send?phone=" + phone[i] + "&text=Halo%20Admin,%20saya%20ingin%20bertanya%20seputar%20Indikator%20Orion%20System");
