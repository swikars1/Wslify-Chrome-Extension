document.querySelector('#handleWslify').addEventListener("click", function() {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.update(tabs.id, {url: `file://wsl$/ubuntu/${tabs[0].url.replace('file://', '')}`});
  });
})