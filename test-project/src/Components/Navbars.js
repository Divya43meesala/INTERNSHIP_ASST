import React, { useState } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdExit } from "react-icons/io"; // Import dropdown icon
import PostCard from "./PostCard"; // Import the PostCard component
import PostCard2 from "./PostCard2"; // Import the PostCard2 component
import PostCard3 from "./PostCard3"; // Import the PostCard3 component
import Car from "./car.jpeg";
import Ceo from "./google_ceo.webp";
import Image from "./image2.jpg";
import Image2 from "./image3.jpeg";
import Image3 from "../profileicon.png";
import Image4 from "./profile_icon4.jpg";
import { FaUserPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { FaThumbsUp } from 'react-icons/fa';
import { FaPenFancy } from 'react-icons/fa';
import { FaBookReader } from 'react-icons/fa';
import Article from "./article.png";
import Education from "./education.png";

const Navbars = () => {
  const [activeNavItem, setActiveNavItem] = useState('All');
  const [joinedGroup, setJoinedGroup] = useState(false); // State to track group membership

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  const toggleGroupMembership = () => {
    setJoinedGroup(!joinedGroup);
  };

  // Dummy data for recommended groups
  const recommendedGroups = [
    {
      profileIcon: Image3,
      groupName: "Leisure",
    },
    {
      profileIcon: Image4,
      groupName: "Activism",
    },
    {
      profileIcon: Image2,
      groupName: "MBA",
    },
    {
      profileIcon: Ceo,
      groupName: "Philosophy",
    },
    // Add more recommended groups here
  ];

  // Dummy data for post cards
  const posts = [
    {
      imageUrl: Image,
      theme: "Education",
      themeUrl: Education,
      content: "Tax Benefits for Investment Under pension Scheme launched by Government",
      postContent: "I've worked in UX for the better part of a decade. From now on, I plan to rel...",
      userName: "Sarthak kamra",
      views: "1.4k views",
      userProfileImageUrl: Ceo,
    },
    {
      imageUrl: Image2,
      theme: "Article",
      themeUrl: Article,
      content: "What if famous brands had regular fonts? \n Meet RegularBrands!",
      postContent: "I've worked in UX for the better part of a decade. From now on, I plan to rel...",
      userName: "Sarah West",
      views: "1.4k views",
      userProfileImageUrl: Image4,
    },
    // Add more post objects for additional cards
  ];

  const posts2 = [
    {
      imageUrl: Car,
      theme: "Meetup",
      content: "Finance Investment Elite Social Mixer @Lujiazui ",
      userName: "Ronal Jones",
      views: "1.4k Views",
      userProfileImageUrl: Image3,
    },
  ];
  const posts3 = [
    {
      theme: "Job",
      content: "Software Developer",
      userName: "Joseph Gray",
      views: "1.4k Views",
      userProfileImageUrl: Image4,
    },
  ];

  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Navbar content */}
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link NavLink-underline ${
                    activeNavItem === "All" ? "active" : ""
                  }`}
                  href="#All"
                  onClick={() => handleNavItemClick("All")}
                >
                  All posts(32)
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link NavLink-underline ${
                    activeNavItem === "article" ? "active" : ""
                  }`}
                  href="#article"
                  onClick={() => handleNavItemClick("article")}
                >
                  Article
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link NavLink-underline ${
                    activeNavItem === "events" ? "active" : ""
                  }`}
                  href="#events"
                  onClick={() => handleNavItemClick("events")}
                >
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link NavLink-underline ${
                    activeNavItem === "education" ? "active" : ""
                  }`}
                  href="#education"
                  onClick={() => handleNavItemClick("education")}
                >
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link NavLink-underline ${
                    activeNavItem === "job" ? "active" : ""
                  }`}
                  href="#job"
                  onClick={() => handleNavItemClick("job")}
                >
                  Job
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-outline-secondary btn-lg me-2"
                type="button"
                style={{ border: "none", paddingLeft: "15px" }}
              >
                Write post
                <IoMdArrowDropdown className="ms-1" />
              </button>
              <button className="btn btn-primary btn-lg" type="button" onClick={toggleGroupMembership}>
                {joinedGroup ? <IoMdExit className="ms-1" /> : <FaUserPlus className="ms-1" />}
                {joinedGroup ? "Leave Group" : "Join Group"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Render post cards and small div when 'All' is active */}
      {activeNavItem === "All" && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="post-container">
                {posts.map((post, index) => (
                  <div key={index}>
                    <PostCard
                      imageUrl={post.imageUrl}
                      themeUrl={post.themeUrl}
                      theme={post.theme}
                      content={post.content}
                      postContent={post.postContent}
                      userName={post.userName}
                      views={post.views}
                      userProfileImageUrl={post.userProfileImageUrl}
                    />
                    {index === 1 && (
                      <PostCard2
                        imageUrl={posts2[0].imageUrl}
                        theme={posts2[0].theme}
                        content={posts2[0].content}
                        userName={posts2[0].userName}
                        views={posts2[0].views}
                        userProfileImageUrl={posts2[0].userProfileImageUrl}
                      />
                    )}
                  </div>
                ))}
                <div>
                  <PostCard3
                    theme={posts3[0].theme}
                    content={posts3[0].content}
                    userName={posts3[0].userName}
                    views={posts3[0].views}
                    userProfileImageUrl={posts3[0].userProfileImageUrl}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 py-5">
              <div className="small-container justify-content-space-around">
                <FaMapMarkedAlt /> &nbsp;
                <span className="text-dark" style={{ fontSize: "1.2rem" }}>
                  Enter you Location
                </span>
                <FaEdit style={{ float: "right", fontSize: "1.3rem" }} />
                <hr style={{ marginLeft: "100px" }} />
                <span
                  style={{
                    backgroundColor: "white",
                    padding: "5px",
                    borderRadius: "50%",
                  }}
                >
                  <div style={{ marginLeft: "50px" }}>
                    {" "}
                    <MdError style={{ background: "#fff" }} />
                    <span className="text-secondary">
                      Your location will help us serve better and extend a Personalized experience
                    </span>
                  </div>
                </span>
              </div>
              {/* Recommended Groups */}
              {joinedGroup && (
                <div className="recommended-groups mt-5">
                  <h5><FaThumbsUp/>Recommended Groups</h5>
                  {recommendedGroups.map((group, index) => (
                    <div>
                    <div>
                    

                    </div>
                    <div key={index} className="d-flex align-items-center mt-3">
                      <img
                        src={group.profileIcon}
                        alt="Group Profile"
                        className="rounded-circle me-3"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <div className="d-flex align-items-center justify-content-between flex-grow-1">
                        <p className="m-0 me-3">{group.groupName}</p>
                        <button className="btn btn-sm btn-outline-secondary" style={{ borderRadius:'50px'}}>
                          Follow
                        </button>
                      </div>
                    </div>
                    </div>
                    
                  ))}
                  <div className="text-center mt-3">
                    <a href="#" className="text-decoration-none">
                      See more...
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbars;
