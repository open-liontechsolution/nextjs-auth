import { getServerSession } from 'next-auth';
// import { redirect } from 'next/navigation';

export const getSession = () => {
	return;
};

const Dashboard = async () => {
	const session = await getServerSession();

	// if (!session?.user) return redirect('/');
	return <div>Welcome {session?.user?.name}</div>;
};

export default Dashboard;
