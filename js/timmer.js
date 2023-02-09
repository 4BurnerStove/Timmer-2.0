import { sound } from "./sound.js"

export function timmer({
  minutesDisplay,
  secondsDisplay,
  buttonStopFunction,
}) {

  let TimerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)
  let newMinutes = 25
  
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
        sound.bellSound.play()
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
  
  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }
  
  function hold() {
    clearTimeout(TimerTimeOut)
  }

  return {
    LessTime,
    MoreTime,
    countDown,
    resetTimer,
    hold
  }
}

