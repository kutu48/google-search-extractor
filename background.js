let extractedResults = [];

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'storeResults') {
    extractedResults = message.results;
    console.log('Extracted Results:', extractedResults);
  }
});

