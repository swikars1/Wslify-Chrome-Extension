document.querySelector('#handleWslify').addEventListener("click", function() {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    console.log(tabs);
});
  // chrome.tabs.update({url: 'http://example.com'});
})