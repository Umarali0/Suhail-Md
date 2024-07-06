howconst fs = require('fs-extra')
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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_51_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMixcbiAgICAgICAgODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgODIsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAzMixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgOTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI2LFxuICAgICAgICA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDkyLFxuICAgICAgICA0MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MixcbiAgICAgICAgMTc5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NixcbiAgICAgICAgMjUyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgNDgsXG4gICAgICAgIDM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDU2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDExLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc0LFxuICAgICAgICA3MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYxLFxuICAgICAgICA3NyxcbiAgICAgICAgOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDc3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDczLFxuICAgICAgICAxODQsXG4gICAgICAgIDc5LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpd2RyYU9jY2k0WmNGTlduK2I4cVRsSzFnV0pKSUZXTGNhV0sxVEt5ekZRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4MjhROEJDaFNKaUdJSXFlMTNQYnVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRhMjY2MDJjLTJmZTUtNDBjOS04YzY3LTNiNDI4MDU2YmM5YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDgsXG4gICAgICA4MSxcbiAgICAgIDYzLFxuICAgICAgMTE2LFxuICAgICAgMjM5LFxuICAgICAgMTc1LFxuICAgICAgMTk4LFxuICAgICAgNzAsXG4gICAgICAyMDEsXG4gICAgICAyNixcbiAgICAgIDcsXG4gICAgICAxNDksXG4gICAgICAxOTksXG4gICAgICAxNDEsXG4gICAgICAyNyxcbiAgICAgIDEwNCxcbiAgICAgIDEyMixcbiAgICAgIDEyMCxcbiAgICAgIDEwNixcbiAgICAgIDk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MCxcbiAgICAgIDIzOSxcbiAgICAgIDE0OSxcbiAgICAgIDExMyxcbiAgICAgIDIzOCxcbiAgICAgIDEsXG4gICAgICAxMDYsXG4gICAgICAxMjcsXG4gICAgICAxMCxcbiAgICAgIDIxNCxcbiAgICAgIDExMCxcbiAgICAgIDUwLFxuICAgICAgMTg3LFxuICAgICAgMzgsXG4gICAgICAxNzMsXG4gICAgICAxNyxcbiAgICAgIDIzOSxcbiAgICAgIDczLFxuICAgICAgMTc4LFxuICAgICAgMjQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRaMzNLTFo2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNzc3Njk3ODg6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzMTI1ODQ3MDc3Mjg0NTozOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNakxvWk1GRUkzRHBMUUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInUvc2RIbkxkVEM5TXFMRFdaeVJhcVo4VUQvWXpMN2VqbWV5ZDQ3VE1pblE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZjM1WDNSZDdrMlNDLzRjZHYxQlZ2Rm82ZzI5cmxRSUo5dzg1NUZJa0tyM0hsSlBFOTdnU1MvQS9QN0FhZmlwTUtOdGF3ZDRxd3M4ZGhZYlpmR0hZRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT0M5MDk5RDE5NGJzUTkza0N3czN6Mm9qRDFucGM5VmU1RHFWKzdreXQ0Y2U3VWsvam5SM3FLK2x5OE8vQitYdTUwRVNWSFRqQWRPM3k0SUZ5WGFtREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjc3NzY5Nzg4OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI2MzA1NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZ3VVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRndVLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRWpUVjN3dWxtUGdkQ1cvVld6T0N2c1U1QTFWYnEvbngzV1A0ZVVlOG1WVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzgyNTczNTA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwMTY4Mjk4MDMzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
