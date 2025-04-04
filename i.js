let gameseq=[]
let userseq=[]

let btns=["pink","blue","orange","light-blue"]

let started = false
let level = 0

let h2=document.querySelector('h2')
let allbtns=document.querySelectorAll('.btn')
for(btnn of allbtns){
    btnn.addEventListener("click",btnpress)
}

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game has started")
        started = true

        levelup()
    }
})

function btnflash(btn) {
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },300)
}
function btnflashh(btn) {
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash")
    },300)
}


function levelup(){
    userseq=[]
    level++
    h2.innerText=`level ${level}` 

    //random button
    let randomindex=Math.floor(Math.random()*4)
    let randomcolor = btns[randomindex]
    let randombtn=document.querySelector(`.${randomcolor}`)
    gameseq.push(randomcolor)
    console.log(gameseq)
    btnflash(randombtn)
}

function btnpress(){
    let btn=this
    btnflashh(btn)
    usedcolor = btn.getAttribute("id")
    userseq.push(usedcolor)
    console.log(userseq)
    checkans(userseq.length-1)
}

function checkans(idx){
    // let idx = level-1
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup, 500)
        }
    }else{
        h2.innerText="Game over!!!"
    }
}

