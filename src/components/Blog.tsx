import React, { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import { consumeFirebase } from "./withFirebase";

type postsType =
  firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>[];

const Blog = consumeFirebase(({ db }) => {
  const [posts, setPosts] = useState<postsType>([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .limit(10)
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            setPosts((posts) => [...posts, change.doc]);
          }
        });
      });
  }, [db]);
  return (
    <div className="Blog feed">
      {posts.map((post) => (
        <BlogPost key={post.id} data={post.data()} />
      ))}
    </div>
  );
});

export default Blog;
