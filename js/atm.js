function punch(value) {
    var output = document.getElementById('output');
    if (value === 'b') {
        var input = document.getElementById('output').innerText;
        input = input.split('');
        input.pop();
        input = input.join('');
        output.innerText = input;
    } else if (value === 'x') {
        output.innerText = '';
    } else {
        output.innerText += value;
    }
};