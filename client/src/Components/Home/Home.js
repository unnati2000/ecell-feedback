import React from 'react';
import { Link } from 'react-router-dom';
import image from './feedback-removebg-preview (1).png';
import '../../style.css';

const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="image">
          <img src={image} alt="image" className="img" />
        </div>
        <div className="header-content">
          <h1 className="title is-1">
            We all need people who will give us feedback. That’s how we improve.
          </h1>
          <h3 className="title is-3">Ecell FeedBack Form</h3>
          <Link className="button  is-primary" to="/feedback">
            Go to Feedback
          </Link>
        </div>
      </div>

      {/* guideliness section */}
    </div>
  );
};

export default Home;
