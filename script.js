// 전역 데이터 설정
const userData = {
  name: "어르신",
  phone: "01012345678",
  centerPhone: "021234567",
  status: "missing" // 초기값
};

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle");
  const statusText = document.getElementById("statusText");
  const callBtn = document.getElementById("callBtn");
  const centerBtn = document.getElementById("centerBtn");

  if (callBtn) callBtn.href = `tel:${userData.phone}`;
  if (centerBtn) centerBtn.href = `tel:${userData.centerPhone}`;

  function updateStatusUI() {
    if (!toggle || !statusText) return;

    if (userData.status === "missing") {
      toggle.classList.add("active");
      statusText.innerHTML = `<span class="dot">●</span> 현재, 실종 신고가 접수된 어르신입니다.`;
      statusText.style.visibility = "visible";
    } else {
      toggle.classList.remove("active");
      statusText.style.visibility = "hidden";
    }
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      userData.status = (userData.status === "missing") ? "normal" : "missing";
      updateStatusUI();
    });
  }

  updateStatusUI();
});
