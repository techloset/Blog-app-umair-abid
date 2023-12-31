import React, { useState, useEffect } from 'react';
import './Blog.css'
// import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
const Blogs = () => {
    const [postData, setPostData] = useState([]);
    // const [dbData, setDbData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //         const response = await axios.get('https://blog-app-backend-production-8fc5.up.railway.app/get/getBlog');
        //         setDbData(response.data);
        //     } catch (error) {
        //         console.error('Error fetching data:', error);
        //     }
        // };

        // fetchData();
        getData();

    }, []);

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                setPostData(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    const handleAddBlog = () => {

        navigate(`/About/${encodeURIComponent(postData[0].thumbnailUrl)}`);
    };

    return (
        <div className="container">
            <button className='absolute right-5 border-2 p-1 cursor-pointer hover:bg-green-600  rounded-lg border-green-600 bg-green-300 text-black font-medium' onClick={handleAddBlog}><h2>Add New Blog</h2></button>
            <h1 className="text-5xl font-bold text-black italic text-center mt-10 mb-6">
                Welcome to Blogs!
            </h1>
            <div className="blog-container">
                {postData.map((post, index) => (




                    < div className="blog-item" key={index} >
                        <Link to={`/BlogDetail/${encodeURIComponent(post.thumbnailUrl)}/${post.id}`}>
                            <img className="blog-image" src={post.thumbnailUrl} alt="" />
                            <h2 className="blog-title">{post.title}</h2>
                            <p className="blog-id">ID: {post.id}</p>
                        </Link>
                    </div>
                ))}
            </div>
            {/* <div className='container'>

                <div className="blog-container">
                    {dbData.map((data, i) => (
                        <div className="blog-item" key={i}>
                            <Link to={`/BlogDetail/${encodeURIComponent(data.thumbnailUrl)}/${data.id}`}>
                                <img className="blog-image" src={data.thumbnailUrl} alt="" />
                                <h2 className="blog-title">{data.title}</h2>
                                <p className="blog-id">ID: {data.id}</p>
                            </Link>
                        </div>
                    ))}

                </div>
            </div> */}
        </div >
    );
};

export default Blogs;
