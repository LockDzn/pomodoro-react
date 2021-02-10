import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectTab } from '../../store/selectedTab/actions'
import { setActivated } from '../../store/activated/actions'

import Pomodorotimer from '../../components/PomodoroTimer'
import ShortBreakTimer from '../../components/ShortBreakTimer'
import LongBreakTimer from '../../components/LongBreakTimer'
import Tasks from '../../components/Tasks'

import { Content, Container, Header, Card, CardButton, Button } from './styles'

import { RootState } from '../../interfaces'

type TimerProps = {
  tab: number
  activated: boolean
}

const Timer: React.FC<TimerProps> = ({ tab }) => {
  if (tab === 0) {
    return <Pomodorotimer />
  } else if (tab === 1) {
    return <ShortBreakTimer />
  } else {
    return <LongBreakTimer />
  }
}

const Home: React.FC = () => {
  const selectedTab = useSelector((state: RootState) => state.selectedTab)
  const activated = useSelector((state: RootState) => state.activated)
  const dispatch = useDispatch()

  const click = new Audio('./sounds/click.mp3')

  const HandleClickStart = () => {
    if (activated) {
      dispatch(setActivated(false))
      click.play()
    } else {
      dispatch(setActivated(true))
      click.play()
    }
  }

  const handleSelectTab = (index: number) => {
    dispatch(selectTab(index))
    dispatch(setActivated(false))
  }

  return (
    <Content tab={selectedTab}>
      <Header>
        <h1>Pomodoro</h1>
      </Header>
      <Container>
        <Card>
          <div className="header">
            <CardButton
              onClick={() => handleSelectTab(0)}
              selected={selectedTab === 0}
            >
              Pomodoro
            </CardButton>
            <CardButton
              onClick={() => handleSelectTab(1)}
              selected={selectedTab === 1}
            >
              Short Break
            </CardButton>
            <CardButton
              onClick={() => handleSelectTab(2)}
              selected={selectedTab === 2}
            >
              Long Break
            </CardButton>
          </div>
          <div className="counter">
            <Timer tab={selectedTab} activated={activated} />
          </div>
          <Button
            tab={selectedTab}
            onClick={HandleClickStart}
            initiated={activated}
          >
            {activated ? 'STOP' : 'START'}
          </Button>
        </Card>
        <Tasks />
      </Container>
    </Content>
  )
}

export default Home
