const input_box = document.querySelector('#input-box')
const up_button = document.querySelector('#upper-case')
const lo_button = document.querySelector('#lower-case')
const pr_button = document.querySelector('#proper-case')
const se_button = document.querySelector('#sentence-case')
const sa_button = document.querySelector('#save-text-file')

up_button.addEventListener('click', function() {
    input_box.value = input_box.value.toUpperCase()
})


lo_button.addEventListener('click', function () {
    input_box.value = input_box.value.toLowerCase()
})


pr_button.addEventListener('click', function() {
    input_box.value = input_box.value.toLowerCase()
    let temp = input_box.value
    temp = temp.split(' ')
    for (let i = 0; i < temp.length; i++) {
        const first_char = temp[i].charAt(0).toUpperCase()
        const rest = temp[i].substring(1)
        temp[i] = first_char + rest
    }
    input_box.value = temp.join(' ')
})

se_button.addEventListener('click', function() {
    input_box.value = input_box.value.toLowerCase()
    let temp = input_box.value
    temp = temp.split('.')
    for (let i = 0; i < temp.length; i++) {
        let newString = temp[i].toLowerCase()
            .replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){
                return c.toUpperCase()
            });
        temp[i] = newString
    }
    input_box.value = temp.join('.')
})


sa_button.addEventListener('click', function() {
    let title = prompt("Please enter the filename", "Text");
    download(title+'.txt',input_box.value);
})

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}