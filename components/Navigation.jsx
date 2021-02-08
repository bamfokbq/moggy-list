import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <div className='logo'>
        <h1>KBQ-TECH</h1>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/ninjas'>
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navigation;
