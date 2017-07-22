import React from 'react'
import BookmarkForm from './../BookmarkForm/BookmarkForm'

const defaultDataForm = {
  title: '',
  url: '',
  favourite: false
};

class AddBookmark extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataForm: defaultDataForm
    };

    // Passes class context to functions
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const dataForm = Object.assign({}, this.state.dataForm, {[target.name]: value});
    this.setState({dataForm})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveBookmark(this.state.dataForm)
      .then(() => setTimeout(() => {
            if(this.props.response) {
              this.setState({dataForm: defaultDataForm})
            }
            this.props.resetSaveState()
          }, 2000
        ))
  }

  render() {

    const renderResponse = () => {

      if(this.props.error) {
        return <h3>{this.props.error}</h3>
      }

      if(this.props.response) {
        return <h3>Congrats! You've saved a new bookmark!</h3>
      }
    };

    return (
      <div>
        {
          this.props.isSaving
            ? <h3>Bookmark is saving...</h3>
            : renderResponse()
        }
        {
          (!this.props.isSaving && !this.props.response && !this.props.error) &&
          <BookmarkForm dataForm={this.state.dataForm}
                        actions={{handleChange: this.handleInputChange, handleSubmit: this.handleSubmit}}/>
        }
      </div>
    )
  }
}

export default AddBookmark