"use client";

import Comment from "@/components/Comment";
import CommentSk from "@/components/CommentSk";
import { fetchComments } from "@/handlers";
import { Avatar, Button, Pagination, Textarea } from "@nextui-org/react";
import { Key, SetStateAction, useEffect, useState } from "react";

type CommentType = {
  user: any;
  id: number;
  userName: string;
  body: string;
};

export default function Comments() {
  const [comments, setComments] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const ITEMS = 5; // Number of comments per page

  useEffect(() => {
    fetchComments(ITEMS, page * ITEMS - ITEMS, setIsLoading, setTotal).then((data) =>
      setComments(data as unknown as CommentType[])
    );
  }, [page]);

  return (
    <div className="flex w-screen items-center justify-center">
      <main className="my-20 flex w-5/6 flex-col items-center justify-center md:w-1/3">
        <h1 className="mb-5 self-start text-2xl font-bold">Add your comment</h1>
        <Textarea
          label="Comment"
          variant="bordered"
          placeholder="Enter your comment here..."
          disableAnimation
          disableAutosize
          classNames={{
            base: "w-full",
            input: "resize-y min-h-[40px]"
          }}
        />
        <div className="mt-5 self-start">
          <Button color="primary">Post</Button>
        </div>
        <div className="mt-5 h-[1px] w-full bg-gray-300" />
        <h1 className="mb-5 mt-5 self-start text-2xl font-bold">Comments</h1>
        <div className="mb-5 flex w-full flex-col gap-4">
          {isLoading ? (
            <>
              <CommentSk />
              <CommentSk />
              <CommentSk />
            </>
          ) : (
            comments.map(
              (comment: { id: Key | null | undefined; user: { fullName: string }; body: string }, idx: number) => (
                <Comment
                  id={idx * page}
                  key={comment.id}
                  userName={comment.user.fullName}
                  commentBody={comment.body}
                />
              )
            )
          )}
        </div>
        <Pagination
          onChange={(page: SetStateAction<number>) => setPage(page)}
          isCompact
          showControls
          total={Math.floor(total / ITEMS)}
          initialPage={1}
        />
      </main>
    </div>
  );
}
