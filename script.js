let heartInterval = null;

function openBox() {
    const box = document.querySelector('.gift-box');
    const surprise = document.getElementById('surprise');
    const music = document.getElementById('bgMusic');

    box.classList.add('open');

    setTimeout(() => {
        surprise.classList.add('show');
        music.play();

        if (!heartInterval) {
            heartInterval = startHearts();
        }
    }, 600);
}

function startHearts() {
    return setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "0px";
        heart.style.fontSize = (Math.random() * 20 + 15) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }, 300);
}
const messages = [
    {
        title: "Happy Valentine’s Day 💖",
        text: "หวานใจไม่ว่างเลยทำเว็บมาให้ ✨"
    },
    {
        title: "Happy Valentine’s Day 💖",
        text: "อาทิตย์ที่ผ่านมาเธอไม่ว่างงง มีเด็กคิดถึงงง 💕"
    },
    {
        title: "Happy Valentine’s Day 💖",
        text: "เธอหายไปก็เหงาาาาา 💕"
    },
    {
        title: "Happy Valentine’s Day 💖",
        text: "ชดเชยเวลาให้ด้วยยยยยยย 😜"
    },
    {
        title: "Happy Valentine’s Day 💖",
        text: "ไม่ได้ไปกินข้าว ดูหนัง กับเธอสักทีเศ้ราาาา 💕"
    },
    {
        title: "อยาก",
        text: ""
    },
    {
        title: "จะ",
        text: ""
    },
    {
        title: "บอก",
        text: ""
    },
    {
        title: "ว่า",
        text: ""
    },
    {
        title: "💖 ชอบนะค้าบบบ ชอบพี่อังคับ 💖",
        text: ""
    }
];

let currentIndex = 0;

function nextMessage() {
    currentIndex++;

    if (currentIndex >= messages.length) {
        currentIndex = 0;
    }

    document.getElementById("titleText").innerText =
        messages[currentIndex].title;

    document.getElementById("messageText").innerText =
        messages[currentIndex].text;
}
