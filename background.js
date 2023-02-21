chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
		getAllManhwa();
	});
});

chrome.contextMenus.create({
	title: 'Asura : %s',
	contexts: ['selection'],
	onclick: getPossibleManhwa
});

function getMangaInfo() {
    value = localStorage.getItem("mangaInfo");
    return value;
}

function getPossibleManhwa(info){
    var req = new XMLHttpRequest();
    var myQuery = encodeURI('https://www.asurascans.com/?s=' + info.selectionText);
    req.open('GET', myQuery, false);
    req.send(null);

    if(req.status == 200) {
        const doc = new DOMParser().parseFromString(req.responseText, 'text/html');
        const bsx = doc.getElementsByClassName("bsx"); // C'est une liste a ne pas oublier !
    };
}

function getAllManhwa(info){
    var req = new XMLHttpRequest();
    var myQuery = encodeURI('https://www.asurascans.com/manga/list-mode/');
    req.open('GET', myQuery, false);
    req.send(null);

    if(req.status == 200){
        const doc = new DOMParser().parseFromString(req.responseText, 'text/html');
        const alphabet = doc.getElementsByClassName("blix");
        const tab = [];
        for(let div of alphabet){
            var liElement = div.getElementsByTagName("li");
            for(let elt of liElement){
                var link = elt.getElementsByTagName("a")[0].href;
                value = localStorage.getItem("mangaInfo");
                tab.push(link);
            }
        }
        localStorage.setItem("mangaInfo", tab);
    }
}