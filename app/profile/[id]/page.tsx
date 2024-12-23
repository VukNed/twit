
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  image: string;
  address: {
    state: string;
    country: string;
  };
  company: {
    department: string;
  };
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
          &lt;
        </Link>
        <h1 className="text-xl font-semibold text-gray-800">Profile</h1>
        <div></div> {/* Empty div to balance flex space */}
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Profile Section */}
        <div className="relative">
          <div className="w-full h-32 bg-gradient-to-r from-purple-300 to-yellow-100 rounded-t-lg"></div>

          <div className="relative bg-white p-6 rounded-lg shadow-lg -mt-16 flex flex-col sm:flex-row items-center sm:space-x-6">
            <Image className="relative p-6"
              src="/pfp.png" 
              alt="User Avatar"
              width={100}
              height={100}
              className="rounded-full -mt-20 sm:-mt-40"
              />
            <div className="text-center sm:text-left mt-4 sm:mt-0">
              <h1 className="text-2xl font-semibold text-gray-800">{`${user.firstName} ${user.lastName}`}</h1>
              <p className="text-gray-500 text-sm">@{user.username}</p>
              <p className="text-gray-500 text-sm">{user.email}</p>
              <p className="text-gray-500 text-sm">{user.address.state}, {user.address.country}</p>
              <p className="bg-blue-100 text-blue-600 rounded-lg p-2 inline-block px-2 py-1">{user.company.department}</p>


              <div className="mt-4 flex space-x-4">
              <button className="px-4 py-2 text-sm font-semibold text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
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

