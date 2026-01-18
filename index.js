// CattaHub Loader
(function() {
    // 🔴 แก้ตรงนี้เป็น Link ของ VPS คุณ
    const CORE_SCRIPT_URL = "https://st-cattacafe.casa/public/catta-core.js";

    console.log("🐱 CattaHub: Loading Core from VPS...");

    const script = document.createElement('script');
    script.id = 'catta-core-script';
    // เติม ?v=time เพื่อบังคับโหลดใหม่เสมอ ไม่ใช้ Cache เก่า
    script.src = CORE_SCRIPT_URL + "?v=" + Date.now();

    script.onload = () => console.log("✅ CattaHub Core Loaded!");
    script.onerror = () => console.error("❌ Failed to load CattaHub Core. Check VPS Server.");

    document.head.appendChild(script);
})();