import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Dashboard = async () => {
	let session;
	try {
		session = await getServerSession();
	} catch (error) {
		console.error();
	}

	if (!session?.user) return redirect('/');
	return <div>Welcome {session?.user?.name}</div>;
};

export default Dashboard;
