const words = ['uga ', 'buga '];

function generate(wordCount = 100) {
    let text = '';

    for(let i = 0; i < wordCount; i++) {
        text += words[Math.floor(Math.random() * words.length)];
    }

    return text;
}

function save() {
    document.getElementById('output').value = generate(
        document.getElementById('wordCount').value || 100);
}