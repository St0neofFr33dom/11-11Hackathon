import { DisplayCard } from "./componets/displayCard.js";
import PostForm from "./componets/PostForm.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [post, setPost] = useState([
    {
      imageURL: "http://placekitten.com/100/100",
      imageALT: "placeholder",
      title: "test",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "http://www.google.com",
    },
  ]);
  return (
    <div className="App">
      {post.map((card, index) => {
        return (
          <DisplayCard
            title={card.title}
            description={card.description}
            imageURL={card.imageURL}
            imageALT={card.imageALT}
            link={card.link}
            key={index}
          />
        );
      })}
      <PostForm />
    </div>
  );
}

export default App;
