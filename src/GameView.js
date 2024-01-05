import {Button, IconCard, YourChoiceImg} from './styledComponent'

const GameView = props => {
  const {list, func} = props

  return (
    <IconCard>
      {list.map(each => (
        <Button
          data-testid={`${each.id.toLowerCase()}Button`}
          onClick={() => func(each.id)}
          key={each.id}
        >
          <YourChoiceImg src={each.imageUrl} alt={each.id} />
        </Button>
      ))}
    </IconCard>
  )
}

export default GameView
