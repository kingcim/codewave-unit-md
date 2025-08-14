/* 
███████╗ ██████╗ ██████╗ ███████╗██╗    ██╗ █████╗ ██╗   ██╗███████╗
██╔════╝██╔════╝██╔═══██╗██╔════╝██║    ██║██╔══██╗██║   ██║██╔════╝
█████╗  ██║     ██║   ██║█████╗  ██║ █╗ ██║███████║██║   ██║█████╗  
██╔══╝  ██║     ██║   ██║██╔══╝  ██║███╗██║██╔══██║╚██╗ ██╔╝██╔══╝  
██║     ╚██████╗╚██████╔╝███████╗╚███╔███╔╝██║  ██║ ╚████╔╝ ███████╗
╚═╝      ╚═════╝ ╚═════╝ ╚══════╝ ╚══╝╚══╝ ╚═╝  ╚═╝  ╚═══╝  ╚══════╝
                                                                     
»»————- ★ -————-««  C O D E W A V E   U N I T   M D  »»————- ★ -————-««
*/

const fs = require('fs');
const chalk = require('chalk');

/* ==== 🔥 POWER CONFIGURATION 🔥 ==== */
global.prefa = [',', '!', '.', '#', '&']; // Command triggers
global.autoRecording = false; // 🎤 Auto voice recording
global.autoTyping = true; // ⌨️ Auto typing indicator
global.autorecordtype = false; // 🔄 Auto typing + recording
global.autoread = true; // 👁️ Auto read messages
global.autobio = true; // 📝 Auto bio update
global.chataudio = false; // 🔊 Audio replies
global.chatbot = true; // 🤖 Text chatbot
global.emojiReact = false; // 😃 Emoji reactions
global.ownernomer = "263786115435"; // 👑 Owner number
global.ownername = "Iconic Tech"; // 🏆 Owner name
global.ownernumber = '263786115435'; // 📱 Owner contact
global.blockedCountryCodes = ["+92", "91", "+62"]; // 🚫 Blocked countries

/* ==== 🌐 GLOBAL IDENTITY ==== */
global.ytname = "YT: https://www.youtube.com/@iconic-tech";
global.socialm = "GitHub: https://github.com/iconic05";
global.location = "Zimbabwe/Bulawayo";
global.botname = "ᴄᴏᴅᴇᴡᴀᴠᴇ ᴜɴɪᴛ ᴍᴅ"; // Bot's alias

global.packname = "ʀᴏʙᴏᴛɪᴄ"; // Sticker pack name
global.author = "ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɪᴄᴏɴɪᴄ"; // Sticker author
global.themeemoji = "🤖"; // Default emoji
global.wm = "ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ"; // Watermark
global.link = "https://chat.whatsapp.com/LyFPHDvc5vMCglUFjv7Rlp"; // Group link

global.typemenu = "\u0076\u0031"; // Typing menu style

/* ==== 💬 RESPONSE MESSAGES ==== */
global.mess = {
    done: "✅ Task completed successfully!",
    prem: "🔒 Premium feature - upgrade to access!",
    admin: "⛔ Admin privileges required",
    botAdmin: "🤖 Make me admin first!",
    owner: "🚫 Owner-only command",
    group: "💬 Group-only command",
    private: "📩 Use in private chat",
    wait: "⏳ Processing...",
    error: "❌ Error detected!"
};

// 🖼️ Thumbnail configuration
global.thumb = fs.readFileSync("./CodewaveMedia/codewave.jpg");

// 🔄 Auto-refresh config
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`⚡ Config updated: '${__filename}'`));
    delete require.cache[file];
    require(file);
});

/* ==== 🛡️ SECURITY MODULE ==== */
module.exports = {
    security: {
        antiSpam: true,
        maxMessages: 10, // Messages per 10 seconds
        blockDuration: 300 // 5 minutes (seconds)
    },
    
    antilinkMessage: "⚠️ Group links not allowed!",
    mess: {
        owner: "⛔ Owner access required!",
        wait: "⏳ Processing...",
        done: "✅ Success!",
    }
};

// »»————- ★ -————-«« CODING WITH POWER »»————- ★ -————-««