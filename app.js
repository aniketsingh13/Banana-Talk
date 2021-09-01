var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(input) {
    return serverUrl + "?" + "text=" + input
}

function errorHandler(error) {
    alert("something wrong with the server!,plese try after sometimes")
}

function clickHandler() {
    var inputText = txtInput.Value;
    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);