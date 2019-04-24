const API_URL = process.env.REACT_APP_API_URL;
const POSTS_PATH = [API_URL,'posts'].join('/');
const CATEGORIES_PATH = [API_URL,'categories'].join('/');
class Api {
    static getPosts() {
      return fetch(POSTS_PATH).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
      static getCategories() {
        return fetch(CATEGORIES_PATH).then(response => {
          return response.json();;
        }).catch(error => {
            console.log('GET CATEGORIES Error',error);

          return error;
        });
    }
}
  
export default Api;