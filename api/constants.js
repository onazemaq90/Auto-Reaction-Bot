export const startMessage = `👋 Hello there, UserName !

Welcome to the *Auto Emoji Reaction Bot 🎉*, ready to sprinkle your conversations with a little extra happiness!

💁‍♂️ Here's how I spice up your chats:

*✨ DM Magic*: Message me and receive a surprise emoji in return. Expect the unexpected and enjoy the fun!
*🏖 Group & Channel*: Add me to your groups or channels, and I'll keep the vibe positive by reacting to messages with engaging emojis.

✍️ To view the emojis I can use, simply type /reactions. To create your own auto reaction bot, head over to: [Auto-Reaction-Bot on GitHub](https://github.com/Malith-Rukshan/Auto-Reaction-Bot).

Let's elevate our conversations with more energy and color! 🚀

💖 Keep us running! Support the bot: /donate`

export const donateMessage = `🙏 Support Auto Reaction Bot ✨ and help us stay online and continue to improve! ✨ Your donations keep our services live and enable us to bring you new features and enhancements. Every star makes a difference! Thank you! 🌟🚀`

export const htmlContent = `
<!DOCTYPE html>
<html>
<body>
  <input id="url" placeholder="Enter Pinterest URL" />
  <button onclick="fetchMedia()">Download</button>
  <pre id="result"></pre>
  <script>
    async function fetchMedia() {
      const url = document.getElementById('url').value;
      const response = await fetch(`https://pinterest-downloader-three.vercel.app/api/download?url=${encodeURIComponent(url)}`);
      const data = await response.json();
      document.getElementById('result').textContent = JSON.stringify(data, null, 2);
    }
  </script>
</body>
</html>
`;

