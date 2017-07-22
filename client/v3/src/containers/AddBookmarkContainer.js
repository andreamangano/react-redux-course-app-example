import {connect} from 'react-redux'
import AddBookmark from './../components/AddBookmark/AddBookmark'
import {saveBookmark, resetSaveState} from './../actions/saveBookmarkActions'

const mapStateToProps = ({addBookmark}) => ({...addBookmark});

const mapDispatchToProps = dispatch => ({
  saveBookmark: payload => dispatch(saveBookmark({payload})),
  resetSaveState: () => dispatch(resetSaveState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBookmark);