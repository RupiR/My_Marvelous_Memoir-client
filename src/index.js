import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFrog,
  faListUl,
  faListOl,
  faPenAlt,
  faGlobeAmericas,
  faBookOpen,
  faComment,
  faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";
import * as serviceWorker from "./serviceWorker";
import { PostListProvider } from "./contexts/PostListContext";
import { PostProvider } from "./contexts/PostContext";
import App from "./components/App/App";
import "./index.css";

library.add(
  faFrog, // logo
  faListUl, // style: listicle
  faListOl, // style: howto
  faGlobeAmericas, // style: news
  faPenAlt, // style: interview
  faBookOpen, // style: story
  faComment,
  faQuoteLeft
);

ReactDOM.render(
  <BrowserRouter>
    <PostListProvider>
      <PostProvider>
        <App />
      </PostProvider>
    </PostListProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
