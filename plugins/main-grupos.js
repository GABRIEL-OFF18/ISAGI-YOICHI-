import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    let grupos = "*Hola!, te invito a unirte a los grupos oficiales  para convivir con la comunidad* \n\n" +
                 "1-Gabriel\n" +
                 "*✰* https://chat.whatsapp.com/KLHc8jL5chQ2aVUxFtg0ms?mode=r_t" +
                 "*─ׄ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ*\n\n" +
                 "➠ Enlace anulado? entre aquí! \n\n" +
                 "⭐ Canal :\n" +
                 "*✰*.
https://whatsapp.com/channel/0029VbAIBneK0IBjjFDyMn31" +
                 "> By Gabriel";

    // Asegúrate de definir 'imagen2' correctamente antes de usarlo
    let imagen2 = 'https://d.uguu.se/lWBQvtWA.jpg';

    // Define los emojis que quieres usar
    let emojis = '👾';

    await conn.sendFile(m.chat, imagen2, "ian.jpg", grupos, m, null, rcanal);
    await m.react(emojis);
}

handler.help = ['grupos'];
handler.tags = ['main'];
handler.command = ['grupos', 'iangrupos', 'gruposian'];

export default handler;