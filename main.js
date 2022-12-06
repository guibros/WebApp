const container = document.querySelector('.container')
const sizeInput = document.querySelector('.size')
const color = document.querySelector('.color')
const resetBtn = document.querySelector('.btn')
const buttonColor = document.querySelector('#btnColor')
const colorContainer = document.querySelector('.colorContainer')
// const buttonPatate = document.querySelector('.btnpatate')

let size = sizeInput.value
let colorArray = []
let draw = false


function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}
function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}
function randomHexColor() {
    let [r,g,b] =randomRgbColor();
     
    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');
     
    return "#" + hr + hg + hb;
}

function colorChoices() {
        const div = document.createElement('div')
        div.classList.add('colorBloc')
        div.style.backgroundColor = color.value
        colorArray.push(color.value);
        colorContainer.appendChild(div)
    }
    
function blockGrid(size) {
  container.style.setProperty('--size', size)
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div')
    div.classList.add('bloc')
    div.addEventListener('mouseover', function(){
        if (window.matchMedia("(max-width: 700px)").matches){
            col = randomHexColor()
            if (colorArray.length > 0){
                col = colorArray[Math.floor(Math.random()*colorArray.length)];
                }
            div.style.backgroundColor = col 
            }
        else{
            if(!draw) return
            col = randomHexColor()
            if (colorArray.length > 0) {
                col = colorArray[Math.floor(Math.random()*colorArray.length)];
                }
            div.style.backgroundColor = col      
            }
        })
    div.addEventListener('mousedown', function(){
        col = randomHexColor()
        if (colorArray.length > 0 ) {
            col = colorArray[Math.floor(Math.random()*colorArray.length)];
        }
        div.style.backgroundColor = col
    })
    container.appendChild(div)
  }
}


window.addEventListener("mousedown", function(){
    draw = true
})
window.addEventListener("mouseup", function(){
    draw = false
})


function reset(){
    container.innerHTML = ''
    colorContainer.innerHTML = ''
    colorArray = []
    blockGrid(size)
}

resetBtn.addEventListener('click', reset)

sizeInput.addEventListener('keyup', function(){
    size = sizeInput.value
    reset()
})

blockGrid(size)
