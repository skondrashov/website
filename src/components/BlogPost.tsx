import React from "react";

interface Props {
  data: firebase.firestore.DocumentData;
}

const BlogPost = (props: Props) => {
  const items = props.data.content.map(
    (item: firebase.firestore.DocumentData, i: number) => {
      const type = Object.keys(item)[0];
      const value = item[type];
      switch (type) {
        case "text":
          return <p key={i}>{value}</p>;
        case "image":
          const url = `https://i.imgur.com/${value}.png`;
          return (
            <figure key={i}>
              <a href={url}>
                <img src={url} alt="" />
              </a>
            </figure>
          );
        case "caption":
          return (
            <p key={i} className="caption">
              {value}
            </p>
          );
        default:
          console.error(`Invalid type passed from Firestore: ${type}`);
          return <span key={i} />;
      }
    }
  );
  const date = new Date(props.data.timestamp.seconds * 1000).toLocaleString(
    "en-US"
  );
  return (
    <section className="Post">
      <h2>{props.data.title}</h2>
      <p className="info">
        {props.data.author}
        <time>{date}</time>
      </p>
      {items}
    </section>
  );
};

export default BlogPost;
