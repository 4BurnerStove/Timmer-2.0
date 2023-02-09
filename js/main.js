import { timmer } from './timmer.js'
import { Costumize } from './customization.js'
import { Buttons } from './buttons.js'

const { 
  ButtonCloud,
  ButtonFire,
  ButtonTree,
  ButtonMarket,
  ButtonMoreMinutes,
  ButtonLessMinutes,
  ButtonStop,
  ButtonPlay,
  ButtonResume,
  minutesDisplay,
  secondsDisplay 
} = Buttons

const CostumizeFunctions = Costumize({
  ButtonCloud,
  ButtonFire,
  ButtonTree,
  ButtonMarket
})


const TimerFunctions = timmer({
  minutesDisplay,
  secondsDisplay,
  buttonStopFunction
})

ButtonTree.addEventListener('click', CostumizeFunctions.TreeFunction)
ButtonCloud.addEventListener('click', CostumizeFunctions.CloudFunction)
ButtonMarket.addEventListener('click', CostumizeFunctions.MarketFunction)
ButtonFire.addEventListener('click', CostumizeFunctions.FireFunction)
ButtonPlay.addEventListener('click', PlayButton)
ButtonResume.addEventListener('click', ResumeButton)
ButtonStop.addEventListener('click', buttonStopFunction)
ButtonMoreMinutes.addEventListener('click', TimerFunctions.MoreTime)
ButtonLessMinutes.addEventListener('click', TimerFunctions.LessTime)

// Events

function buttonStopFunction() {
  TimerFunctions.resetTimer()
  ButtonPlay.classList.remove('hide')
  ButtonResume.classList.add('hide')
}

function ResetButton() {
  ButtonResume.classList.toggle('hide')
  ButtonPlay.classList.toggle('hide')
}

function ResumeButton() {
  TimerFunctions.hold()
  ResetButton()
}

function PlayButton() {
  ResetButton()
  TimerFunctions.countDown()
}



