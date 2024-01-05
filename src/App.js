import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import GameView from './GameView'

import {
  MainContainer,
  Name,
  Head,
  ScoreCard,
  ScoreContainer,
  IconCard,
  YourChoiceImg,
  Rules,
  PopupRule,
  CloseBtn,
  RuleImg,
} from './styledComponent'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    resultText: '',
    resultView: false,
    opponentId: '',
    you: '',
  }

  checkResult = id => {
    const random = Math.floor(Math.random() * 3)
    console.log(random)
    console.log(choicesList[(random + 1) % 3])
    const opponent = choicesList[random].id
    this.setState({resultView: true, opponentId: opponent, you: id})
    if (id === opponent) {
      this.setState({resultText: 'IT IS DRAW'})
    } else if (choicesList[(random + 1) % 3].id === id) {
      this.setState(pre => ({resultText: 'YOU LOSE', score: pre.score - 1}))
    } else {
      this.setState(pre => ({resultText: 'YOU WON', score: pre.score + 1}))
    }
  }

  playAgain = () => this.setState({resultView: false})

  result = () => {
    const {you, opponentId, resultText} = this.state
    const youObj = choicesList.filter(each => each.id === you)
    const opponentObj = choicesList.filter(each => each.id === opponentId)

    return (
      <>
        <IconCard result>
          <div className="flex-center">
            <Name result num>
              YOU
            </Name>
            <YourChoiceImg src={youObj[0].imageUrl} alt="your choice" />
          </div>

          <div className="flex-center">
            <Name result num>
              OPPONENT
            </Name>
            <YourChoiceImg
              src={opponentObj[0].imageUrl}
              alt="opponent choice"
            />
          </div>
        </IconCard>
        <div className="flex-center">
          <Name result>{resultText}</Name>
          <Rules playAgain type="button" onClick={() => this.playAgain()}>
            Play Again
          </Rules>
        </div>
      </>
    )
  }

  render() {
    const {score, resultView} = this.state
    return (
      <MainContainer>
        <ScoreContainer>
          <Name as="h1">Rock Paper Scissors</Name>

          <ScoreCard>
            <Name score>Score</Name>
            <Name score num>
              {score}
            </Name>
          </ScoreCard>
        </ScoreContainer>
        {resultView ? (
          this.result()
        ) : (
          <GameView list={choicesList} func={this.checkResult} />
        )}

        <Popup className="pop" modal trigger={<Rules>RULES</Rules>}>
          {close => (
            <PopupRule>
              <CloseBtn type="button" onClick={() => close()}>
                <RiCloseLine />
              </CloseBtn>
              <RuleImg
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupRule>
          )}
        </Popup>
      </MainContainer>
    )
  }
}

export default App
