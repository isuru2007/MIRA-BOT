const mainMenu = `
*╭─ MIRA BOT V1 ─╮* 🤖

හෙලෝ මචං! 👇 අංකයක් දාන්න

*1. MEGA DOWNLOADER* 📥
*2. STICKER & MEDIA* 🎨
*3. AI & AUTO TOOLS* 🧠
*4. SETTINGS ON/OFF* ⚙️

උදා: *1* Type කරන්න
`;

const subMenus = {
  "1": `
*📥 1. MEGA DOWNLOADER*

• .yt [link] - YouTube Video/MP3 ගන්න
• .play [name] - සින්දුවක් හොයනවා
• .tiktok / .fb / .insta - TikTok, FB, Insta Download

Back: .menu
`,
  "2": `
*🎨 2. STICKER & MEDIA*

• .sticker [photo] - ෆොටෝ එක Sticker කරනවා
• .toimg - Sticker එක ෆොටෝ කරනවා
• .removebg - Background අයින් කරනවා
• .hd - ෆොටෝ HD කරනවා

Back: .menu
`,
  "3": `
*🧠 3. AI & AUTO TOOLS*

• .ai [q] - AI එකෙන් අහන්න (සිංහලෙන් උත්තර)
• .imagine [text] - ඕන දෙයක් ෆොටෝ එකක් කරනවා
• .animegirl [text] - ලස්සන Anime Girls හදනවා ✨ Posh Style
• .mira [q] - MIRA AI එක්ක කතා කරනවා

Back: .menu
`,
  "4": `
*⚙️ 4. SETTINGS ON/OFF*

1. Autostatusview - ON ✅ (Status Seen වෙනවා)
2. Alwaysonline - ON ✅ (හැමවෙලේම Online)
3. Removebg - OFF ❌
4. Hd Photo - ON ✅

ON/OFF කරන්න: .on 3 / .off 2
Back: .menu
`
};

module.exports = { mainMenu, subMenus };
