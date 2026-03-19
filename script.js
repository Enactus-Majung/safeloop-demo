const data = {
  phone: "01012345678",
  status: "missing" // normal / missing
};

// 📞 전화 연결
document.getElementById("callBtn").href = `tel:${data.phone}`;

// 🔴 상태 표시
const statusText = document.getElementById("statusText");

if (data.status === "missing") {
  statusText.innerText = "🔴 현재, 실종 신고가 접수된 어르신입니다.";
} else {
  statusText.innerText = "🟢 정상 상태입니다.";
}

// 👤 페이지 이동
document.getElementById("infoBtn").href = "user.html";
