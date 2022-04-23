// Selectors
let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let result = document.querySelector('.result')
let refresh = document.querySelector('.refresh')

// Event
refresh.addEventListener('click', ()=>{
    let random1 = Math.floor(Math.random() *6 + 1) 
    let random2 = Math.floor(Math.random() *6 + 1)   
    img1.src = `images/dice${random1}.png`
    img2.src = `images/dice${random2}.png`
    if(random1 > random2){
        result.textContent = 'Player1 win!!!'
    }else if(random1 < random2){
        result.textContent = 'Player2 win!!!'
    }else if(random1 == random2){
        result.textContent = 'Draw!!!'
    }
})