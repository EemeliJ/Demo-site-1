import { users } from "../route";

export async function GET(_request, context) {
  const { id } = context.params;
  const user = users.find((user) => user.id === parseInt(id));
  return new Response(JSON.stringify(user), {
    headers: {
      "Content-Type": "application/json"
    },
    status: user ? 200 : 404
  });
}

// Dynamic route handling
// This for finding a specific id from the array we created in users/route.js

