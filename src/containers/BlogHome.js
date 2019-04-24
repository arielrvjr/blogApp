import { connect } from 'react-redux';
import BlogApp from '../components/BlogApp'
import {
  updateFilter,
  deleteListItem,
  listItemClick
} from '../redux/modules/blogApp';

function mapStateToProps(state) {
  return { blogApp: state.blogApp }
}

function mapDispatchToProps(dispatch) {
  return {
    updateFilter: (value) => dispatch(updateFilter(value)),
    deleteListItem: (i) => dispatch(deleteListItem(i)),
    listItemClick: (i) => dispatch(listItemClick(i))
  }; 
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogApp);