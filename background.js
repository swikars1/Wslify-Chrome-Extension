chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({currentUrl: window.location.href}, function() {
    console.log(window.location.href);
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: 'home' }
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});