import { Avatar, Skeleton } from "@nextui-org/react";
import React from "react";

const CommentSk = () => {
  return (
    <div className="flex w-full items-start  justify-start gap-3 rounded-lg bg-slate-100 p-2 dark:bg-primaryDark">
      <div>
        <Skeleton className="flex h-12 w-12 rounded-full" />
      </div>
      <div>
        <Skeleton className="h-3 w-3/5 rounded-lg" />
        <Skeleton className="h-3 w-4/5 rounded-lg" />
      </div>
    </div>
  );
};

export default CommentSk;
