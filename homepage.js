// سكريبت homepage.js لتحميل قائمة الأنمي والتعامل مع البحث
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCYTzkQy64G_xnWKB62f7SrqqMd-O6XL_M",
    authDomain: "brog-2d8b5.firebaseapp.com",
    projectId: "brog-2d8b5",
    storageBucket: "brog-2d8b5.firebasestorage.app",
    messagingSenderId: "1034188865864",
    appId: "1:1034188865864:web:b736100dcd9bfd7604b37d",
    measurementId: "G-34ZSLGWZ6N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadAnimeList() {
    const animeList = document.getElementById("anime-list");
    const querySnapshot = await getDocs(collection(db, "animeList"));
    animeList.innerHTML = "";
    querySnapshot.forEach((doc) => {
        const anime = doc.data();
        const animeCard = document.createElement("div");
        animeCard.classList.add("anime-card");
        animeCard.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}">
            <h3>${anime.title}</h3>
            <p>${anime.description}</p>
        `;
        animeList.appendChild(animeCard);
    });
}

document.getElementById("search-btn").addEventListener("click", () => {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const animeCards = document.querySelectorAll(".anime-card");
    animeCards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = title.includes(searchValue) ? "block" : "none";
    });
});

document.getElementById("side-page-btn").addEventListener("click", () => {
    window.location.href = "admin.html";
});

loadAnimeList();
