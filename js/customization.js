import { sound } from './sound.js'

export function Costumize({
  ButtonCloud,
  ButtonFire,
  ButtonTree,
  ButtonMarket,
  BodyClass
}) {
  function ResetColor() {
    BodyClass.classList.add('whiteProperty')
    buttonRemoveClasses(ButtonCloud, ButtonTree, ButtonMarket, ButtonFire)
    sound.stopSounds(
      sound.marketSound,
      sound.fireSound,
      sound.rainSound,
      sound.forestSound
    )
  }

  function TreeFunction() {
    buttonRemoveClasses(ButtonCloud, ButtonFire, ButtonMarket, ButtonCloud)
    ButtonTree.classList.toggle('press')
    ButtonTree.classList.toggle('ButtonPress')
    BodyClass.classList.remove('whiteProperty')
    MakeMeColors(120)
    sound.forestSound.play()
    sound.stopSounds(sound.marketSound, sound.fireSound, sound.rainSound, sound.fireSound)
  }

  function CloudFunction() {
    buttonRemoveClasses(ButtonFire, ButtonTree, ButtonMarket, ButtonMarket)
    ButtonCloud.classList.toggle('press')
    ButtonCloud.classList.toggle('ButtonPress')
    BodyClass.classList.remove('whiteProperty')
    MakeMeColors(190)
    sound.rainSound.play()
    sound.stopSounds(sound.forestSound, sound.fireSound, sound.marketSound, sound.fireSound)
  }

  function MarketFunction() {
    buttonRemoveClasses(ButtonCloud, ButtonTree, ButtonFire, ButtonCloud)
    ButtonMarket.classList.toggle('press')
    ButtonMarket.classList.toggle('ButtonPress')
    BodyClass.classList.remove('whiteProperty')
    MakeMeColors(760)
    sound.marketSound.play()
    sound.stopSounds(sound.fireSound, sound.forestSound, sound.rainSound, sound.fireSound)
  }

  function FireFunction() {
    buttonRemoveClasses(ButtonCloud, ButtonTree, ButtonMarket, ButtonCloud)
    ButtonFire.classList.toggle('press')
    ButtonFire.classList.toggle('ButtonPress')
    BodyClass.classList.remove('whiteProperty')
    MakeMeColors(720)
    sound.fireSound.play()
    sound.stopSounds(sound.marketSound, sound.forestSound, sound.rainSound, sound.marketSound)
  }

  const buttonRemoveClasses = (bTn1, bTn2, bTn3, bTn4) => {
    bTn1.classList.remove('press', 'ButtonPress')
    bTn2.classList.remove('press', 'ButtonPress')
    bTn3.classList.remove('press', 'ButtonPress')
    bTn4.classList.remove('press', 'ButtonPress')
  }

  function MakeMeColors(color) {
    document.documentElement.style.setProperty('--bTn-press-color', color)
  }

  return {
    TreeFunction,
    FireFunction,
    MarketFunction,
    CloudFunction,
    ResetColor
  }
}
