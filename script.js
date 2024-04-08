document.getElementById('openChatBtn').addEventListener('click', function() {
    document.getElementById('chatPopup').style.display = 'block';
  });
  
  document.getElementById('closeChatBtn').addEventListener('click', function() {
    document.getElementById('chatPopup').style.display = 'none';
  });
  
  document.getElementById('sendMessageBtn').addEventListener('click', function() {
    var message = document.getElementById('messageInput').value;
    if (message.trim() !== '') {
      var chatMessages = document.getElementById('chatMessages');
      chatMessages.innerHTML += '<p>You: ' + message + '</p>';
      document.getElementById('messageInput').value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });
  