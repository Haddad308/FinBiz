/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Comment from "@/components/comments/Comment";
import CommentSk from "@/components/comments/CommentSk";
import { addComment, fetchComments } from "@/handlers";
import { Button, Pagination, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter, useSearchParams } from "next/navigation";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { useUser } from "@/contexts/userContext";

type CommentType = {
  user: { fullName: string };
  id: number;
  body: string;
};

type NavigationType = {
  comment: string;
  comments: string;
  addcomment: string;
  entercomment: string;
  submit_comment: string;
};

export default function Comments({ params: { lang } }: { params: { lang: Locale } }) {
  const [navigation, setNavigation] = useState<NavigationType>({
    comment: "",
    comments: "",
    addcomment: "",
    entercomment: "",
    submit_comment: ""
  });

  const fetchDictionary = async () => {
    const dictionary = await getDictionary(lang);
    setNavigation({
      ...dictionary.comments,
      addcomment: dictionary.comments.addcomment
    });
  };

  useEffect(() => {
    fetchDictionary();
  }, [lang]);

  const searchParams = useSearchParams();
  const router = useRouter();
  const urlPage = searchParams?.get("page") ? parseInt(searchParams.get("page") as string, 10) : 1;

  const [comments, setComments] = useState<CommentType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(urlPage);
  const [isLoadingS, setIsLoadingS] = useState<boolean>(false);
  const ITEMS = 5; // Number of comments per page

  const formik = useFormik({
    initialValues: {
      body: ""
    },
    validationSchema: Yup.object({
      body: Yup.string().required("Required")
    }),
    onSubmit: async (_, { resetForm }) => {
      await addComment({ body: formik.values.body.trim(), postId: 1, userId: 1 }, setIsLoadingS);
      fetchCommentsData();
      resetForm();
    }
  });
  const { user, loading } = useUser();

  const fetchCommentsData = async () => {
    setIsLoading(true);
    const data = await fetchComments(ITEMS, (page - 1) * ITEMS, setIsLoading, setTotal);
    setComments(data as unknown as CommentType[]);
    setIsLoading(false);
  };

  useEffect(() => {
    if (urlPage !== page) {
      setPage(urlPage);
    }
    fetchCommentsData();
  }, [page, urlPage]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    router.push(`?page=${newPage}`);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex items-center justify-center">
        <main className="my-20 flex w-5/6 flex-col items-center justify-center md:w-1/3">
          {!loading && user ? (
            <>
              <h1 className="mb-5 self-start text-2xl font-bold">{navigation.addcomment}</h1>
              <div className="w-full">
                <Textarea
                  label={navigation.comment}
                  name="body"
                  variant="bordered"
                  placeholder={navigation.entercomment}
                  disableAnimation
                  disableAutosize
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.body}
                  classNames={{
                    base: "w-full",
                    input: "resize-y min-h-[40px]"
                  }}
                />
                {formik.touched.body && formik.errors.body && (
                  <span className="ms-1 text-sm text-red-500">{formik.errors.body}</span>
                )}
              </div>
              <div className="mt-5 self-start">
                <Button
                  color="primary"
                  type="submit"
                  isLoading={isLoadingS}
                >
                  {navigation.submit_comment}
                </Button>
              </div>
              <div className="mt-5 h-[1px] w-full bg-gray-300" />
            </>
          ) : null}
          <h1 className="mb-5 mt-5 self-start text-2xl font-bold">{navigation.comments}</h1>
          <div className="mb-5 flex w-full flex-col gap-4">
            {isLoading ? (
              <>
                <CommentSk />
                <CommentSk />
                <CommentSk />
                <CommentSk />
                <CommentSk />
              </>
            ) : (
              comments.map((comment: CommentType, idx: number) => (
                <Comment
                  id={idx * page}
                  key={comment.id}
                  userName={comment.user.fullName}
                  commentBody={comment.body}
                />
              ))
            )}
          </div>
          <Pagination
            onChange={handlePageChange}
            isCompact
            showControls
            total={Math.ceil(total / ITEMS)}
            initialPage={urlPage}
            dir="ltr"
          />
        </main>
      </div>
    </form>
  );
}
