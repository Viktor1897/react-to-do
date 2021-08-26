import axios from "axios";
import { savePosts } from "../../redux/actionCreators";
import { projectStore } from "../../redux/reduxStorage";

export default function getPosts () {
  
    const token = localStorage.getItem('token');

    const url = 'http://46.101.163.178/api/v1/items/?skip=0&limit=100';
    const options = {
        method: 'GET',
        headers: { 'accept': 'application/json',
            'Authorization': `Bearer ${token}`},
        url,
    }
  
   axios(options)
      .then(res => {
          projectStore.dispatch(savePosts(res.data));
        }
      )
      .catch(function (error) {
        console.log(error);
      });
}