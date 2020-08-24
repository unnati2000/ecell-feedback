import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { PostFeedback } from '../../actions/feedback';
import image from './rules.png';

const FeedBack = ({ PostFeedback, feedback }) => {
  const history = useHistory();
  const [displayName, toggleName] = useState(false);
  const [FormData, setFormData] = useState({
    title: '',
    body: '',
    name: '',
  });

  const { title, body, name } = FormData;

  const onChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    console.log('triggerd');
    e.preventDefault();
    PostFeedback({
      title,
      body,
      name,
    });
    //console.log('dekhteh');
    window.location.reload();
  };
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand"></div>
      </nav>

      <div className="guidelines-section card">
        <div className="rules">
          <h2 className="title is-2">Rules to be followed</h2>
          <h1 className="title is-4">
            <i className="fas fa-check-square"></i>
            Suggestions are always welcomed
          </h1>
          <h1 className="title is-4">
            <i className="fas fa-check-square"></i>
            No abusive language must be used
          </h1>
          <h1 className="title is-4 ">
            <i className="fas fa-check-square"></i>
            It should be short
          </h1>
          <h1 className="title is-4">
            <i className="fas fa-check-square"></i>
            Spamming is not allowed
          </h1>
          <img src={image} alt="rules" />
        </div>
        <form className="feedback" onSubmit={onSubmit}>
          <h1 className="title is-1">FeedBack Form</h1>
          <h3 className="title is-3">Revealing your identity is optional</h3>
          <label className="title is-5">Enter Title</label>
          <input
            className="input"
            type="text"
            name="title"
            value={title}
            placeholder="Enter Title"
            onChange={onChange}
            required
          />
          <br />
          <br />
          <label className="title is-5">Feedback/Suggestion</label>
          <textarea
            className="textarea "
            placeholder="Enter Feedback/Suggestion"
            rows="10"
            name="body"
            value={body}
            onChange={onChange}
            required
          ></textarea>
          <br></br>
          <button
            className="button is-black"
            onClick={(e) => {
              e.preventDefault();
              toggleName(!displayName);
            }}
          >
            Reveal your identity
          </button>
          <br></br>
          <span>Optional</span>
          {displayName && (
            <div className="">
              <label className="title is-5"> Enter Name</label>
              <input
                type="text"
                className="input"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={onChange}
              />
            </div>
          )}
          <br></br>
          <button className="button is-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  feedback: state.feedback,
});

export default connect(mapStateToProps, { PostFeedback })(FeedBack);
/// yeah so now i've logged in as admin b
// allfeeds is a private route and not accessible
