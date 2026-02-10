console.log('hey')

//////////Genre Selection////////////////////
const genreBtn = document.querySelector('#genre')
const rapBtn = document.querySelector('#rap')
const rnbBtn = document.querySelector('#rnb')
const neoBtn = document.querySelector('#neo-soul')
const soulBtn = document.querySelector('#soul')

/////////////Artist Selection/////////////
//R&B//
const brentIMG = document.querySelector('#brent')
    brentIMG.addEventListener('click',()=> {
        disk.style.backgroundImage = `url('https://i1.sndcdn.com/artworks-rFFHtzmIheyg6xh3-lf204w-t500x500.jpg')`
        setMusic(1)
})

const leonIMG = document.querySelector('#leon')
    leon.addEventListener('click',()=> {
        disk.style.backgroundImage = `url('https://s.mxmcdn.net/images-storage/albums5/7/3/2/7/4/9/40947237_350_350.jpg')`
        setMusic(0)

})
//Neo-Soul//
const goapeleIMG = document.querySelector('#goapele')
    goapele.addEventListener('click',()=> {
        disk.style.backgroundImage = `url('https://i.pinimg.com/736x/b8/3a/f2/b83af20ec10090624286b7810f091ed8.jpg')`
        setMusic(2)
})
const laurynIMG = document.querySelector('#lauryn')
    lauryn.addEventListener('click',()=> {
        disk.style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/en/f/f4/LaurynHill-Unplugged2.0.jpg')`
        setMusic(3)
})
//Soul//
const temsIMG = document.querySelector('#tems')
    tems.addEventListener('click',()=> {
        disk.style.backgroundImage = `url('https://mg.co.za/wp-content/uploads/2024/07/Tems-insta.jpg')`
        setMusic(4)
})
const samIMG = document.querySelector('#sam')
    sam.addEventListener('click',()=> {
        disk.style.backgroundImage = `url('https://m.media-amazon.com/images/I/71Raptv+WJL._UF1000,1000_QL80_.jpg')`
        setMusic(5)
})
const gypIMG = document.querySelector('#gyptian')
    gyptian.addEventListener('click',()=> {
        disk.style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/en/2/2c/HoldYousingle.jpg')`
        setMusic(6)
})
const vybzIMG = document.querySelector('#vybz')
    vybz.addEventListener('click',()=> {
        disk.style.backgroundImage = `url('https://i1.sndcdn.com/artworks-000014843560-1vviuz-t240x240.jpg')`
        setMusic(7)
})

////Genre Functions////
const allGen = ()=> {
    brentIMG.classList.remove('hidden')
    leonIMG.classList.remove('hidden')
    goapeleIMG.classList.remove('hidden')
    laurynIMG.classList.remove('hidden')
    temsIMG.classList.remove('hidden')
    samIMG.classList.remove('hidden')
}
//------------------------------------------//
const neoGen = () => {
    brentIMG.classList.add('hidden')
    leonIMG.classList.add('hidden')
    temsIMG.classList.add('hidden')
    samIMG.classList.add('hidden')
    gypIMG.classList.add('hidden')
    vybzIMG.classList.add('hidden')
/////////////STAY///////////////////////
    goapeleIMG.classList.remove('hidden')
    laurynIMG.classList.remove('hidden')
}
//--------------------------------------------//
const rnbGen = () => {
    goapeleIMG.classList.add('hidden')
    laurynIMG.classList.add('hidden')
    temsIMG.classList.add('hidden')
    samIMG.classList.add('hidden')
    gypIMG.classList.add('hidden')
    vybzIMG.classList.add('hidden')
/////////STAY//////////////////////////
    brentIMG.classList.remove('hidden')
    leonIMG.classList.remove('hidden')
}
//-----------------------------------------//
const soulGen = () => {
    goapeleIMG.classList.add('hidden')
    laurynIMG.classList.add('hidden')
    brentIMG.classList.add('hidden')
    leonIMG.classList.add('hidden')
    gypIMG.classList.add('hidden')
    vybzIMG.classList.add('hidden')
/////////STAY///////////////////////////
    temsIMG.classList.remove('hidden')
    samIMG.classList.remove('hidden')
}
const rapGen = () => {
    goapeleIMG.classList.add('hidden')
    laurynIMG.classList.add('hidden')
    brentIMG.classList.add('hidden')
    leonIMG.classList.add('hidden')
    temsIMG.classList.add('hidden')
    samIMG.classList.add('hidden')
/////////STAY///////////////////////////
    gypIMG.classList.remove('hidden')
    vybzIMG.classList.remove('hidden')
}
//EventListeners//
genreBtn.addEventListener('click', allGen)
rnbBtn.addEventListener('click',rnbGen)
neoBtn.addEventListener('click',neoGen)
soulBtn.addEventListener('click',soulGen)
rapBtn.addEventListener('click', rapGen)

///MUSIC STUFF//
const music = document.querySelector('#audio')
const seekBar = document.querySelector('.seek-bar')
const disk = document.querySelector('.disk')
const currentTime = document.querySelector('.current-time')
const musicDuration = document.querySelector('.song-duration')
const playBtn = document.querySelector('.play-btn')

playBtn.addEventListener('click', () =>{
    playBtn.classList.toggle('pause')
    if(playBtn.className.includes('pause')){
        music.pause();
    }else{
        music.play()
    }
})
const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    music.src = song.path;

    currentTime.innerHTML = '00:00'
    setTimeout(() =>{
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration)
    }, 300)
}
function formatTime(time) {
  let min = Math.floor(time/ 60)
  if(min < 10){
    min = `0${min}`
  }
  let sec = Math.floor(time % 60)
  if(sec < 10){
    sec = `0${sec}`
  }
  return `${min} : ${sec}`
}

setInterval(() => {
    seekBar.value = music.currentTime
    currentTime.innerHTML = formatTime(music.currentTime)
}, 500)

seekBar.addEventListener('change', () =>{
    music.currentTime = seekBar.value
})