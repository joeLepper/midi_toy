window.addEventListener('load', function (e) {
  var amenSource = document.querySelector('.amen-source')
    , audioCtx = new AudioContext()
    , amenBreak = audioCtx.createMediaElementSource(amenSource)
    , gainNode = audioCtx.createGain()
    , amenLength = amenSource.seekable.end(0)
    , xGif = document.querySelector('x-gif')

  amenBreak.connect(gainNode)
  gainNode.connect(audioCtx.destination)

  var es = new EventSource('/sse')
  es.addEventListener('message', function (evt) {
    // console.log(evt)
    var e = JSON.parse(evt.data)
    console.log(e)

    if (e[0] === 176 && e[1] === 7) {
      xGif.dispatchEvent(new CustomEvent('x-gif-index-change', { detail: { index: (e[2] / 127)} }))
    }

    if (e[0] === 144 && e[1] === 48) {
      amenSource.currentTime = (amenLength * 0.1)
      xGif.dispatchEvent(new CustomEvent('x-gif-index-change', { detail: { index: 0 } }))
    }
    if (e[0] === 144 && e[1] === 49) {
      amenSource.currentTime = (amenLength * 0.15)
      xGif.dispatchEvent(new CustomEvent('x-gif-index-change', { detail: { index: 0.1 } }))
    }
    if (e[0] === 144 && e[1] === 50) {
      amenSource.currentTime = (amenLength * 0.2)
      xGif.dispatchEvent(new CustomEvent('x-gif-index-change', { detail: { index: 0.2} }))
    }
    if (e[0] === 144 && e[1] === 51) {
      amenSource.currentTime = (amenLength * 0.25)
      xGif.dispatchEvent(new CustomEvent('x-gif-index-change', { detail: { index: 0.25} }))
    }
    if (e[0] === 144 && e[1] === 52) {
      amenSource.currentTime = (amenLength * 0.3)
      xGif.dispatchEvent(new CustomEvent('x-gif-index-change', { detail: { index: 0.3} }))
    }
    if (e[0] === 144 && e[1] === 53) {
      amenSource.currentTime = (amenLength * 0.4)
      xGif.dispatchEvent(new CustomEvent('x-gif-index-change', { detail: { index: 0.4} }))
    }
    if (e[0] === 144 && e[1] === 54) {
      amenSource.currentTime = (amenLength * 0.45)
      xGif.dispatchEvent(new CustomEvent('x-gif-index-change', { detail: { index: 0.45} }))
    }
    if (e[0] === 144 && e[1] === 55) {
      amenSource.currentTime = (amenLength * 0.5)
      xGif.dispatchEvent(new CustomEvent('x-gif-index-change', { detail: { index: 0.5} }))
    }
    if (e[0] === 144 && e[1] === 56) {
      amenSource.currentTime = (amenLength * 0.55)
      xGif.dispatchEvent(new CustomEvent('x-gif-index-change', { detail: { index: 0.55} }))
    }
    if (e[0] === 144 && e[1] === 57) {
      amenSource.currentTime = (amenLength * 0.6)
      xGif.dispatchEvent(new CustomEvent('x-gif-index-change', { detail: { index: 0.6} }))
    }
    if (e[0] === 144 && e[1] === 58) {
      amenSource.currentTime = (amenLength * 0.7)
      xGif.dispatchEvent(new CustomEvent('x-gif-index-change', { detail: { index: 0.7} }))
    }
    if (e[0] === 144 && e[1] === 59) {
      amenSource.currentTime = (amenLength * 0.75)
      xGif.dispatchEvent(new CustomEvent('x-gif-index-change', { detail: { index: 0.75} }))
    }
    if (e[0] === 144 && e[1] === 60) {
      amenSource.currentTime = (amenLength * 0.8)
      xGif.dispatchEvent(new CustomEvent('x-gif-index-change', { detail: { index: 0.8} }))
    }
    if (e[0] === 144 && e[1] === 61) {
      amenSource.currentTime = (amenLength * 0.85)
      xGif.dispatchEvent(new CustomEvent('x-gif-index-change', { detail: { index: 0.85} }))
    }
    if (e[0] === 144 && e[1] === 62) {
      amenSource.currentTime = (amenLength * 0.9)
      xGif.dispatchEvent(new CustomEvent('x-gif-index-change', { detail: { index: 0.9} }))
    }
    if (e[0] === 144 && e[1] === 63) {
      amenSource.currentTime = (amenLength * 0.95)
      xGif.dispatchEvent(new CustomEvent('x-gif-index-change', { detail: { index: 0.95} }))
    }
    if (e[0] === 144 && e[1] === 64) {
      amenSource.currentTime = (amenLength * 0.99)
      xGif.dispatchEvent(new CustomEvent('x-gif-index-change', { detail: { index: 0.99} }))
    }
  })

  amenSource.play()
})


// var status = { value: e[0]}
// switch (e[0]) {
//   case 128:
//     status.type = 'note off'
//     break
//   case 144:
//     status.type = 'note on'
//     break
//   case 176:
//     status.type = 'control'
//     break
//   default:
//     status.type = 'unknown'
//     break
// }
