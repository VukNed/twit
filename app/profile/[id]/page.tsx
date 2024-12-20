// import React from 'react'
// import Link from 'next/link'

// const UsersPage = () => {
//   return (
//     <div>
//       <div>
//         <div>      
//           <Link href="/">
//             <button
//               style={{
//                 padding: '10px 20px',
//                 backgroundColor: '#0070f3',
//                 color: '#fff',
//                 border: 'none',
//                 borderRadius: '5px',
//                 cursor: 'pointer',
//               }}
//             >
//         Go to Home 
//             </button>
//     </Link></div>
//       </div>
//       <div>
//         <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">

//   <div className="flex items-center space-x-4 mb-6">
//     <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl">
//       <span className="font-bold">EJ</span>
//     </div>
//     <div>
//       <h1 className="text-2xl font-semibold text-gray-800">Emily Johnson</h1>
//       <p className="text-gray-500 text-sm">@emilyjs | New York, United States</p>
//       <p className="text-gray-500 text-sm">Engineering</p>
//       <div className="mt-4 flex space-x-4">
//         <button className="px-4 py-2 bg-purple-600 text-white rounded-full">Follow</button>
//         <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full">Message</button>
//       </div>
//     </div>
//   </div>


//   <div>
//     <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent</h2>
//     <div className="space-y-4">

//       <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
//         <div className="flex items-center space-x-2 mb-2">
//           <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center">
//             <span className="font-bold">EJ</span>
//           </div>
//           <div>
//             <h3 className="text-gray-800 font-semibold">Emily Johnson</h3>
//             <p className="text-sm text-gray-500">@emilyjs</p>
//           </div>
//         </div>
//         <p className="text-gray-700">Post body lorem ipsum dolor sit amet consectetur. Stem vestibulum massa luctus.</p>
//         <div className="mt-2 text-purple-600">
//           <span>#tag1</span> <span>#tag2</span> <span>#tag3</span>
//         </div>
//         <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
//           <span>20 Likes</span>
//           <span>74 Shares</span>
//           <span>1,230 Views</span>
//         </div>
//       </div>

//     </div>
//   </div>
// </div>

//     </div>
//       <div>Recent</div>
//     </div>
//   )
// }

// export default UsersPage

// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Link from "next/link";

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
//   username: string;
//   email: string;
//   image: string;
// }

// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   likes: number;
//   tags: string[];
// }

// export default function ProfilePage() {
//   const { id } = useParams(); // Get the user ID from the route
//   const [user, setUser] = useState<User | null>(null);
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch user and posts data
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const userRes = await fetch(`https://dummyjson.com/users/${id}`);
//         const userData = await userRes.json();
//         setUser(userData);

//         const postsRes = await fetch(`https://dummyjson.com/posts/user/${id}`);
//         const postsData = await postsRes.json();
//         setPosts(postsData.posts);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [id]);

//   if (loading) {
//     return <p className="text-center mt-10">Loading...</p>;
//   }

//   if (!user) {
//     return <p className="text-center mt-10 text-red-500">User not found.</p>;
//   }

//   return (
//     <main className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//       {/* User Info */}
//       <div className="flex items-center space-x-4 mb-6">
//         <img
//           src={user.image}
//           alt={`${user.firstName} ${user.lastName}`}
//           className="w-24 h-24 rounded-full object-cover"
//         />
//         <div>
//           <h1 className="text-2xl font-bold">{`${user.firstName} ${user.lastName}`}</h1>
//           <p className="text-gray-500">@{user.username}</p>
//           <p className="text-sm text-gray-600">{user.email}</p>
//         </div>
//       </div>

//       {/* User Posts */}
//       <h2 className="text-xl font-semibold mb-4">Posts by {user.firstName}</h2>
//       {posts.length > 0 ? (
//         posts.map((post, index) => (
//           <div key={`post-${post.id}-${index}`} className="p-4 border rounded mb-2">
//             <h3 className="font-bold text-lg">{post.title}</h3>
//             <p>{post.body}</p>
//             <p className="text-gray-500 mt-2">{post.likes} Likes</p>
//             <div className="flex space-x-2 text-blue-500 text-sm">
//               {post.tags.map((tag) => (
//                 <span key={tag}>#{tag}</span>
//               ))}
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No posts available for this user.</p>
//       )}

//       {/* Back to Feed */}
//       <div className="text-center mt-6">
//         <Link href="/" className="text-blue-500 hover:underline">
//           Back to Feed
//         </Link>
//       </div>
//     </main>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  image: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  likes: number;
  tags: string[];
}

export default function ProfilePage() {
  const { id } = useParams(); // Get the user ID from the route
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRes = await fetch(`https://dummyjson.com/users/${id}`);
        const userData = await userRes.json();
        setUser(userData);

        const postsRes = await fetch(`https://dummyjson.com/posts/user/${id}`);
        const postsData = await postsRes.json();
        setPosts(postsData.posts);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!user) {
    return <p className="text-center mt-10 text-red-500">User not found.</p>;
  }

  return (
    <div className="w-full bg-gray-100 min-h-screen px-4 sm:px-6">
      {/* Top Bar */}
      <div className="w-full flex items-center justify-between bg-white mb-2 shadow-md py-4 px-6">
        <Link href="/" className="text-gray-600 hover:text-gray-800 font-medium">
          &larr; Back
        </Link>
        <h1 className="text-xl font-semibold text-gray-800">Profile</h1>
        <div></div> {/* Empty div to balance flex space */}
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Profile Section */}
        <div className="relative">
          <div className="w-full h-32 bg-gradient-to-r from-purple-300 to-yellow-100 rounded-t-lg"></div>

          <div className="relative bg-white p-6 rounded-lg shadow-lg -mt-16 flex items-center space-x-6">
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-24 h-24 rounded-full border-4 border-white object-cover -mt-12"
            />
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">{`${user.firstName} ${user.lastName}`}</h1>
              <p className="text-gray-500 text-sm">@{user.username}</p>
              <p className="text-gray-500 text-sm">{user.email}</p>
              <div className="mt-4 flex space-x-4">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-full">
                  Follow
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Posts by {user.firstName}</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={`post-${post.id}`}
                className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white"
              >
                <h3 className="font-bold text-lg">{post.title}</h3>
                <p className="text-gray-700">{post.body}</p>
                <div className="mt-2 flex space-x-2 text-blue-500 text-sm">
                  {post.tags.map((tag) => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </div>
                <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                  <span>{post.reactions.likes} Likes</span>
                  <span>{post.reactions.dislikes} Shares</span>
                  <span>{post.views} Views</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

