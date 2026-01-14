import { initBookingWidget } from "./index";
import "./demo.css";

// Инициализируем виджет при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    initBookingWidget("booking-widget", {
        apiUrl: "http://localhost:3000",
        apiToken: "gma_00b29c85b65c456394b7e4cd7f39f4aa", // Замените на ваш токен
        specialist: {
            name: "Денис Дробыш",
            description:
                "Senior Product Designer",
            email: "deni.drobysh.jdg@gmail.com",
            photo: "https://i.pravatar.cc/300", // Раскомментируйте для фото
            meetSubject: "Онлайн консультация",
            meetDescription: "Google Meet",
            infoLabels: {
                timeSlot: "60 минут",
                confirmation: "Требуется подтверждение",
                videoCall: "Google Meet"
            }
        },
        theme: {
            primaryColor: "#667eea",
            secondaryColor: "#764ba2",
        },
    });
});
