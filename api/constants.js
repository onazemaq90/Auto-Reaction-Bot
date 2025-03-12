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
<title>About | Auto Emoji Reaction Bot</title>
<meta name="description" content="Learn more about the Telegram Auto Reaction Bot. A fun and interactive bot that adds emojis to your chats.">
<meta name="keywords" content="Telegram bot, auto reaction bot, emoji bot, chatbot automation">

<style>
  body, html {
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #f0f2f5;
    color: #333;
    font-family: 'Arial', sans-serif;
  }

  .container {
    max-width: 600px;
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    padding: 30px;
    text-align: center;
  }

  .title {
    font-size: 28px;
    color: #0881FD;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .description {
    font-size: 16px;
    color: #555;
    margin-bottom: 20px;
  }

  .feature-list {
    text-align: left;
    margin-top: 20px;
    padding: 0;
    list-style: none;
  }

  .feature-list li {
    margin: 10px 0;
    padding-left: 20px;
    position: relative;
  }

  .feature-list li::before {
    content: '✅';
    position: absolute;
    left: 0;
    color: #0881FD;
  }

  .button {
    background-color: #0881FD;
    color: #fff;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    transition: background-color 0.3s ease;
  }

  .button:hover {
    background-color: #0672E0;
  }

  .footer {
    margin-top: 15px;
    font-size: 14px;
    color: #777;
  }

</style>
</head>
<body>

<div class="container">
  <div class="title">About Auto Emoji Reaction Bot 🎯</div>

  <div class="description">
    The Auto Emoji Reaction Bot is designed to make your Telegram conversations lively and engaging!  
    Add it to your chats or groups and enjoy automatic emoji reactions to your messages.
  </div>

  <ul class="feature-list">
    <li>⚡ Instant emoji reactions to your messages</li>
    <li>🤖 Easy integration with Telegram groups and channels</li>
    <li>🎯 Open-source project — customize it your way!</li>
    <li>🌍 100% Serverless deployment via Cloudflare</li>
  </ul>

  <button class="button" onclick="window.location='https://github.com/Malith-Rukshan/Auto-Reaction-Bot'">
    Learn More on GitHub 🚀
  </button>

  <div class="footer">Created with ❤️ by Malith-Rukshan</div>
</div>

</body>
</html>
`;

