function removerEspacos() {
    var inputText = document.getElementById('inputText').value;
    var outputText = inputText.replace(/\s+/g, '');
    document.getElementById('outputText').innerText = outputText;
}

function limparCampos() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').innerText = '';
}

function copiarTexto() {
    var outputText = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(outputText).then(function() {
        alert('Texto copiado para a área de transferência');
    }, function(err) {
        alert('Erro ao copiar texto: ', err);
    });
}
