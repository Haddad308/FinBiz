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
  console.log(data);
}
