(function() {
	try {
        var l = window.location.toString();
        if(l.startsWith("https://youtube.com/shorts/") || l.startsWith("https://www.youtube.com/shorts/")) {
			window.location.href = "https://youtube.com/watch?v=" + l.split("youtube.com/shorts/")[1].slice(0,11);
        }
	} catch{}
})();
