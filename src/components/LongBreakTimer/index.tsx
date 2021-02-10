import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectTab } from '../../store/selectedTab/actions'
import { setActivated } from '../../store/activated/actions'

import { RootState } from '../../interfaces'

const LongBreakTimer: React.FC = () => {
  const [minutes, setMinutes] = useState<number>(15)
  const [seconds, setSeconds] = useState<number>(0)

  const activated = useSelector((state: RootState) => state.activated)
  const dispatch = useDispatch()

  const alarm = new Audio('./sounds/alarm.mp3')

  const TimerMinutes = (minutes: number) => {
    if (minutes <= 0) {
      dispatch(setActivated(false))
      alarm.play()
      setTimeout(() => {
        dispatch(selectTab(1))
      }, 5000)
      return 5
    } else {
      return minutes - 1
    }
  }

  const TimerSeconds = (seconds: number) => {
    if (seconds <= 0) {
      setMinutes(minutes => TimerMinutes(minutes))
      return 59
    } else {
      return seconds - 1
    }
  }

  useEffect(() => {
    if (activated) {
      const sec = window.setInterval(() => {
        setSeconds(seconds => TimerSeconds(seconds))
      }, 1000)
      return () => window.clearInterval(sec)
    }
    return
  }, [activated])

  return (
    <>
      {minutes.toString().length <= 1 ? `0${minutes}` : minutes}:
      {seconds.toString().length <= 1 ? `0${seconds}` : seconds}
    </>
  )
}

export default LongBreakTimer
