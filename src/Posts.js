import React, { useState } from 'react';
import { API_KEY } from process.env;

const Posts = () => {
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     const result = await axios.get('https://api.api-ninjas.com/v1/cars?model=camry', 
        
    //     })
    // })

    return (
        <React.Fragment>
            <h1>Cars For Sale</h1>
        </React.Fragment>
    )
}

export default Posts;