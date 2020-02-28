import React, { useState, useEffect } from "react";
import BlogPost from './BlogPost'
import withFirebase from './withFirebase'

export default withFirebase(props => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    props.db
      .collection('posts')
      .orderBy('timestamp', 'desc')
      .limit(10)
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            setPosts(posts => {
              posts.push(change.doc);
              return [...posts];
            });
          }
        });
      });
  }, [props.db]);
  return <div className="Blog feed">
    {posts.map(post => <BlogPost key={post.id} data={post.data()}/>)}
  </div>
});
