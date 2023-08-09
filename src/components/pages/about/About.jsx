import React, { useEffect, useState } from 'react'
import './About.css';

import { useParams } from 'react-router-dom';
const About = () => {
    const [createData, setCreateData] = useState({ thumbnailUrl: '', title: '', id: '' })
    const [tableData, setTableData] = useState([])
    const params = useParams()
    const { url } = params
    useEffect(() => {
        setCreateData({ ...createData, thumbnailUrl: url })
    }, [url])
    const createPost = () => {
        if (!createData.thumbnailUrl || !createData.title || !createData.id) {
            alert('Please add all input fields');
            return;
        }
        setCreateData({ thumbnailUrl: '', title: '', id: '' });
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
        </div>
    )
}
export default About









 // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     body: JSON.stringify(createData),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data, 'created');

        //         setCreateData({ thumbnailUrl: '', title: '', id: '' });

        //         setTableData([...tableData, data]);

        //     });