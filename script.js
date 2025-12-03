document.getElementById("contactBtn").addEventListener("click", () => {
    const number = prompt("Введіть свій номер телефону для звʼязку:");

    if (number && number.trim() !== "") {
        alert("Дякуємо! Ми звʼяжемось з вами за номером: " + number);
    } else {
        alert("Номер не був введений.");
    }
});


const contactBtn = document.getElementById("contactBtn");
const sound = new Audio("chime-alert-demo-309545.mp3");


contactBtn.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();


    setTimeout(() => {
        const phone1 = prompt("Введіть ваш номер телефону для зв'язку:");


        setTimeout(() => {
            const phone2 = prompt("Підтвердіть спробу. Введіть номер ще раз:");

            console.log("Перше введення:", phone1);
            console.log("Друге введення:", phone2);
        }, 100);

    }, 50);
});