import Link from "next/link"; 
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <h1>Home page</h1>
      <Link href="/blog" legacyBehavior>
        <a>Blog</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
      <Link href="/docs" legacyBehavior>
        <a>Document</a>
      </Link>
    </>
  );
}
