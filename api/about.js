export async function handleAboutCommand(chatId, user, telegramApi) {
    const photoUrl = "https://t.me/kajal_developer/59";
    const caption = `<b><blockquote>⍟───[ MY ᴅᴇᴛᴀɪʟꜱ ]───⍟</blockquote>

‣ ᴍʏ ɴᴀᴍᴇ : <a href="https://t.me/${user.username}">${user.first_name}</a>
‣ ᴍʏ ʙᴇsᴛ ғʀɪᴇɴᴅ : <a href='tg://settings'>ᴛʜɪs ᴘᴇʀsᴏɴ</a> 
‣ ᴅᴇᴠᴇʟᴏᴘᴇʀ : <a href='https://t.me/kingvj01'>ᴛᴇᴄʜ ᴠᴊ</a> 
‣ ʟɪʙʀᴀʀʏ : <a href='https://telegrafjs.org'>ᴛᴇʟᴇɢʀᴀғ (v4.12)</a> 
‣ ʟᴀɴɢᴜᴀɢᴇ : <a href='https://nodejs.org'>ɴᴏᴅᴇ.ᴊs v20</a> 
‣ ᴅᴀᴛᴀ ʙᴀsᴇ : <a href='https://mongodb.com'>ᴍᴏɴɢᴏᴅʙ</a> 
‣ ʙᴏᴛ sᴇʀᴠᴇʀ : <a href='https://heroku.com'>ʜᴇʀᴏᴋᴜ</a> 
‣ ʙᴜɪʟᴅ sᴛᴀᴛᴜs : ᴠ2.5 [sᴛᴀʙʟᴇ]</b>`;

    try {
        await telegramApi.callApi('sendPhoto', { 
            chat_id: chatId,
            photo: photoUrl,
            caption: caption,
            parse_mode: 'HTML',
            disable_web_page_preview: true
        });
    } catch (error) {
        console.error('Error sending about message:', error);
        await telegramApi.sendMessage(chatId, 'Sorry, there was an error showing the about information.');
    }
}
