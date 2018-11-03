import React from 'react'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(event) {
    this.setState({ name: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault()
    const name = event.target.elements[0].value
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" onChange={this.onChange} value={this.state.value} />
        <button>SUBMIT</button>
      </form>
    )
  }
}

export default IndexPage
