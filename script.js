const data = {
  phone: "01012345678",
  status: "missing" // 기본 상태
};

const callBtn = document.getElementById("callBtn");
const statusText = document.getElementById("statusText");
const toggle = document.getElementById("toggle");

// 📞 전화 연결
callBtn.href = `tel:${data.phone}`;

// 🔄 상태 반영 함수
function updateUI() {
  if (data.status === "missing") {
    statusText.innerText = "🔴 현재, 실종 신고가 접수된 어르신입니다.";
    statusText.style.display = "inline";
    toggle.classList.add("active");
  } else {
    statusText.style.display = "none";
    toggle.classList.remove("active");
  }
}

// 👉 초기 상태 적용
updateUI();

// 🔥 👉 클릭하면 상태 변경
toggle.addEventListener("click", () => {
  if (data.status === "missing") {
    data.status = "normal";
  } else {
    data.status = "missing";
  }

  updateUI();
});
