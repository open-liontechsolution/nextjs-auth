import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession();
  console.log(session, "SESSION");

  if (!session?.user) return redirect("/");
  return <div>Welcome {session.user.name}</div>;
};

export default Dashboard;
