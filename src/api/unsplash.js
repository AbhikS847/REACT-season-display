import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization:'Client-ID KxIUvt8pSjX12RV8uumcNOPWSRopHxQfQxy5Q0DcVJY'
    }
})