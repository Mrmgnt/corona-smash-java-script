const orang = document.querySelectorAll('.orang');
const corona = document.querySelectorAll('.corona');
const papanSkor = document.querySelector('.papan-skor');



let orangSebelumnya;
let selesai;
let skor;

function randomOrang(orang) {
    const t  = Math.floor(Math.random () * orang.length)
    return tRandom = orang[t];
    if ( tRandom == orangSebelumnya) {
        randomOrang(orang);
        }

    orangSebelumnya = tRandom;
    return tRandom;
}

function  randomWaktu(min, max) {
    return Math.round(Math.random()* (max - min) + min);
}

function munculkanCorona() {
  const tRandom = randomOrang(orang);
  const wRandom = randomWaktu(300,1000);
  tRandom.classList.add('muncul');

  setTimeout(() => {
      tRandom.classList.remove('muncul');
      if (!selesai) {
          munculkanCorona();
      }
  }, wRandom);
}

function  mulai() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    munculkanCorona();
    setTimeout(() => {
    selesai = true;
    }, 10000);
}

function pukul() {
    skor++;
    papanSkor.textContent =  skor;
    this.parentNode.classList.remove('muncul');

}

corona.forEach(t => {
    t.addEventListener('click', pukul); 
        console.log(this);
    });
