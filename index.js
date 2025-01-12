```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/', undefined, { shallow: true }); // Navigate back to the home page
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go back to Home</button>
    </div>
  );
}
```
Adding `{ shallow: true }` option to `router.push` solves the issue. This is because it prevents unnecessary re-renders on the home page if the route is the same.  If the route is already `/`, then it doesn't trigger an unnecessary navigation or re-rendering, thus fixing the unexpected behavior.