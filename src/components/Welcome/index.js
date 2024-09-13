import './index.css'

const Welcome = props => {
  const {greeting, name} = props

  return (
    <h1 className="message">
      {greeting}, {name}
    </h1>
  )
}

Welcome.defaultProps = {
  greeting: 'Hi',
  name: 'Alexander',
}

export default Welcome
