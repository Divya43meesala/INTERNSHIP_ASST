import React,{useState} from 'react';
import './PostCard.css';
import { IoMdShare } from 'react-icons/io';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaEye, FaShare, FaEllipsisH } from 'react-icons/fa';
import { IoMdCalendar } from 'react-icons/io';
import { FaPencilAlt } from 'react-icons/fa';


const PostCard = ({ imageUrl, theme, content, userName, views, userProfileImageUrl }) => {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const toggleOptions = () => {
        setIsOptionsOpen(!isOptionsOpen);
      };
  const toggleDropdown = () => {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("show");
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
          <h4 style={{ fontStyle: 'italic' }}><IoMdCalendar/>{theme}</h4>
        <h4 className='justify-content-start'><strong>{content}</strong></h4>

<div className="dropdown">
            <button className="ellipsis-icon float-end" onClick={toggleOptions}>
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
          <div className="date-location">
            <div className='d-flex align-items-center'>
              <FaCalendarAlt /><span className="ms-2">Fri, 12 Oct, 2018</span>
              <center style={{ marginLeft : "400px"}}><FaMapMarkerAlt className="me-1 " />Ahmedabad, India</center>
            </div>
          </div>
          <div className="mt-5  ml-5">

            <button className='btn btn-lg text-danger text-center border border-dark' style={{ width: '60vw', background: 'none', borderRadius: '20px' }}>Visit Website</button>
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <div className="user-profile">
              <img src={userProfileImageUrl} alt="User Profile" className="user-profile-image" style={{ height: '50px', width: '60px', borderRadius: '100px' }} />
              <span>{userName}</span>
            </div>

            <div className="views-share">
              <p className='py-5' style={{ paddingLeft:'10px'}}><FaEye/>{views}</p>&nbsp;&nbsp;
              <button className="btn btn-sm btn-secondary"> <IoMdShare /> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
