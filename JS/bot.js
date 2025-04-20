// sweetalert2
import Swal from "sweetalert2";

// form
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let car = document.getElementById("car").value;
    let carType = document.getElementById("carType").value;
    let phone = document.getElementById("phone").value;

    let botToken = "7689335338:AAHSx7TSHcnw7ZhGbmDBWQYKLbwasdQoqb8";
    let chatIds = ["1092480367", "1390910615"];

    let message = `📩 Navbatdagi mijoz ma'lumoti:\n\n👤 Ism: ${name}\n🚘 Avtomobil: ${car}\n📞 Xizmat turi: ${carType}\n📞 Telefon: ${phone}`;

    let requests = chatIds.map((chatId) => {
      let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        message
      )}`;
      return fetch(url).then((response) => response.json());
    });

    Promise.all(requests)
      .then((results) => {
        if (results.every((res) => res.ok)) {
          showAlert(
            "Siz navbatga muvaffaqiyatli yozildingiz!",
            "Adminstratorlarimiz sizga aloqaga chiqadi.",
            "success"
          );
        } else {
          showAlert("Xatolik!", "Xabar yuborishda xatolik yuz berdi.", "error");
        }
      })
      .catch(() => {
        showAlert(
          "Xatolik!",
          "Internet yoki bot sozlamalarini tekshiring.",
          "error"
        );
      });
  });

function showAlert(title, text, icon) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: "OK",
    background: "#222", // Dark background
    color: "#fff", // Matn rangi
  });
}
