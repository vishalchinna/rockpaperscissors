import {Component} from 'react'
import RulesPage from './Component/RulesPage'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    test: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    test: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    test: 'paperButton',
  },
]

class App extends Component {
  state = {score: 0, options: [], resultStatus: true, result: ''}

  renderScoreTitle = () => {
    const {score} = this.state
    return (
      <>
        <h1>Rock Paper Scissors</h1>
        <div className="score-box">
          <p className="score">Score</p>
          <p className="scores">{score}</p>
        </div>
      </>
    )
  }

  gameResult = id => {
    const randomNumber = Math.floor(Math.random() * 3)
    const opt1 = choicesList.filter(each => each.id === id)
    const opt2 = choicesList[randomNumber]
    this.setState({options: [opt1[0], opt2]})
    this.setState(prev => ({
      resultStatus: !prev.resultStatus,
    }))
    const player1 = opt1[0]
    const player2 = opt2
    if (player1.id === player2.id) {
      this.setState({result: 'IT IS DRAW'})
    } else if (
      (player1.id === 'ROCK' && player2.id === 'SCISSORS') ||
      (player1.id === 'SCISSORS' && player2.id === 'PAPER') ||
      (player1.id === 'PAPER' && player2.id === 'ROCK')
    ) {
      this.setState({result: 'YOU WON'})
      this.setState(prev => ({score: prev.score + 1}))
    } else {
      this.setState({result: 'YOU LOSE'})
      this.setState(prev => ({score: prev.score - 1}))
    }
  }

  renderGameOptions = () => (
    <>
      {choicesList.map(each => (
        <div className="" key={each.id}>
          <button
            type="button"
            onClick={() => this.gameResult(each.id)}
            data-testid={each.test}
            className="pic-button"
          >
            <img src={each.imageUrl} alt={each.id} className="pic" />
          </button>
        </div>
      ))}
    </>
  )

  restartGame = () => {
    this.setState(prev => ({resultStatus: !prev.resultStatus}))
  }

  render() {
    const {resultStatus, options, result} = this.state
    return (
      <div className="bg-container">
        <div className="score-container">{this.renderScoreTitle()}</div>
        {resultStatus ? (
          <div className="option-container">{this.renderGameOptions()}</div>
        ) : (
          <div className="">
            <div className="result-container">
              <div className="result-view-container">
                <div className="result-box">
                  <h1>YOU</h1>
                  <img
                    src={options[0].imageUrl}
                    alt="your choice"
                    className="pics"
                  />
                </div>
                <div className="result-box">
                  <h1>OPPONENT </h1>
                  <img
                    src={options[1].imageUrl}
                    alt="opponent choice"
                    className="pics"
                  />
                </div>
              </div>
              <p>{result}</p>
              <button type="button" onClick={this.restartGame} className="btn">
                PLAY AGAIN
              </button>
            </div>
          </div>
        )}

        <div className="btn-container">
          <RulesPage />
        </div>
      </div>
    )
  }
}

export default App
