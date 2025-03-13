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
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Telegram Auto Reaction Bot 🚀</title>
<meta name="description" content="An open-source Telegram Auto Reaction Bot by Sumit Developer. Automate emoji reactions with ease.">
<meta name="keywords" content="Telegram bot, auto reaction bot, open-source, Telegram automation, reaction bot">

<script async defer src="https://buttons.github.io/buttons.js"></script>

<style>
  body, html {
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(135deg, #3a7bd5, #00d2ff);
    color: #fff;
    font-family: 'Arial', sans-serif;
  }

  .container {
    text-align: center;
    padding: 25px;
    max-width: 400px;
    background: #ffffff;
    border-radius: 18px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    animation: fadeIn 1.2s ease-in-out;
  }

  .logo {
    width: 90px;
    border-radius: 50%;
    margin-bottom: 20px;
    border: 4px solid #0881FD;
  }

  .title {
    font-size: 30px;
    font-weight: bold;
    color: #0881FD;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: 16px;
    color: #555;
    margin-bottom: 20px;
  }

  .developer-name {
    font-size: 14px;
    color: #0881FD;
    margin-top: 15px;
    font-weight: bold;
  }

  .button {
    background: linear-gradient(135deg, #0881FD, #0056D2);
    color: #fff;
    border: none;
    padding: 12px 28px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    transition: transform 0.3s ease, background 0.3s ease;
    width: 100%;
    margin-bottom: 10px;
  }

  .button:hover {
    background: linear-gradient(135deg, #0672E0, #0048B8);
    transform: scale(1.05);
  }

  .github-section {
    margin-top: 15px;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
</head>
<body>

<div class="container">
  <img class="logo" src="https://telegra.ph/file/cb59967120c6bda64580b.jpg" alt="Bot Logo">
  
  <div class="title">Auto Emoji Reaction Bot 🎉</div>
  <div class="subtitle">Brighten your chats with fun emoji reactions!</div>

  <button class="button" onclick="window.location='https://github.com/Malith-Rukshan/Auto-Reaction-Bot'">
    View on GitHub 🌱
  </button>

  <!-- New Telegram Bot Button -->
  <button class="button" onclick="window.location='https://t.me/YourBotUsername'">
    Open Telegram Bot 🤖
  </button>

  <div class="github-section">
    <a class="github-button" href="https://github.com/Malith-Rukshan/Auto-Reaction-Bot" 
       data-size="large" data-show-count="true">⭐ Star</a>
    <a class="github-button" href="https://github.com/Malith-Rukshan/Auto-Reaction-Bot/fork" 
       data-size="large" data-show-count="true">🍴 Fork</a>
  </div>

  <div class="github-section">
    <a class="github-button" href="https://github.com/Malith-Rukshan" data-size="large">
      Follow @Malith-Rukshan
    </a>
  </div>

  <div class="developer-name">
    Developed by 🚀 <b>Sumit Developer</b>
  </div>
</div>

</body>
</html>
`;

