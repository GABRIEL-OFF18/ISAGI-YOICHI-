const handler = async (m, { conn }) => {
  let gifUrl = "https://h.uguu.se/iRbSvBAW.jpg";

  let text = `
 ──────── ⚔ ────────  
     *COMUNIDAD*  
──────── ⚔ ────────  

*Bot Gabriel*  
• ,👥➤ **Grupo de WhatsApp de la comunidad de ISAGI YOICHI ᑲ᥆𝗍 🚀**  
   Únete para compartir y resolver problemas con otros usuarios. 
  ➤https://chat.whatsapp.com/KLHc8jL5chQ2aVUxFtg0ms?mode=r_t

• 📢 ➤ *Canal de Bot ISAGI YOICHI*  
   Recibe actualizaciones, noticias y lanzamientos del bot.  
https://whatsapp.com/channel/0029VbAIBneK0IBjjFDyMn31
• 💬 ➤ *Grupo de WhatsApp activo*  
   Chatea con usuarios en tiempo real y sé parte de la conversación y usa al bot que esta de uso.  
➤https://chat.whatsapp.com/KLHc8jL5chQ2aVUxFtg0ms?mode=r_t

──────── ⚔ ────────  
🔍 *¿Sabías que...?* 
- El bot ISAGI YOICHI 𝐁𝐨𝐭 es actualizado regularmente para mejorar su desempeño.  
- Puedes sugerir mejoras o reportar errores directamente en los grupos.  
- Nuestra comunidad sigue creciendo y cuenta con soporte activo.  
-
`.trim();


  await conn.sendMessage(
    m.chat,
    {
      video: { url: gifUrl },
      gifPlayback: true, 
      caption: text,
      mentions: [m.sender], 
    },
    { quoted: m }
  );
};

handler.command = /^(comunidad)$/i; 
export default handler;