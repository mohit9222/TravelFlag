/*********************
Pagination Component :
**********************
This is the Pagination component which consists of the pagination logic. The 
active pages, posts per page, total posts and paginate values are all
called in this component from the Album component.
 *********************/

//IMPORT SCRIPTS
import React, {useState} from 'react';
import '../Pagination/Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [isActive, setActive] = useState(0);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number, index) => (
          
          <li key={number} className={isActive === index ? 'active' : ""}>
            <a onClick={() => {
                paginate(number)
                setActive(index)
                }
            } className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;