import dbConnect from "@/lib/db";
import User from "@/models/User";
import type { Users } from "@/models/User";

const getUsers = async (): Promise<Users[]> => {
  await dbConnect();
  const users = await User.find<Users>({});
  return users;
};

export default async function Users() {
  const users = await getUsers();
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.email}>
            <div className="flex gap-2">
              <span>Name : {user.name}</span>
              <span>Email : {user.email}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
