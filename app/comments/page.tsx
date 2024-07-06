"use client";

import { withCommonGetServerSideProps } from "@/utils/withCommonGetServerSideProps";
import Link from "next/link";
import {
  fetchComments,
  getRunningCommentsQueries,
  useCreateCommentMutation,
  useFetchCommentsQuery
} from "@/store/slices/api/commentsSlice";
import { getQueryErrors } from "@/utils";
import { useState } from "react";
import { useResponseToastHandler } from "@/hooks/useResponseToastHandler";
import { APIActionResponse } from "@/types";
import { useTranslation } from "next-i18next";

// export const getServerSideProps = withCommonGetServerSideProps(["comments", "common"], async ({ store }) => {
//   store.dispatch(fetchComments.initiate());

//   await Promise.all(store.dispatch(getRunningCommentsQueries()));

//   const errors = getQueryErrors(fetchComments, store);

//   if (errors) {
//     return errors;
//   }

//   return {
//     props: {}
//   };
// });

export default function Comments() {
  const { t } = useTranslation();
  // const { data } = useFetchCommentsQuery();
  // const [createComment] = useCreateCommentMutation();
  const { displayErrors } = useResponseToastHandler();

  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   if (!comment) {
  //     setError("Comment is required");
  //     return;
  //   }

  //   //any random postId and userId
  //   //to enable an undo set the body to null and see how it works when you submit the form
  //   /*const res = (await createComment({ body: null, postId: 1, userId: 1 })) as APIActionResponse<Comment>;*/
  //   const res = (await createComment({ body: comment, postId: 1, userId: 1 })) as APIActionResponse<Comment>;

  //   setIsSubmitting(false);

  //   if (displayErrors(res)) {
  //     return;
  //   }

  //   setComment("");
  //   setError("");
  // };

  return (
    <main>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 lg:py-16">
        <div className="mx-auto max-w-2xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <Link
              className="text-lg font-bold"
              href="/"
            >
              {t("common:home")}
            </Link>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white lg:text-2xl">
              {t("comments:comments", {
                // total: data?.total
                total: 50
              })}
            </h2>
          </div>
          <form
            // onSubmit={}
            className="mb-6"
          >
            <div className="mb-4 rounded-lg rounded-t-lg border border-gray-200 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
              <label
                htmlFor="comment"
                className="sr-only"
              >
                {t("comments:comment")}
              </label>
              <textarea
                id="comment"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                value={comment}
                rows={6}
                className="w-full border-0 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a comment..."
                required
              />
              {error && <p className="text-sm font-bold italic text-red-500">{error}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary-700 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 inline-flex items-center rounded-lg px-4 py-2.5 text-center text-xs font-medium text-white focus:ring-4"
            >
              {isSubmitting ? t("common:submitting") : t("comments:submit_comment")}
            </button>
          </form>
          {/* {data?.comments.map((comment) => ( */}
          <article
            // key={comment.id}
            className="rounded-lg bg-white p-6 text-base dark:bg-gray-900"
          >
            <footer className="mb-2 flex items-center justify-between">
              <div className="flex items-center">
                <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                  {/* {comment.user.fullName} */}
                  fdsfds
                </p>
              </div>
            </footer>
            <p className="text-gray-500 dark:text-gray-400">
              {/* {comment.body} */}
              vfdfds
            </p>
          </article>
          {/* ))} */}
        </div>
      </section>
    </main>
  );
}
