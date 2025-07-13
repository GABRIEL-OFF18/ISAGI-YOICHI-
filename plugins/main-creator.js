async function handler(m, { conn }) {
    let numcreador = '584146277368';
    let ownerJid = numcreador + '@s.whatsapp.net';

    let name = await conn.getName(ownerJid) || 'Owner';
    let about = (await conn.fetchStatus(ownerJid).catch(() => {}))?.status || 'Creador de bots de WhatsApp y del Isagi Yoichi ᑲ᥆𝗍 mძ 🌀';
    let empresa = 'Gabriel- Servicios Tecnológicos';

    let caption = `
✨ *Información del Dueño:* ✨

*👤 Nombre:* ${name}
*📞 Número:* wa.me/${numcreador}
*📝 Descripción:* ${about}
*🏢 Empresa:* ${empresa}
*📧 Email:* (texto)
*📸 Instagram:* (texto
`;

    await conn.sendMessage(m.chat, { text: caption }, { quoted: m });
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['owner', 'creator', 'creador', 'dueño'];

export default handler;
