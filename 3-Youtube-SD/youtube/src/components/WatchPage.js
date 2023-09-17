import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  // const params = useParams();
  const videoId = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div className="flex">
      <div className="px-5 flex flex-col">
        <iframe
          width="900"
          height="450"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Youtube Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write encrypted-media gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <CommentsContainer />
      </div>
      <LiveChat />
    </div>
  );
};

export default WatchPage;
