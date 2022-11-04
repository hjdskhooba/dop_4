let inp1 = document.querySelector('#One')
let inp2 = document.querySelector('#two')
let btn = document.querySelector('#switch')

let values;

function change () {
    values = inp1.value
    inp1.value = inp2.value
    inp2.value = values
}

btn.addEventListener('click',() => {
    change()
})