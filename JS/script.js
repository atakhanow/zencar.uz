function showAlert(event) {
  event.preventDefault(); // Shaklning yuborilishini oldini olish

  // Foydalanuvchi kiritgan ma'lumotlarni olish
  const name = document.querySelector(
    'input[placeholder="Ismingizni kiriting"]'
  ).value;
  const carModel = document.querySelector(
    'input[placeholder="Avtomobilingizning markasi va modeli"]'
  ).value;
  const carType = document.querySelector('select[id="carType"]').value;
  const phoneNumber = document.querySelector("#phoneNumber").value;

  if (name && carModel && carType && phoneNumber) {
    // Telegram botga yuborish uchun URL
    const botToken = "7689335338:AAHSx7TSHcnw7ZhGbmDBWQYKLbwasdQoqb8"; // Telegram bot tokenini o'zgartiring
    const chatId = "1390910615"; // Botga yuboriladigan chat ID

    const message = `
      Yangi so'rov:
      Ism: ${name}
      Avtomobil: ${carModel}
      Xizmat turi: ${carType}
      Telefon: ${phoneNumber}
    `;

    // Telegram API orqali so'rov yuborish
    fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        message
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          alert("So'rov yuborildi va administratorga yetkazildi!");
        } else {
          alert("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring!");
        }
      })
      .catch((error) => {
        alert("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring!");
        console.error("Error sending message:", error);
      });

    // Agar kerak bo'lsa, ma'lumotlarni serverga jo'natish
    // document.getElementById('contactForm').submit();
  } else {
    alert("Iltimos, barcha maydonlarni to'ldiring!");
  }
}
