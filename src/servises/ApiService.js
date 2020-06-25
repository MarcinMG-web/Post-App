import axios from "axios";

export const getUsers = () => new Promise((resolve, reject) => {
    axios.get('https://gorest.co.in/public-api/users?_format=json&access-token=rrDyybBYMHk90mKdkFuKLpWRNs8CnrvYn0FY')
    .then(res =>  resolve(res.data.result));
})