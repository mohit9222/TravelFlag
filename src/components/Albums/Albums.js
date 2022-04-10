/***************
Album Component:
****************
This is the Album component is used to fetch the data using an API call 
and is displayed using the DisplayData component. The CRUD methods are called
to add, delete and display the data. The pagination logic is written to 
calculate and display 5 posts per page. Other features added here are Modals 
and tooltips.
 **************/


//IMPORT SCRIPTS
import React, {useEffect, useState} from 'react';
import axios from 'axios'
import '../Albums/Albums.css'
import DisplayData from '../DisplayData/DisplayData';
import Pagination from '../Pagination/Pagination';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import {Modal, OverlayTrigger, Tooltip} from 'react-bootstrap'

const Albums = () => {

    //Declartions
    const [posts,
        setPosts] = useState([]);
    const [loading,
        setLoading] = useState(false);
    const [currentPage,
        setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [show,
        setShow] = useState(false);
    const [userID,
        setUserID] = useState("");
    const [id,
        setID] = useState("");
    const [title,
        setTitle] = useState("");

    //Fetching data from API using Axios
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/albums");
            setPosts(res.data);
            setLoading(false);
        }

        fetchData();
    }, []);

    //modal
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    //Adding a User
    const AddingUser = () => {
        const newUser = {
            "userId": userID,
            "id": id,
            "title": title
        }
        setPosts([
            ...posts,
            newUser
        ]);
        handleClose();
    }

    //Delete a User
    const DeletingUser = (index) => {
        let newPosts = posts;
        posts.splice(index, 1);
        setPosts(posts);
    }

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    //Adding a tooltip
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Add Album
        </Tooltip>
    );

    return (
        <div className='container mt-5'>
            <div className='Add_user'>
                <OverlayTrigger
                    placement="bottom"
                    delay={{
                    show: 250,
                    hide: 400
                }}
                    overlay={renderTooltip}>
                    <a onClick={handleShow}>
                        <FontAwesomeIcon title='Add user' icon={faCirclePlus}/>
                    </a>
                </OverlayTrigger>
            </div>
            <DisplayData
                posts={currentPosts}
                loading={loading}
                deleteHandler={DeletingUser}/>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}/>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Adding a album</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                name="userID"
                                onChange={e => {
                                setUserID(e.target.value)
                            }}
                                value={userID}
                                placeholder="Enter the UserID"
                                className="form-control shadow-sm px-4"/>
                        </div>

                        <div className="form-group mb-3">
                            <input
                                onChange={e => {
                                setID(e.target.value)
                            }}
                                value={id}
                                name="text"
                                placeholder="Enter id"
                                className="form-control shadow-sm px-4 text-primary"/>
                        </div>

                        <div className="form-group mb-3">
                            <input
                                onChange={e => {
                                setTitle(e.target.value)
                            }}
                                value={title}
                                name="text"
                                placeholder="Enter title"
                                className="form-control shadow-sm px-4 text-primary"/>
                        </div>
                    </form>
                    <button
                        type="submit"
                        value="Login"
                        id="liveToastBtn"
                        onClick={() => AddingUser()}
                        className="btn btn-primary btn-block text-uppercase mb-2 shadow-sm but_wdth">Add Album</button>
                </Modal.Body>
            </Modal>
        </div>
    )

}

export default Albums;