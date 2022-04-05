/*********************
DisplayData Component:
**********************
This is the DisplayData component is used to display the data. All the data fetched
fro the API call is looped and displayed on this component page.
 **************/

//IMPORT SCRIPTS
import React from 'react';
import '../DisplayData/DisplayData.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {Spinner} from 'react-bootstrap'

const DisplayData = ({posts, loading, deleteHandler}) => {
    
    //Loader is called if the page is loading
    if (loading) {
        return (
            <div className='load'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }
    
    return (
        <div>
            <div className="row m-2">
                {posts.map((post, index) => {
                    return <div className="col-md-12">
                        <div className="container-fluid">
                            <div className="row no-gutter">
                                <div className="col-md-6">
                                    <div className="card shadow-sm w-100">
                                        <img
                                            src="https://via.placeholder.com/300.png/000000/FFFFFF?text=TravelFlag"
                                            alt="..."></img>
                                    </div>
                                </div>
                                <div className="col-md-6 border-box">
                                    <h1 className='UserID'>USER ID : {post.userId}</h1>
                                    <h4 className='ID'>ID : {post.id}</h4>
                                    <div className='stars'>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                    </div>
                                    <h5 className='title'>Title</h5>
                                    <h4 className='UserID' key={post.title}>{post.title}</h4>
                                    <h5 className='title'>Details</h5>
                                    <p
                                        className='para'
                                        style={{
                                        textAlign: "justify"
                                    }}>Lorem
                                        Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                        has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.</p>
                                    <button 
                                        className="btn btn-primary btn-block text-uppercase shadow-sm btns"
                                        type='button' 
                                        onClick={() => deleteHandler(index)}>Delete User</button>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
            </div>
        </div>
    )
}

export default DisplayData;