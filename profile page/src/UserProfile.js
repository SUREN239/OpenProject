import React from 'react';
import './UserProfile.css';

const UserProfile = ({ name, email, profilePicture, qualification, skills, interests, achievements, contact }) => {
  return (
    <div className="user-profile-container">
      <div className='userProfile-container'>

        <div className="profile-info">
          <div className='layouts'>
            <div className="user-profile-header">
              <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="Profile" className="profile-picture" />
            </div>
            <h1 className="user-name">Arjun</h1>
            <h3>Qualification:</h3>
            <p>{qualification}</p>
          </div>
          <div>
            <h3>Skills:</h3>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Areas of Interest:</h3>
            <ul>
              {interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Achievements:</h3>
            <ul>
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Email:</h3>
            <p>{email}</p>
          </div>
          <div>
            <h3>Contact:</h3>
            <p>{contact}</p>
          </div>
          <div>
            <h3>Languages Known</h3>
            <p>tamil,English</p>
          </div>
        </div>

      </div>
      <div className="buttons-adn">
      <button className="btn btn-style btn-light" type="button">Save</button>
      <button className="btn btn-style btn-light" type="button">Edit</button>
    </div>
    </div>
  );
};

export default UserProfile;
