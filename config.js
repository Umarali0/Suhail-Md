const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_19_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI3LFxuICAgICAgICA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDc3LFxuICAgICAgICA5OCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTExLFxuICAgICAgICAzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQwLFxuICAgICAgICAzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDcyLFxuICAgICAgICA3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNixcbiAgICAgICAgNTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM3LFxuICAgICAgICAzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MixcbiAgICAgICAgODEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTksXG4gICAgICAgIDk3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgzLFxuICAgICAgICA0NixcbiAgICAgICAgOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkwLFxuICAgICAgICA1MixcbiAgICAgICAgNzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDkxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInBqRU9sek90MFhteDFKZjRhQ1pqcDBtQU0wU2wzOWJEMWFGa1d3RDY3S2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNSQmVFOUxfVGNDTnNlNWExMjZ6QXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTM5MWVjMzktZmNkOS00ZDZhLWJhYjMtZjU5NGJlZDhkNjVhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDU5LFxuICAgICAgMTA5LFxuICAgICAgMTAxLFxuICAgICAgMjA0LFxuICAgICAgMjAzLFxuICAgICAgMTMyLFxuICAgICAgMTE5LFxuICAgICAgMTQ4LFxuICAgICAgMjgsXG4gICAgICAyMDMsXG4gICAgICAxNixcbiAgICAgIDk4LFxuICAgICAgMjIsXG4gICAgICA3MixcbiAgICAgIDIxOSxcbiAgICAgIDE3NixcbiAgICAgIDExOCxcbiAgICAgIDQ1LFxuICAgICAgNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE2LFxuICAgICAgMTk2LFxuICAgICAgMTg5LFxuICAgICAgMTU3LFxuICAgICAgNyxcbiAgICAgIDE0MSxcbiAgICAgIDEyOCxcbiAgICAgIDExNCxcbiAgICAgIDcxLFxuICAgICAgMTg5LFxuICAgICAgNjMsXG4gICAgICAyMzksXG4gICAgICAzNSxcbiAgICAgIDExNCxcbiAgICAgIDEzOCxcbiAgICAgIDIxMixcbiAgICAgIDE0NixcbiAgICAgIDE5NyxcbiAgICAgIDc5LFxuICAgICAgODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSkoxRUw3QUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI3Nzc2OTc4ODozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjMxMjU4NDcwNzcyODQ1OjM1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01qTG9aTUZFT21hb3JRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidS9zZEhuTGRUQzlNcUxEV1p5UmFxWjhVRC9Zekw3ZWptZXlkNDdUTWluUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlbi9TU1dYSnR2dHVjL1hOd0k2ZEt2ZWZ6U2VDZzRVMXJDUGhGQ21XM0FoOUJLdFZSdWFPSUpJeXlhRVp6ZkVTWVdWckVDOWpDQW9tZWhTWWhsRHNDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2K1N1VHFDNnlmUDdOanl1bmQ5YWxvdEwyUGNZaG00cjVpU2FDcThLMndHUVEyeFdKd2E5NG55Nlltd1RsMnd0ZEREa2hLYmlUN3J5MlJGRWg5VkRodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNzc3Njk3ODg6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjI1MTMzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRndVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGd1UuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFalRWM3d1bG1QZ2RDVy9WV3pPQ3ZzVTVBMVZicS9ueDNXUDRlVWU4bVZVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzODI1NzM1MDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxNjgyOTgwMzNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
