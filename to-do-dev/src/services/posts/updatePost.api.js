import axios from "axios";
import getPosts from '../../services/posts/getPosts.api';

export default function updatePost (post, id) {
  
    const token = localStorage.getItem('token');

    const url = `http://46.101.163.178/api/v1/items/${id}`;
    const options = {
        method: 'PUT',
        headers: { 'accept': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'},
        data: post,
        url,
    }
  
   axios(options)
      .then(()=>
        getPosts()
        )
      .catch(function (error) {
        console.log(error);
      });
}