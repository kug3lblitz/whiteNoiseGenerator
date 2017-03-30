var ctx = new AudioContext(),
    bufferSize = 8192,
    whiteNoise = ctx.createScriptProcessor(bufferSize, 1, 1),
    noiseOn;

whiteNoise.onaudioprocess = function(e) {
  var output = e.outputBuffer.getChannelData(0);
  for (var i=0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }
}

$('a').on('click', function(){
    if (!noiseOn){
      whiteNoise.connect(ctx.destination);
      noiseOn = true;
    } else {
      whiteNoise.disconnect(ctx.destination);
      noiseOn = false;
    }
  $(this).toggleClass('stop');
});
