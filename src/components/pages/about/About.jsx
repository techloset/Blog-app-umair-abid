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
                const response = await axios.get('https://blog-app-backend-production-8fc5.up.railway.app/get/getBlog', createData);
                setDbData(response.data);
                console.log(response.data, 'kfjdj');
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        setCreateData({ ...createData, thumbnailUrl: url });
    }, [url, createData.title]);

    const createPost = async () => {
        if (!createData.thumbnailUrl || !createData.title || !createData.id) {
            alert('Please add all input fields');
            return;
        }

        await axios.post('https://blog-app-backend-production-8fc5.up.railway.app/send/createBlog', createData)
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






// const [initialId, setInitialId] = useState(50)
// const incremenet = initialId + 1
// setInitialId(initialId)
// const newId = initialId + 1;
// const newData = { ...createData, id: newId };
// setInitialId(newId);
{/* <div className="blog-container">
                {tableData.map((data, i) => (
                    <div className="blog-item" key={i}>
                        <img className="blog-image" src={data.thumbnailUrl} alt="" />
                        <h2 className="blog-title">{data.title}</h2>
                        <p className="blog-id">ID: {data.id}</p>
                    </div>
                ))}

            </div> */}