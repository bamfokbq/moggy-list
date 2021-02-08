import Link from 'next/link';
import Head from 'next/head'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ErrorPage = () => {
  const router = useRouter();
// Redirecting the user to the homepage when wrong URL is visited.
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className='not-found'>
    <Head>
     <title>Moggy | 404</title>
    </Head>
      <h1>Oooops!</h1>
      <h2>This page cannot be found...</h2>
      <p>
        Go back to the
        <Link href='/'>
          <a> Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
