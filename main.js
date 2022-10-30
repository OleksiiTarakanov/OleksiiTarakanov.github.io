document.querySelector('.run').addEventListener('click', () => {
    let iframeValue = document.querySelector('.text').value;
    document.querySelector('.iframe-view').innerHTML = iframeValue;
})