// Extract URLs and domains from search results
function extractUrls() {
  const results = [];
  document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('/url?q=')) {
      const url = decodeURIComponent(href.split('/url?q=')[1].split('&')[0]);
      const domain = new URL(url).hostname;
      results.push({ url, domain });
    }
  });
  return results;
}

// Send the extracted URLs to the background script
chrome.runtime.sendMessage({ action: 'storeResults', results: extractUrls() });
