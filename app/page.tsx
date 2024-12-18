// import Image from "next/image";
// import Link from "next/link";
// //import ProductCard from "./components/productcard";

// export default function Home() {
//   return (
//     <main>
//       <div>
//         <h1>Feed</h1>

//         <div>Suggested Posts</div>

//         <div>Who to follow</div>

//         <div>Recent</div>
//         <Link href="/profile">Profile</Link>
//         <div></div>
//         <Link href="/gpt">GPT</Link>
//       </div>
//     </main>
//       )
// }

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-6">
      {/* Feed Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Feed</h1>

        {/* Suggested Posts */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Suggested Posts</h2>
          <div className="space-y-4">
            {/* Post placeholders */}
            <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
              Suggested Post 1
            </div>
            <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
              Suggested Post 2
            </div>
          </div>
        </div>

        {/* Who to Follow */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Who to Follow</h2>
          <div className="space-y-2">
            {/* User placeholders */}
            <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
              User 1
            </div>
            <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
              User 2
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Recent</h2>
          <div className="space-y-4">
            {/* Recent post placeholders */}
            <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
              Recent Post 1
            </div>
            <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
              Recent Post 2
            </div>
          </div>
        </div>
      </section>

      {/* Links */}
      <div className="mt-6 flex justify-center space-x-4">
        <Link href="/profile" className="text-purple-600 underline">
          Profile
        </Link>
        <Link href="/gpt" className="text-purple-600 underline">
          GPT
        </Link>
      </div>
    </main>
  );
}
