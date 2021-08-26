import axios from "axios";
import getPosts from '../../services/posts/getPosts.api';

export default function createPost (post, history) {
  
    const token = localStorage.getItem('token');

    const url = 'http://46.101.163.178/api/v1/items/';
    const options = {
        method: 'POST',
        headers: { 'accept': 'application/json',
            'Authorization': `Bearer ${token}`},
        data: post,
        url,
    }
  
   axios(options)
      .then(()=>
        getPosts()
        )
      .catch(function (error) {
        console.log(error);
        history.push('/')
      });
}