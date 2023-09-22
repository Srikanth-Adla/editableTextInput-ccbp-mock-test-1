import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {isEdited: false, inputText: ''}

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  onChangeButton = () => {
    this.setState({isEdited: true})
  }

  onClickEditButton = () => {
    this.setState({isEdited: false})
  }

  renderInputField = () => {
    const {inputText} = this.state

    return (
      <>
        <input
          type="text"
          className="input-element"
          value={inputText}
          onChange={this.onChangeInput}
        />
        <button
          type="button"
          onClick={this.onChangeButton}
          className="button-element"
        >
          Save
        </button>
      </>
    )
  }

  renderEditedField = () => {
    const {inputText} = this.state
    return (
      <>
        <p className="paragraph-element">{inputText}</p>
        <button
          type="button"
          className="button-element"
          onClick={this.onClickEditButton}
        >
          Edit
        </button>
      </>
    )
  }

  render() {
    const {isEdited} = this.state

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="text-card-container">
            <h1 className="heading-text-container">Editable Text Input</h1>
            <div className="button-input-container">
              {isEdited ? this.renderEditedField() : this.renderInputField()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
