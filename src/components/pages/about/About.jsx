import React, { useEffect, useState } from 'react'
import './About.css';

import { useParams } from 'react-router-dom';
import axios from 'axios';
const About = () => {
    const [createData, setCreateData] = useState({ thumbnailUrl: '', title: '', id: '' });
    const [tableData, setTableData] = useState([]);
    const [dbData, setDbData] = useState([]);
    const params = useParams();
    const { url } = params;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('blog-app-backend-production-8fc5.up.railway.app/get/getBlog');
                setDbData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        setCreateData({ ...createData, thumbnailUrl: url });
    }, [url]);

    const createPost = async () => {
        if (!createData.thumbnailUrl || !createData.title || !createData.id) {
            alert('Please add all input fields');
            return;
        }
        await axios.post('blog-app-backend-production-8fc5.up.railway.app/send/createBlog', createData)
            .catch(error => {
                console.error('Axios Error:', error);
            });
        setCreateData({ title: '', id: '' });
        setTableData([...tableData, createData]);
    };
    return (
        <div className="container">
            <div className="input-container">
                <input
                    type="text"
                    value={createData.thumbnailUrl}
                    onChange={(e) => setCreateData({ ...createData, thumbnailUrl: e.target.value })}
                    className="input"
                    placeholder="ThumbnailURL"
                />
                <input
                    type="text"
                    value={createData.title}
                    onChange={(e) => setCreateData({ ...createData, title: e.target.value })}
                    className="input"
                    placeholder="Title"
                />
                <input
                    type='number'
                    value={createData.id}
                    onChange={(e) => setCreateData({ ...createData, id: e.target.value })}
                    className="input"
                    placeholder="ID"
                />
            </div>
            <button onClick={createPost} className="button" >
                Create Post
            </button>
            <div className="blog-container">
                {tableData.map((data, i) => (
                    <div className="blog-item" key={i}>
                        <img className="blog-image" src={data.thumbnailUrl} alt="" />
                        <h2 className="blog-title">{data.title}</h2>
                        <p className="blog-id">ID: {data.id}</p>
                    </div>
                ))}

            </div>
            <div className="blog-container">
                {dbData.map((data, i) => (
                    <div className="blog-item" key={i}>
                        <img className="blog-image" src={data.thumbnailUrl} alt="" />
                        <h2 className="blog-title">{data.title}</h2>
                        <p className="blog-id">ID: {data.id}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default About






