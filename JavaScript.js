<script>
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;

  // Replace 'YOUR_BOT_TOKEN' and 'YOUR_CHAT_ID' with your actual bot token and chat ID
  const botToken = '6065710585:AAFpUGbkGgc40U9LfWHZokT2StEMLRn5qNY';
  const chatId = '5543174018';
  const message = `New Form Submission:\nUsername: ${username}\nEmail: ${email}`;

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.ok) {
      alert('Form submitted successfully!');
    } else {
      alert('Failed to send message.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred.');
  });
});
</script>
