"use client";

import Link from "next/link";

export default function Comments() {
  return (
    <main>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 lg:py-16">
        <div className="mx-auto max-w-2xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <Link
              className="text-lg font-bold"
              href="/"
            ></Link>
          </div>
          <form
            // onSubmit={}
            className="mb-6"
          >
            <div className="mb-4 rounded-lg rounded-t-lg border border-gray-200 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
              <label
                htmlFor="comment"
                className="sr-only"
              ></label>
              <textarea
                id="comment"
                onChange={(e) => {}}
                rows={6}
                className="w-full border-0 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a comment..."
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-xs font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900"
            ></button>
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
