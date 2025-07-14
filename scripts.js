let list = document.querySelectorAll('.item')

let next = document.getElementById('next')
let prev = document.getElementById('prev')

let count = list.length
let active = 0

console.log(count)


next.onclick = () => { 
   let disable = document.querySelector('.active')
   disable.classList.remove('active')

    active = active >= count - 1 ? 0 : active + 1
   list [active].classList.add('active')
}

prev.onclick = () => {
    let disable = document.querySelector('.active')
    disable.classList.remove('active')

     active = active <= 0 ? count -1: active - 1 
   list [active].classList.add('active')
}