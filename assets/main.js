let a = document.querySelector('.i1')
let bool01 = false
a.addEventListener("click",() => {
    bool01 = !bool01
    if(bool01)
        a.style.color = 'red'
    else 
        a.style.color = 'white'
});

let b = document.querySelector('.i2')

let c = document.getElementsByClassName('audio')[0]
let bool02 = true//mở
b.addEventListener("click",() => {
    bool02 = !bool02
    if(!bool02) {
        //tắt  
        b.innerHTML  = 'pause'
        c.play()
    }
    else {
        //mở
        b.innerHTML  = 'play_circle_filled'
        c.pause()
    }
});

let bool03 = true
let e = document.querySelector('.i3')
let f = document.querySelector('.appear')
e.addEventListener('click',() => {
    f.style.display = 'block'
})