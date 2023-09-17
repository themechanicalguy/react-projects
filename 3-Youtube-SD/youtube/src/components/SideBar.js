import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // early return
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg col-span-1 h-screen">
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
      </div>
      <br />
      <div>
        <h1 className="font-bold">Subscription</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movie</li>
        </ul>
      </div>
      <br />
      <div>
        <h1 className="font-bold">Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movie</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
