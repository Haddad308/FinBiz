"use client";

import Comment from "@/components/Comment";
import CommentSk from "@/components/CommentSk";
import { addComment, fetchComments } from "@/handlers";
import { Button, Pagination, Textarea } from "@nextui-org/react";
import { Key, Suspense, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter, useSearchParams } from "next/navigation";
import { Locale } from "@/i18n.config";

type CommentType = {
  user: any;
  id: number;
  userName: string;
  body: string;
};

export default function Comments({ params: { lang } }: { params: { lang: Locale } }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // const urlPage = parseInt(router.query.page as string, 10);
  const urlPage = searchParams?.get("page") ? parseInt(searchParams.get("page") as string, 10) : 1;

  const [comments, setComments] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const ITEMS = 5; // Number of comments per page

  const formik = useFormik({
    initialValues: {
      body: ""
    },
    validationSchema: Yup.object({
      body: Yup.string().required("Required")
    }),
    onSubmit: () => {
      addComment({ body: formik.values.body, postId: 1, userId: 1 }).then(() => {
        fetchComments(ITEMS, page * ITEMS - ITEMS, setIsLoading, setTotal).then((data) =>
          setComments(data as unknown as CommentType[])
        );
      });
    }
  });

  useEffect(() => {
    if (urlPage !== page) {
      setPage(urlPage || 1); // Update page state if URL page changes
    }
    fetchComments(ITEMS, page * ITEMS - ITEMS, setIsLoading, setTotal).then((data) =>
      setComments(data as unknown as CommentType[])
    );
  }, [page, urlPage]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    router.push(`?page=${newPage}`);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex  items-center justify-center">
        <main className="my-20 flex w-5/6 flex-col items-center justify-center md:w-1/3">
          <h1 className="mb-5 self-start text-2xl font-bold">Add your comment</h1>
          <div className="w-full">
            <Textarea
              label="Comment"
              name="body"
              variant="bordered"
              placeholder="Enter your comment here..."
              disableAnimation
              disableAutosize
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.body.trim()}
              classNames={{
                base: "w-full",
                input: "resize-y min-h-[40px]"
              }}
            />
            {formik.touched.body && !!formik.errors.body && (
              <span className="ms-1 text-sm text-red-500 ">{formik.errors.body}</span>
            )}
          </div>
          <div className="mt-5 self-start">
            <Button
              color="primary"
              type="submit"
            >
              Post
            </Button>
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
            onChange={(page: number) => handlePageChange(page)}
            isCompact
            showControls
            total={Math.ceil(total / ITEMS)}
            initialPage={urlPage}
          />
        </main>
      </div>
    </form>
  );
}
