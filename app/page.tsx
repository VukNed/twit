import Image from "next/image";
import Link from "next/link";
//import ProductCard from "./components/productcard";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Feed</h1>

        <div>Suggested Posts</div>

        <div>Who to follow</div>

        <div>Recent</div>
        <Link href="/profile">Profile</Link>
        <div></div>
        <Link href="/gpt">GPT</Link>
      </div>
    </main>
      )
}
