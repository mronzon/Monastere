var theValue;
function show() {
    theValue = chrome.extension.getLinkToManga().getMangaInfo(); // Ce sont des liens vers le site de asura. On récupere maintenant toutes les infos de ces liens y compris 
    var list = document.getElementById("image-list");
    console.log(theValue);
    if(!theValue){
        theValue = "Je suis la valeur null !";
    }

    list.innerHTML = theValue;

}

window.onfocus = function() {
	show();
}

window.onblur = function() {
	console.log('The user has left focus from the panel page');
}