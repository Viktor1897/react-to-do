import axios from "axios";
import qs from 'qs';

export default function getToken (history, creds) {

    const url = 'http://46.101.163.178/api/v1/login/access-token';
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(creds),
        url,
    }
    
    axios(options)
      .then(res => {
          localStorage.setItem('token', res.data.access_token);
          if (res.statusText === 'OK') {
            history.push('/to-do')
          }
        }
      )
      .catch(function (error) {
        console.log(error);
      });
}