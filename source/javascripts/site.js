// This is where it all goes :)

function fps (val) {
  return Math.round(1000 / val)
}

window.onload = setInterval(function () {
  window.requestAnimationFrame(function () {
    document.querySelector('.scene-layer-back').style.transform = 'translateY(' + Math.round(window.scrollY / 4) + 'px)'
    document.querySelector('.scene-layer-front').style.transform = 'translateY(-' + Math.round(window.scrollY / 3) + 'px)'
  })
}, fps(120))

const amplitude = require('amplitude-js')
amplitude.getInstance().init("8f12601488b8f200803346461de509db")