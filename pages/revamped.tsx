
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/revamped/comingsoon'); // Redirect to your desired path
  }, [router]);

  return null; // Optionally, you can return a loading state or a message
};

export default HomePage;