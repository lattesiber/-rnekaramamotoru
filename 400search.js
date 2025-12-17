/* =========================
   400search - Genişletilmiş 400 site
   ========================= */

// Karışık site havuzu (popüler + ilginç + komik)
const BASE_SITES = [
    // Popüler
    { name: "YouTube", url: "https://youtube.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "TikTok", url: "https://tiktok.com" },
    { name: "X (Twitter)", url: "https://x.com" },
    { name: "Google", url: "https://google.com" },
    { name: "Wikipedia", url: "https://wikipedia.org" },
    { name: "Reddit", url: "https://reddit.com" },
    { name: "Discord", url: "https://discord.com" },
    { name: "Steam", url: "https://store.steampowered.com" },
    { name: "Roblox", url: "https://roblox.com" },

    // Kod & teknoloji
    { name: "GitHub", url: "https://github.com" },
    { name: "Stack Overflow", url: "https://stackoverflow.com" },
    { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
    { name: "W3Schools", url: "https://w3schools.com" },
    { name: "CodePen", url: "https://codepen.io" },
    { name: "Replit", url: "https://replit.com" },
    { name: "TurboWarp", url: "https://turbowarp.org" },
    { name: "Scratch", url: "https://scratch.mit.edu" },

    // Eğlence
    { name: "Netflix", url: "https://netflix.com" },
    { name: "Twitch", url: "https://twitch.tv" },
    { name: "Spotify", url: "https://spotify.com" },
    { name: "SoundCloud", url: "https://soundcloud.com" },

    // İlginç & komik
    { name: "The Useless Web", url: "https://theuselessweb.com" },
    { name: "Pointer Pointer", url: "https://pointerpointer.com" },
    { name: "Bored Button", url: "https://www.boredbutton.com" },
    { name: "Staggering Beauty", url: "https://www.staggeringbeauty.com" },
    { name: "Hackertyper", url: "https://hackertyper.net" },
    { name: "Long Doge Challenge", url: "https://longdogechallenge.com" },
    { name: "Heeeeeeeey", url: "https://heeeeeeeey.com" },
    { name: "Corndog", url: "https://corndog.io" },

    // Faydalı
    { name: "Canva", url: "https://canva.com" },
    { name: "Remove.bg", url: "https://remove.bg" },
    { name: "Photopea", url: "https://photopea.com" },
    { name: "Archive.org", url: "https://archive.org" },
    { name: "Speedtest", url: "https://speedtest.net" },

    // Garip ama gerçek
    { name: "Is it Christmas?", url: "https://isitchristmas.com" },
    { name: "Do Nothing for 2 Minutes", url: "https://donothingfor2minutes.com" },
    { name: "Koalas to the Max", url: "https://koalastothemax.com" },
    { name: "Zoomquilt", url: "https://zoomquilt.org" }
];

// 400 sonuç listesi
const SEARCH_RESULTS = [];

let id = 1;
while (SEARCH_RESULTS.length < 400) {
    for (const site of BASE_SITES) {
        if (SEARCH_RESULTS.length >= 400) break;

        SEARCH_RESULTS.push({
            id,
            title: `${site.name} | 400search sonuç ${id}`,
            description: `${site.name} ile ilgili ilginç, eğlenceli ve faydalı içerikler.`,
            url: site.url
        });

        id++;
    }
}

/**
 * Arama fonksiyonu
 */
function search400(query) {
    if (!query || query.trim() === "") return [];

    const q = query.toLowerCase();

    return SEARCH_RESULTS.filter(r =>
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.url.toLowerCase().includes(q)
    );
}

/**
 * HTML render
 */
function renderResults(query) {
    const results = search400(query);
    const box = document.getElementById("results");
    if (!box) return;

    box.innerHTML = "";

    if (results.length === 0) {
        box.innerHTML = "<p>Sonuç bulunamadı.</p>";
        return;
    }

    results.forEach(r => {
        const div = document.createElement("div");
        div.className = "result";
        div.innerHTML = `
            <h3>${r.title}</h3>
            <p>${r.description}</p>
            <a href="${r.url}" target="_blank">${r.url}</a>
        `;
        box.appendChild(div);
    });
}

// console.log(search400("komik"));
