let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let pp = './portada_download.jpg'
let text = `
Download Shizu-Bot

Descarga Ud-Md-V1 en tu número, bot de WhatsApp multi device, con comandos actualizados a diario.

Bot editable con menú desplegable

Yt Link: https://www.youtube.com/c/UMARMODS

GitHub: https://github.com/umar404/Ud-Md-V1

Save For Status Views: +923475589080
Link: wa.me/923165123719

AcidicNodes
Mantén tus servidores activos 24/7 gratuitamente.
https://billing.acidicnodes.ml/register?ref=nSzLjTPd

Ud-Md-V1 WhatsApp Bot Group.
https://chat.whatsapp.com/FrYa5MtvVjr94oMNTXCdPg

Unete👆!!!

------------------------------------

*—◉ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇*
> pkg install
> pkg upgrade
> pkg install git
> pkg install ffmpeg && pkg install libwebp
> pkg install nodejs
> pkg install yarn
> git clone https://github.com/umar404/Ud-Md-V1
> cd Ud-Md-V1
> npm install
> yarn
> npm startç
(Este bot puede tener fallos, porque esta desactualizado.)`  
m.reply(text)   
}
handler.command = /^(instalarbot)/i
export default handler
