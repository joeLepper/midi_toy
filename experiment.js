var GIFDecoder = require('gif-stream/decoder')
var concat = require('concat-frames')
var hyperquest = require('hyperquest')

console.log('experimenting')

window.addEventListener('load', function (e) {
  // decode a GIF file to RGB pixels
  hyperquest.get('http://i.imgur.com/Q8edVjP.gif', { headers: { authorization: 'Client-Id f70786fde3e7b4e' }})
    .pipe(new GIFDecoder)
    .pipe(concat(function(frames) {
      console.log(frames)
    }))
})
