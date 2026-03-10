/* KARANTINA SYSTEM V3.0 - FULL JS EDITION
   Duyuruyu değiştirmek için aşağıyı güncelle kanka!
*/

const config = {
    title: "KARANTİNA",
    subtitle: "Adaletin adresi, kara mizahın merkezi.",
    lastAnnouncement: "Sunucumuzda yeni etkinlikler başlıyor! Katılmak için discord kanalımızı takipte kalın.",
    serverStatus: "ÇEVRİMİÇİ",
    version: "V 3.0",
    discordLink: "https://discord.gg/karantina"
};

const app = document.getElementById('app');

function renderSite() {
    app.innerHTML = `
        <div class="flex items-center justify-center min-h-screen p-6">
            <div class="max-w-xl w-full space-y-6 animate-in fade-in duration-1000">
                
                <div class="bg-zinc-900/50 backdrop-blur-xl p-8 rounded-[2rem] border border-zinc-800 border-l-4 border-l-red-600 shadow-2xl">
                    <h1 class="text-6xl font-black tracking-tighter text-white">
                        ${config.title}<span class="text-red-600">.</span>
                    </h1>
                    <p class="text-zinc-400 mt-3 text-lg">${config.subtitle}</p>
                </div>

                <div class="bg-zinc-900/40 border border-zinc-800 p-6 rounded-3xl relative overflow-hidden group">
                    <div class="flex items-center gap-2 mb-4">
                        <span class="w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
                        <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-red-500">Son Duyuru</span>
                    </div>
                    <p class="text-zinc-200 text-lg leading-relaxed italic">
                        "${config.lastAnnouncement}"
                    </p>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-zinc-900/60 border border-zinc-800 p-6 rounded-[1.5rem] text-center">
                        <p class="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Durum</p>
                        <h3 class="text-2xl font-black text-green-500">${config.serverStatus}</h3>
                    </div>
                    <div class="bg-zinc-900/60 border border-zinc-800 p-6 rounded-[1.5rem] text-center">
                        <p class="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Sistem</p>
                        <h3 class="text-2xl font-black text-white">${config.version}</h3>
                    </div>
                </div>

                <a href="${config.discordLink}" target="_blank" 
                   class="flex items-center justify-center w-full h-20 bg-white text-black hover:bg-zinc-200 rounded-[1.5rem] font-black text-xl transition-all active:scale-95 shadow-xl shadow-white/5">
                    SUNUCUYA KATIL
                </a>

                <footer class="text-center">
                    <p class="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.4em]">
                        Karantina © 2026 • Tüm Hakları Saklıdır
                    </p>
                </footer>

            </div>
        </div>
    `;
}

// Siteyi Başlat
renderSite();
