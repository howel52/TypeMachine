import React from 'react'
import TypeSpan from './../TypeSpan'
import PropTypes from 'prop-types'

class TypeLine extends React.Component {
  constructor (props) {
    super(props)
    this.text = this.props.text
    this.state = {
      switcher: this.text.map(() => false)
    }
  }

  componentDidMount () {
    if (this.props.visible)
      this.next()
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.visible !== nextProps.visible && nextProps.visible)
      this.next()
  }

  next = () => {
    const switcher = this.state.switcher
    const nextIndex = switcher.findIndex((v) => !v)
    if (nextIndex === -1) {
      this.props.onFinish()
      return
    }
    switcher[nextIndex] = true
    this.setState({
      switcher
    })
  }

  render () {

    const { text } = this.props
    const { switcher } = this.state

    return (
      <div>
        {
          text.map((item, index) => {
            const visible = switcher[index]
            return (
              <TypeSpan
                key={index}
                string={item.string}
                color={item.color || this.props.defaultColor}
                speed={this.props.speed}
                visible={visible}
                onFinish={() => { this.next() }}
              />
            )
          })
        }
      </div>

    )
  }
}

TypeLine.propTypes = {
  text: PropTypes.array
}

TypeLine.defaultProps = {
  text: []
}


export default TypeLine
