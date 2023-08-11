import React from 'react'
import { useParams } from 'react-router-dom';
import './BlogDetail.css'
import Data from '../postDetail/PostDetail.json'
function BlogDetail() {
    const { thumbnailUrl, id } = useParams()
    const filterData = Data.filter((item) => {
        console.log(id, thumbnailUrl, 'sdfdsjfklsdjflkdsjflkjsdlkf');
        if (+id === item.id) {
            return item

        }
        else {
            return null
        }


    })
    return (
        <div className="user-profile">
            {filterData.map((item) => (
                <div key={item.id} className="user-card">
                    <div className="user-details">
                        <h2 className="user-name">{item.firstName}</h2>
                        <div className="contact-info">
                            <div className="contact-item">
                                <span className="label">Email:</span>
                                <span className="value">{item.email}</span>
                            </div>
                            <div className="contact-item">
                                <span className="label">Phone:</span>
                                <span className="value">{item.phone}</span>
                            </div>
                            <div className="contact-item">
                                <span className="label">Domain:</span>
                                <span className="value">{item.domain}</span>
                            </div>
                            <div className="contact-item">
                                <span className="label">IP Address:</span>
                                <span className="value">{item.ip}</span>
                            </div>
                        </div>
                    </div>
                    <div className="user-image">
                        <img src={decodeURIComponent(thumbnailUrl)} alt="User Thumbnail" />
                    </div>
                    <div className="user-address">
                        <h2 className="section-title">Address:</h2>
                        <div className="address-details">
                            <span className="label">Street:</span>
                            <span className="value">{item.address.address}</span>
                        </div>
                        <div className="address-details">
                            <span className="label">City:</span>
                            <span className="value">{item.address.city}</span>
                        </div>
                        <div className="address-details">
                            <span className="label">State:</span>
                            <span className="value">{item.address.state}</span>
                        </div>
                    </div>
                    <div className="company-address">
                        <h2 className="section-title">Company Address:</h2>
                        <span className="value">{item.company.address.address}</span>
                    </div>
                </div>
            ))}
        </div>
    );

}

export default BlogDetail




// useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get('https://blog-app-backend-production-8fc5.up.railway.app/get/getBlog');
//             setDbData(response.data);
//             setCreateData({ ...createData, thumbnailUrl: url });
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     fetchData();
//     setCreateData({ ...createData, thumbnailUrl: url });
// }, [url, createData.id]);

// const createPost = async () => {
//     if (!createData.thumbnailUrl || !createData.title) {
//         alert('Please add all input fields');
//         return;
//     }

//     const newId = initialId + 1;
//     const newData = { ...createData, id: newId };

//     await axios.post('https://blog-app-backend-production-8fc5.up.railway.app/send/createBlog', newData)
//         .catch(error => {
//             console.error('Axios Error:', error);
//         });

//     setCreateData({ ...newData, thumbnailUrl: '' });
//     setTableData([...tableData, newData]);

//     setInitialId(newId);
// };