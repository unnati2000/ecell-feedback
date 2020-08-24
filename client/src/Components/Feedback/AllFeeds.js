import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { GetFeedback, DeleteFeedback } from '../../actions/feedback';
import { Link } from 'react-router-dom';

const AllFeeds = ({ GetFeedback, DeleteFeedback, posts: { posts } }) => {
  useEffect(() => {
    console.log('LOADED');
    GetFeedback();
    DeleteFeedback();
  }, [GetFeedback]);
  if (posts) {
    console.log(posts);
  } else {
    console.log('wait');
  }
  // console.log(posts);
  // This is the component which is rendered after signing in, right ? yeah
  // Aur ? bas aur kuch main khud hi host kar dungi okay email milne de are nahi mongoURL mera haina haa so ? so mere pas hi rehne de okay and shit bhul gayi lol vo dotenv se save karte haina? vo env vars ? yeah haaeto mongoURL and jwt secret ko karna h  mkaya karna h? main karti hu tu dekh bas 5 mins pleasehaa

  return (
    <div>
      {posts ? (
        <div className="allfeeds">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article className="message is-dark">
                <div className="message-header">
                  <p>
                    {post.name ? (
                      post.name
                    ) : (
                      <h4 className="title is-5">Anonymus</h4>
                    )}
                  </p>
                  <button
                    onClick={() => DeleteFeedback(post._id)}
                    className="delete is-medium"
                  ></button>
                </div>
                <h1 className="title is-3">{post.title}</h1>
                <div className="message-body">{post.body}</div>
              </article>
            ))
          ) : (
            <h1 className="title is-2">Loading</h1>
          )}
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.feedback,
});

export default connect(mapStateToProps, { GetFeedback, DeleteFeedback })(
  AllFeeds
);
