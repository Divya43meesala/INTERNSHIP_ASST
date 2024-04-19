import React, { useState } from 'react';
import './PostCard.css';

import { IoMdShare } from 'react-icons/io';
import { FaPenNib } from 'react-icons/fa';

import { FaEye, FaShare, FaEllipsisH } from 'react-icons/fa'; // Import share and ellipsis icons from react-icons

const PostCard = ({ imageUrl, themeUrl ,theme, content, postContent, userName, views, userProfileImageUrl }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
    // Perform actions based on the selected option
    setIsOptionsOpen(false); // Close options after selecting
  };

  return (
    <div className="post-card-wrapper">
      <div className="post-card">
        <div className="post-image">
          <img src={imageUrl} alt="Post" className="post-image" />
        </div>

        <div className="post-content">
          <h4 className=' text-dark' style={{ fontStyle: 'italic' }}><img src={themeUrl} alt="image" height="30px" width="30px" style={{ borderRadius:'50px' }}/>{theme}</h4>

          <h4 className='justify-content-start'><strong>{content}</strong></h4>
          <div className="dropdown">
            <button className="ellipsis-icon float-end bg-none" onClick={toggleOptions}>
              <FaEllipsisH />
            </button>
            {isOptionsOpen && (
              <div className="options-content border-dark" style={{ position: 'absolute', right: '40px', top: '0' }}>
                <ul style={{ listStyleType: 'none' }}>
                  <li onClick={() => handleOptionSelect("Edit")}>Edit</li>
                  <li onClick={() => handleOptionSelect("Report")}>Report</li>
                  <li onClick={() => handleOptionSelect("Option3")}>Option3</li>
                </ul>
              </div>
            )}
          </div>
          <p className="gray-text">
            {postContent}
          </p>

          <div className="d-flex align-items-center justify-content-between">
            <div className="user-profile">
              <img src={userProfileImageUrl} alt="User Profile" className="user-profile-image" style={{ height: '50px', width: '60px', borderRadius: '100px' }} />
              <span>{userName}</span>
            </div>

            <div className="views-share">
              <p className='py-5' style={{ paddingLeft:'10px'}}><FaEye/>{views}</p>&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="btn btn-sm btn-secondary bg-secondary"> <IoMdShare />  </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
