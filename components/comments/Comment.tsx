import { Avatar } from "@nextui-org/react";
import React from "react";

interface CommentProps {
  userName: string;
  commentBody: string;
  id: number;
}

const Comment = ({ userName, commentBody, id }: CommentProps) => {
  return (
    <div className="flex w-full items-start justify-start  gap-3 rounded-lg bg-slate-100 p-2  dark:bg-primaryDark ">
      <div>
        <Avatar
          src={`https://i.pravatar.cc/150?u=a0425811${id}4e2911402d`}
          size="lg"
        />
      </div>
      <div>
        <h1 className="text-lg font-bold">{userName}</h1>
        <p className="text-gray-500 dark:text-gray-200">{commentBody}</p>
      </div>
    </div>
  );
};

export default Comment;
