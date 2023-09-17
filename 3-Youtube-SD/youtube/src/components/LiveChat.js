import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("api polling");

      dispatch(addMessage({ name: "saurav", message: "namaste react" }));
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessage.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}

      {/* <ChatMessage name="Saurav Rath" message="I am awesome" />
      <ChatMessage name="Saurav Rath" message="I am awesome" />
      <ChatMessage name="Saurav Rath" message="I am awesome" />
      <ChatMessage name="Saurav Rath" message="I am awesome" />
      <ChatMessage name="Saurav Rath" message="I am awesome" /> */}
    </div>
  );
};

export default LiveChat;
