import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict, antiCall, antiprivado, modejadibot } = global.db.data.settings[conn.user.jid] || {}
const { autoread, gconly, pconly, self } = global.opts || {}
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
╠═〘 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 〙 ═
╠
╠➥ [🤴🏻] 𝑪𝒓𝒆𝒂𝒕𝒐𝒓: *Umar-Rehman*
╠➥ [#️⃣] 𝑵𝒖𝒎𝒃𝒆𝒓: *+92 316 5123719*
╠➥ [🎳] 𝑼𝒔𝒆𝒅 𝑷𝒓𝒆𝒇𝒊𝒙: *${usedPrefix}*
╠➥ [🔐] 𝑷𝒓𝒊𝒗𝒂𝒕𝒆 𝑪𝒉𝒂𝒕𝒔: *${chats.length - groups.length}*
╠➥ [🦜] 𝑮𝒓𝒐𝒖𝒑𝒔 𝑪𝒉𝒂𝒕𝒔: *${groups.length}* 
╠➥ [💡] 𝑻𝒐𝒕𝒂𝒍 𝑪𝒉𝒂𝒕𝒔: *${chats.length}* 
╠➥ [🚀] 𝑼𝒑𝑻𝒊𝒎𝒆: *${uptime}*
╠➥ [🎩] 𝑻𝒐𝒕𝒂𝒍 𝑹𝒆𝒈: *${totalreg} 𝒏𝒖𝒎𝒃𝒆𝒓𝒔*
╠➥ [☑️] 𝑨𝒖𝒕𝒐𝒓𝒆𝒂𝒅: ${autoread ? '*𝒂𝒄𝒕𝒊𝒗𝒂𝒕𝒆*' : '*𝒅𝒆𝒂𝒄𝒕𝒊𝒗𝒂𝒕𝒆*'}
╠➥ [❗] 𝑹𝒆𝒔𝒕𝒓𝒊𝒄𝒕: ${restrict ? '*𝒂𝒄𝒕𝒊𝒗𝒂𝒕𝒆*' : '*𝒅𝒆𝒂𝒄𝒕𝒊𝒗𝒂𝒕𝒆*'} 
╠➥ [💬] 𝑷𝒄 𝑶𝒏𝒍𝒚: ${pconly ? '*𝒂𝒄𝒕𝒊𝒗𝒂𝒕𝒆*' : '*𝒅𝒆𝒂𝒄𝒕𝒊𝒗𝒂𝒕𝒆*'}
╠➥ [🏢] 𝑮𝒄 𝑶𝒏𝒍𝒚: ${gconly ? '*𝒂𝒄𝒕𝒊𝒗𝒂𝒕𝒆*' : '*𝒅𝒆𝒂𝒄𝒕𝒊𝒗𝒂𝒕𝒆*'}
╠➥ [🌎] 𝑴𝒐𝒅𝒆: ${self ? '*𝒑𝒓𝒊𝒗𝒂𝒕𝒆*' : '*𝒑𝒖𝒃𝒍𝒊𝒄*'}
╠➥ [💬] 𝑨𝒏𝒕𝒊 𝑷𝒓𝒊𝒗𝒂𝒕𝒆: ${antiprivado ? '*𝒂𝒄𝒕𝒊𝒗𝒂𝒕𝒆*' : '*𝒅𝒆𝒂𝒄𝒕𝒊𝒗𝒂𝒕𝒆*'}
╠➥ [🤖] 𝑴𝒐𝒅𝒆𝑼𝒅𝑩𝒐𝒕: ${modejadibot ? '*𝒂𝒄𝒕𝒊𝒗𝒂𝒕𝒆*' : '*𝒅𝒆𝒂𝒄𝒕𝒊𝒗𝒂𝒕𝒆*'}
╠➥ [📵] 𝑨𝒏𝒕𝒊 𝑪𝒂𝒍𝒍: ${antiCall ? '*𝒂𝒄𝒕𝒊𝒗𝒂𝒕𝒆*' : '*𝒅𝒆𝒂𝒄𝒕𝒊𝒗𝒂𝒕𝒆*'}
╠➥ [👨‍🦯] 𝑺𝒑𝒆𝒆𝒅: 
╠  *${speed} ms* 
╠
╠═〘 https://github.com/umar404/Ud-Md-V1〙 ═
`.trim() 
function _0x29f5(){const _0x566d80=['chat','10zQulaE','1128940ganLMA','relayMessage','2992230eQzNdo','161nvJXUq','25962YOlrjt','179545SeklXD','34167910xOqfEH','10IIKotd','message','878088DXpOHr','9083456bTUBuy'];_0x29f5=function(){return _0x566d80;};return _0x29f5();}const _0x4683a7=_0x27ac;function _0x27ac(_0x4fd3ff,_0x2f7c1a){const _0x29f56b=_0x29f5();return _0x27ac=function(_0x27ac09,_0x443f1e){_0x27ac09=_0x27ac09-0xda;let _0x324a1d=_0x29f56b[_0x27ac09];return _0x324a1d;},_0x27ac(_0x4fd3ff,_0x2f7c1a);}(function(_0x3b8202,_0x534d5b){const _0x37ffd2=_0x27ac,_0x30c97b=_0x3b8202();while(!![]){try{const _0x12b804=parseInt(_0x37ffd2(0xe4))/0x1*(-parseInt(_0x37ffd2(0xde))/0x2)+-parseInt(_0x37ffd2(0xdb))/0x3+parseInt(_0x37ffd2(0xdf))/0x4*(-parseInt(_0x37ffd2(0xe6))/0x5)+-parseInt(_0x37ffd2(0xe3))/0x6*(parseInt(_0x37ffd2(0xe2))/0x7)+-parseInt(_0x37ffd2(0xdc))/0x8+parseInt(_0x37ffd2(0xe1))/0x9+parseInt(_0x37ffd2(0xe5))/0xa;if(_0x12b804===_0x534d5b)break;else _0x30c97b['push'](_0x30c97b['shift']());}catch(_0x9d0633){_0x30c97b['push'](_0x30c97b['shift']());}}}(_0x29f5,0xb9679));let res=generateWAMessageFromContent(m[_0x4683a7(0xdd)],{'liveLocationMessage':{'degreesLatitude':0x0,'degreesLongitude':0x0,'caption':info,'sequenceNumber':'0','contextInfo':{'mentionedJid':conn['parseMention'](info)}}},{'quoted':m});conn[_0x4683a7(0xe0)](m[_0x4683a7(0xdd)],res[_0x4683a7(0xda)],{});
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|infobot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
