export async function login(username: string, password: string): Promise<void> {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await response.json();
  console.log(data);
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
