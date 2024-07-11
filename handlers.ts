import { saveCookies } from "./lib";

export async function login(
  username: string,
  password: string,
  setIsLoading: (isLoading: boolean) => void,
  setApiError: (error: string | null) => void
): Promise<void> {
  setIsLoading(true);
  setApiError(null);

  try {
    console.log("Logging in...");

    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    saveCookies(data);
  } catch (error: any) {
    setApiError(error.message);
  } finally {
    setIsLoading(false);
  }
}

export async function register(
  firstName: string,
  lastName: string,
  age: number,
  username: string,
  password: string
): Promise<void> {
  const response = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName,
      lastName,
      username,
      age,
      password
      // Add other user data if needed
    })
  });

  const data = await response.json();
}

interface Comment {
  body: string;
  postId: number;
  // Add other fields if necessary
}

export async function fetchComments(
  limit: number,
  skip: number,
  setIsLoading: (isLoading: boolean) => void,
  setTotal: (total: number) => void
): Promise<Comment[]> {
  setIsLoading(true);
  try {
    const response = await fetch(`https://dummyjson.com/comments?limit=${limit}&skip=${skip}&select=body,postId`, {
      next: { tags: ["getComments"] }
    });
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }
    const data = await response.json();
    setTotal(data.total);
    return data.comments; // Adjust based on the actual structure of the response
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error; // Re-throw the error to be handled by the calling function
  } finally {
    setIsLoading(false);
  }
}

interface NewComment {
  body: string;
  postId: number;
  userId: number;
  // Add other fields if necessary
}

interface CommentResponse {
  id: number;
  body: string;
  postId: number;
  userId: number;
  // Add other fields if necessary
}

export async function addComment(
  comment: NewComment,
  setIsLoading: (isLoading: boolean) => void
): Promise<CommentResponse> {
  setIsLoading(true);
  try {
    const response = await fetch("https://dummyjson.com/comments/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment)
    });

    if (!response.ok) {
      throw new Error("Failed to add comment");
    }
    // revalidateTag("getComments");

    const data = await response.json();
    return data; // Adjust based on the actual structure of the response
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error; // Re-throw the error to be handled by the calling function
  } finally {
    setIsLoading(false);
  }
}
