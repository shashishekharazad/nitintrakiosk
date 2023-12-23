function goBack() {
    window.history.back();
  }

function getParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function updateAttribute() {
    const attributeValue = getParam('attributeValue');

    if (attributeValue) {
        var driveUrl = "https://drive.google.com/embeddedfolderview?id=" + attributeValue + "#grid";
        document.getElementById('targetElement').setAttribute('src', driveUrl);
    }
}
window.onload = updateAttribute;