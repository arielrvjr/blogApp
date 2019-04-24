import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import redux from './redux';
import { loadingPosts, loadingCategories } from './redux/modules/blogApp';


const store = redux();
Promise.all([
  store.dispatch(loadingPosts()),
  store.dispatch(loadingCategories())
]).then(()=>{
  ReactDOM.render(
    <Provider store={store}>
          <App></App>
        </Provider>
    ,
    document.getElementById('root')
  );
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();