import React from 'react'

const BookmarkForm = ({dataForm, actions}) => (

  <form onSubmit={actions.handleSubmit}>
    <input className="mdl-textfield__input"
           name="title"
           type="text"
           placeholder="Add a title"
           value={dataForm.title}
           onChange={actions.handleChange} />

    <input className="mdl-textfield__input"
           name="url"
           type="url"
           placeholder="Paste your link"
           required
           value={dataForm.url}
           onChange={actions.handleChange} />

    <input style={{display: 'none'}}
           name="favourite"
           type="checkbox"
           checked={dataForm.favourite}
           onChange={actions.handleChange} />

    <button className="mdl-button mdl-button--raised mdl-button--colored"
            type="submit">Submit</button>
  </form>
);

export default BookmarkForm;