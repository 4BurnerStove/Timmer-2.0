export const sound = {
  rainSound: new Audio('./sounds/cafeteria.wav'),
  forestSound: new Audio('./sounds/Floresta.wav'),
  marketSound: new Audio('./sounds/Cafeteria.wav'),
  fireSound: new Audio('./sounds/Lareira.wav'),

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