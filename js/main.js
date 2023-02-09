import { sound } from "./sound.js"

const ButtonMoreMinutes = document.querySelector('.ButtonMoreMinutes')
const ButtonLessMinutes = document.querySelector('.ButtonLessMinutes')

const ButtonStop = document.querySelector('.stop')
const ButtonResume = document.querySelector('.resume')
const ButtonPlay = document.querySelector('.play')

const ButtonTree = document.querySelector('#tree')
const ButtonCloud = document.querySelector('#cloud')
const ButtonMarket = document.querySelector('#market')
const ButtonFire = document.querySelector('#fire')

const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')

let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)
let newMinutes = 25
let TimerTimeOut

ButtonTree.addEventListener('click', TreeFunction)
ButtonCloud.addEventListener('click', CloudFunction)
ButtonMarket.addEventListener('click', MarketFunction)
ButtonFire.addEventListener('click', FireFunction)
ButtonPlay.addEventListener('click', PlayButton)
ButtonResume.addEventListener('click', ResumeButton)
ButtonStop.addEventListener('click', buttonStopFunction)
ButtonMoreMinutes.addEventListener('click', MoreTime)
ButtonLessMinutes.addEventListener('click', LessTime)


function resetTimer() {
  minutes = newMinutes
  seconds = 0
  updateTimerDisplay(minutes, seconds)
  clearTimeout(TimerTimeOut)
}

function countDown() {
  TimerTimeOut = setTimeout(function () {
    minutes = Number(minutesDisplay.textContent)
    seconds = Number(secondsDisplay.textContent)

    if (minutes <= 0 && seconds <= 0) {
      buttonStopFunction()
      updateTimerDisplay(minutes, seconds)
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(--seconds))

    countDown()
  }, 1000)
}

function MoreTime() {
  minutes = minutes + 5
  updateTimerDisplay(minutes, seconds)
}

function LessTime() {
  if (minutes <= 4) {
    return
  }
  minutes = minutes - 5
  updateTimerDisplay(minutes, seconds)
}

function buttonStopFunction() {
  resetTimer()
  ButtonPlay.classList.remove('hide')
  ButtonResume.classList.add('hide')
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function ResetButton() {
  ButtonResume.classList.toggle('hide')
  ButtonPlay.classList.toggle('hide')
}

function ResumeButton() {
  clearTimeout(TimerTimeOut)
  ResetButton()
}

function PlayButton() {
  ResetButton()
  countDown()
}

function TreeFunction() {
  buttonRemoveClasses(ButtonCloud, ButtonFire, ButtonMarket)
  ButtonTree.classList.toggle('press')
  ButtonTree.classList.toggle('ButtonPress')
  ChangeColors(120)
  sound.forestSound.play()
  sound.stopSounds(sound.marketSound, sound.fireSound, sound.rainSound)
}

function CloudFunction() {
  buttonRemoveClasses(ButtonFire, ButtonTree, ButtonMarket)
  ButtonCloud.classList.toggle('press')
  ButtonCloud.classList.toggle('ButtonPress')
  ChangeColors(190)
  sound.rainSound.play()
  sound.stopSounds(sound.forestSound, sound.fireSound, sound.marketSound)
}

function MarketFunction() {
  buttonRemoveClasses(ButtonCloud, ButtonTree, ButtonFire)
  ButtonMarket.classList.toggle('press')
  ButtonMarket.classList.toggle('ButtonPress')
  ChangeColors(760)
  sound.marketSound.play()
  sound.stopSounds(sound.fireSound, sound.forestSound, sound.rainSound)
}

function FireFunction() {
  buttonRemoveClasses(ButtonCloud, ButtonTree, ButtonMarket)
  ButtonFire.classList.toggle('press')
  ButtonFire.classList.toggle('ButtonPress')
  ChangeColors(720)
  sound.fireSound.play()
  sound.stopSounds(sound.marketSound, sound.forestSound, sound.rainSound)
}

const buttonRemoveClasses = (bt1, bt2, bt3) => {
  bt1.classList.remove('press', 'ButtonPress')
  bt2.classList.remove('press', 'ButtonPress')
  bt3.classList.remove('press', 'ButtonPress')
}

function ChangeColors(color) {
  document.documentElement.style.setProperty('--bTn-press-color', color)
}
