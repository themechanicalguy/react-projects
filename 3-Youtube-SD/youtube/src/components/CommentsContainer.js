import React from "react";

const commentsData = [
  {
    name: "Akshay Saini",
    text: "lorem ipsum dolor sit amet, consecutetur adip",
    replies: [],
  },
  {
    name: "Saurav Rath",
    text: "Not good to follow",
    replies: [
      {
        name: "Akshay Saini",
        text: "lorem ipsum dolor sit amet, consecutetur adip",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "lorem ipsum dolor sit amet, consecutetur adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "lorem ipsum dolor sit amet, consecutetur adip",
            replies: [
              {
                name: "Akshay Saini",
                text: "lorem ipsum dolor sit amet, consecutetur adip",
                replies: [
                  {
                    name: "Akshay Saini",
                    text: "lorem ipsum dolor sit amet, consecutetur adip",
                    replies: [
                      {
                        name: "Akshay Saini",
                        text: "lorem ipsum dolor sit amet, consecutetur adip",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "lorem ipsum dolor sit amet, consecutetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "lorem ipsum dolor sit amet, consecutetur adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "lorem ipsum dolor sit amet, consecutetur adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "lorem ipsum dolor sit amet, consecutetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "lorem ipsum dolor sit amet, consecutetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "lorem ipsum dolor sit amet, consecutetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "lorem ipsum dolor sit amet, consecutetur adip",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments?.map((comment, index) => {
    return (
      <div>
        <Comment key={index} data={comment} />
        <div className="pl-5 border border-l-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    );
  });
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
