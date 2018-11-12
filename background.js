// recieves messages since it is always running in the background.
// only responsible for updating the values in the database.

// chrome.storage.sync.clear(function() {alert("clean");});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	var log = request.text;
	var url = request.url;

	chrome.storage.sync.get([url], function(result) {
        var array = result[url] ? result[url] : [];

		array.unshift(log);

        var jsonObj = {};
        jsonObj[url] = array;
        chrome.storage.sync.set(jsonObj, function() {
            console.log(jsonObj);
        });
    });

});
// need to retain the changes, use json?