import React from 'react'
import PropTypes from 'prop-types'
import TypeLine from './components/TypeLine'
class TypeMachine extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      switcher: this.props.texts.map(() => false)
    }
  }

  componentDidMount () {
    this.next()
  }

  next = () => {
    const switcher = this.state.switcher
    const nextIndex = switcher.findIndex((v) => !v)
    if (nextIndex === -1) return
    switcher[nextIndex] = true
    this.setState({
      switcher
    })
  }

  render() {
    const { texts, speed } = this.props
    const { switcher } = this.state
    return (
      <div>
        {
          texts.map((text, index) => {
            const visible = switcher[index]
            return (
              <TypeLine
                key={index}
                text={text}
                visible={visible}
                speed={speed}
                onFinish={() => { this.next() }}
                defaultColor={this.props.defaultColor}
              />
            )
          })
        }
      </div>
    )
  }
}

TypeMachine.propTypes = {
  texts: PropTypes.array.isRequired,
  speed: PropTypes.number,
  defaultColor: PropTypes.string
}

TypeMachine.defaultProps = {
  speed: 125
}

export default TypeMachine
