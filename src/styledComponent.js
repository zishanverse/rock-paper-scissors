import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`
export const ScoreContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 10px;
  width: 80vw;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 20vh;
`

export const Name = styled.p`
  color: ${props => (props.score ? '#223a5f' : '#fff')};
  font-family: ${props => (props.num ? 'Roboto' : 'Bree Serif')};
  font-weight: 500;
  font-size: ${props => (props.num ? '30px' : '20px')};
  margin: 0px;
  margin-bottom: ${props => (props.result ? '10px' : '0px')};
`
export const Head = styled.h1`
  font-family
`

export const ScoreCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const IconCard = styled.div`
  display: flex;
  justify-content: ${props => (props.result ? 'space-between' : 'center')};
  flex-wrap: ${props => (props.result ? 'nowrap' : 'wrap')};
  width: ${props => (props.result ? '50vw' : '50vw')};
`
export const Button = styled.button`
  border: 0px;
  background-color: #223a5f;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  height: 125px;
  width: 125px;
  margin-right: 60px;
  margin-bottom: 30px;
  border-radius: 100px;
`
export const YourChoiceImg = styled.img`
  height: 150px;
  margin: 0px;
  padding: 0px;
`
export const Rules = styled.button`
  background-color: #fff;
  color: #223a5f;
  border: 0px;
  border-radius: 7px;
  font-family: 'Bree Serif';
  font-size: 15px;
  align-self: flex-end;
  margin-top: auto;
  width: ${props => (props.playAgain ? '100px' : '70px')};
  height: ${props => (props.playAgain ? '40px' : '40px')};
`
export const PopupRule = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  width: 50vw;
`

export const CloseBtn = styled.button`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RuleImg = styled.img`
  width: 80%;
  margin-bottom: 20px;
`
