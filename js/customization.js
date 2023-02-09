import { sound } from "./sound.js"

export function Costumize({
  ButtonCloud,
  ButtonFire,
  ButtonTree,
  ButtonMarket
}) {

  function TreeFunction() {
    buttonRemoveClasses(ButtonCloud, ButtonFire, ButtonMarket)
    ButtonTree.classList.toggle('press')
    ButtonTree.classList.toggle('ButtonPress')
    MakeMeColors(120)
    sound.forestSound.play()
    sound.stopSounds(sound.marketSound, sound.fireSound, sound.rainSound)
  }
  
  function CloudFunction() {
    buttonRemoveClasses(ButtonFire, ButtonTree, ButtonMarket)
    ButtonCloud.classList.toggle('press')
    ButtonCloud.classList.toggle('ButtonPress')
    MakeMeColors(190)
    sound.rainSound.play()
    sound.stopSounds(sound.forestSound, sound.fireSound, sound.marketSound)
  }
  
  function MarketFunction() {
    buttonRemoveClasses(ButtonCloud, ButtonTree, ButtonFire)
    ButtonMarket.classList.toggle('press')
    ButtonMarket.classList.toggle('ButtonPress')
    MakeMeColors(760)
    sound.marketSound.play()
    sound.stopSounds(sound.fireSound, sound.forestSound, sound.rainSound)
  }
  
  function FireFunction() {
    buttonRemoveClasses(ButtonCloud, ButtonTree, ButtonMarket)
    ButtonFire.classList.toggle('press')
    ButtonFire.classList.toggle('ButtonPress')
    MakeMeColors(720)
    sound.fireSound.play()
    sound.stopSounds(sound.marketSound, sound.forestSound, sound.rainSound)
  }
  
  const buttonRemoveClasses = (bTn1, bTn2, bTn3) => {
    bTn1.classList.remove('press', 'ButtonPress')
    bTn2.classList.remove('press', 'ButtonPress')
    bTn3.classList.remove('press', 'ButtonPress')
  }
  
  function MakeMeColors(color) {
    document.documentElement.style.setProperty('--bTn-press-color', color)
  }

  return {
    TreeFunction,
    FireFunction,
    MarketFunction,
    CloudFunction,
  }
}

