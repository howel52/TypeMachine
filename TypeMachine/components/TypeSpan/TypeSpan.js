import React from 'react'
import PropTypes from 'prop-types'

class TypeSpan extends React.Component {
  constructor (props) {
    super (props)
    this.string = this.props.string
    this.speed = this.props.speed
    this.state = {
      string: ''
    }
  }

  rnd = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  sleep = async (time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, time);
    })
  }

  isEmoji = () => {
    const index = this.state.string.length
    if (index > this.string.length - 2) return false
    const isEmojiStr =  this.string[index] + this.string[index + 1]
    const re = /[\uD800-\uDBFF][\uDC00-\uDFFF]/
    return re.test(isEmojiStr)
  }

  goAhead = async () => {
    await this.sleep(this.rnd(this.speed / 3, this.speed / 10 * 13))
    const rowString = this.string
    const { string } = this.state
    if (rowString.length <= string.length ) {
      this.props.onFinish()
      return
    }
    this.setState({
      string: !this.isEmoji() ? string + rowString[string.length] : string + rowString[string.length] + rowString[string.length + 1]
    }, this.goAhead)
  }

  startTypeing = () => {
    this.goAhead()
  }

  componentDidMount () {
    if (this.props.visible)
      this.startTypeing()
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.visible !== nextProps.visible && nextProps.visible) {
      this.startTypeing()
    }
  }

  render () {
    const output = this.state.string === '' ? <br /> : <span style={{ color: this.props.color }}>{this.state.string}</span>
    return output
  }
}

TypeSpan.propTypes = {
  string: PropTypes.string.isRequired,
  speed: PropTypes.number,
  onFinish: PropTypes.func,
  visible: PropTypes.bool,
  color: PropTypes.string
}

TypeSpan.defaultProps = {
  speed: 125,
  visible: true,
  color: 'black',
  onFinish: () => {}
}

export default TypeSpan
