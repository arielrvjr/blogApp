import api from '../../api';


const UPDATE_FILTER = 'UPDATE_FILTER';
const INPUT_SUBMIT = 'INPUT_SUBMIT';
const LIST_ITEM_CLICK = 'LIST_ITEM_CLICK';
const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM';
const LOAD_POSTS = "LOAD_POSTS";
const LOAD_CATEGORIES = "LOAD_CATEGORIES";

export function listItemClick(index){
  return {
    type: LIST_ITEM_CLICK,
    index
  }
}

export function loadingCategories(){
  return function(dispatch) {
    return api.getCategories().then(items => {
      dispatch(loadCategories(items));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadingPosts() {
  return function(dispatch) {
    return api.getPosts().then(items => {
      dispatch(loadPosts(items));
    }).catch(error => {
      throw(error);
    });
  };
}
export function loadPosts(posts){
  return {
    type: LOAD_POSTS,
    posts:posts
  }
}
export function loadCategories(categories){
  return {
    type: LOAD_CATEGORIES,
    categories: categories
  }
}
export function deleteListItem(index) {
  return {
    type: DELETE_LIST_ITEM,
    index
  }
}

export function updateFilter(filter){
  return {
    type: UPDATE_FILTER,
    filter: filter
  };
}


const initialState = {
  filter: {}
};

export default function reducer(state = initialState, action){
  switch (action.type){
  case INPUT_SUBMIT:
    return Object.assign(
      {},
      state,
      {
        list: [...state.list, {item: state.newToDo, done: false }],
        newToDo: ''
      }
    );
  case UPDATE_FILTER:
    return Object.assign(
      {},
      state,
      {filter: action.filter}
    );
  case LIST_ITEM_CLICK:
    return Object.assign(
      {},
      state,
      {
        list: [
          ...state.list.slice(0, action.index),
          Object.assign({}, state.list[action.index], {done: !state.list[action.index].done}),
          ...state.list.slice(action.index+1)
        ]
      }
    );
  case LOAD_CATEGORIES:
    return Object.assign(
      {},
      state,
      {
        categories: [].concat(action.categories),
      }
    );
  case LOAD_POSTS:
    return Object.assign(
      {},
      state,
      {
        posts: [].concat(action.posts),

      }
    )
  case DELETE_LIST_ITEM:
    return Object.assign(
      {},
      state,
      {
        list: [
          ...state.list.slice(0, action.index),
          ...state.list.slice(action.index+1)
        ]
      }
    );
  default:
    return state;
  }
}