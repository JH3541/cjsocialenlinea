function createBackgrounds() {
    document.body.classList.add('identity-background-' + getRandomInt());
    document.body.classList.add('identity-page--ready');
}

function getRandomInt() {
    const typedArray = new Uint32Array(1);
    crypto.getRandomValues(typedArray);
    const res = typedArray % (4);
    return res + 1;
}