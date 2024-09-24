chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'storeResults') {
    document.getElementById('results').textContent = JSON.stringify(message.results, null, 2);
  }
});
