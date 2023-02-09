export const sound = {
  rainSound: new Audio('./sounds/cafeteria.wav'),
  forestSound: new Audio('./sounds/Floresta.wav'),
  marketSound: new Audio('./sounds/Cafeteria.wav'),
  fireSound: new Audio('./sounds/Lareira.wav'),
  bellSound: new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'),

  stopSounds(snd1, snd2, snd3) {
    snd1.pause()
    snd2.pause()
    snd3.pause()
  }
}

sound.rainSound.loop = true
sound.marketSound.loop = true
sound.fireSound.loop = true
sound.forestSound.loop = true