
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Post {
  id: number;
  body: string;
  likes: number;
  views: number;
  tags: string[];
  userId: number;
}

interface User {
  id: number;
  username: string;
  name: string;
  image: string; // Add if you have user avatars
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [suggestedPosts, setSuggestedPosts] = useState<Post[]>([]);
  const [whoToFollow, setWhoToFollow] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const res = await fetch(`https://dummyjson.com/posts?limit=5&skip=${(page - 1) * 5}`);
    const data = await res.json();
    setPosts((prev) => [...prev, ...data.posts]);
    setLoading(false);
  };

  const fetchTopPosts = async () => {
    const res = await fetch("https://dummyjson.com/posts");
    const data = await res.json();
    const sortedPosts = data.posts.sort((a: Post, b: Post) => b.likes - a.likes);
    setSuggestedPosts(sortedPosts.slice(0, 2));
  };

  const fetchWhoToFollow = async () => {
    const userRes = await fetch("https://dummyjson.com/users");
    const users = await userRes.json();

    const postRes = await fetch("https://dummyjson.com/posts");
    const posts = await postRes.json();

    const userPostCount: { [key: number]: number } = {};
    posts.posts.forEach((post: Post) => {
      userPostCount[post.userId] = (userPostCount[post.userId] || 0) + 1;
    });

    const sortedUsers = users.users
      .map((user: User) => ({
        ...user,
        postCount: userPostCount[user.id] || 0,
      }))
      .sort((a, b) => b.postCount - a.postCount)
      .slice(0, 4);

    setWhoToFollow(sortedUsers);
  };

  useEffect(() => {
    fetchPosts();
    fetchTopPosts();
    fetchWhoToFollow();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !loading) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <main>
      {/* Full-width Header */}
      <header className="bg-white shadow p-4 w-full mb-2">
        <h1 className="text-2xl  text-center font-roboto" >Feed</h1>
      </header>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        {/* Suggested Posts */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Suggested Posts</h2>
          {suggestedPosts.map((post) => (
            <div key={`suggested-${post.id}`} className="p-4 border rounded mb-2">
              <p>{post.body}</p>
              <p className="text-gray-500">{post.likes} Likes</p>
            </div>
          ))}
        </div>

        {/* Who to Follow */}
        <div className="mb-8">
  <h2 className="text-xl font-semibold mb-4">Who to Follow</h2>
  <div className="grid grid-cols-2 gap-4">
    {whoToFollow.map((user) => (
      <div
        key={user.id}
        className="flex items-center p-4 border border-gray-200 rounded-lg bg-white shadow-sm"
      >
      {/* Clickable Avatar */}
        <Link href={`/profile/${user.id}`} className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 mr-4">
          <img
            src={user.image || "/default-avatar.png"}
            alt={`${user.firstName} ${user.lastName}'s avatar`}
            className="w-full h-full object-cover"
          />
        </Link>

      {/* Clickable Username */}
        <div className="flex-grow">
          <Link href={`/profile/${user.id}`}>
            <p className="font-semibold text-gray-800 hover:underline">
              {user.firstName} {user.lastName}
            </p>
          </Link>
          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
        <button
          className="px-4 py-2 text-sm font-semibold text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
        >
          Follow
        </button>
      </div>
    ))}
  </div>
</div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent</h2>
          {posts.map((post) => (
            <div key={`post-${post.id}-${post.userId}`} className="p-4 border rounded mb-2">
              <div className="flex items-center space-x-2 mb-2">
                <Link href={`/profile/${post.userId}`}>
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold cursor-pointer hover:bg-gray-400">
                    U
                  </div>
                </Link>
                <Link href={`/profile/${post.userId}`}>
                  <p className="font-semibold hover:underline cursor-pointer">
                    User {post.userId}
                  </p>
                </Link>
              </div>
              <p>{post.body}</p>
              <p className="text-gray-500">{post.likes} Likes</p>
            </div>
          ))}
        </div>
        {loading && <p className="text-center text-gray-500 mt-4">Loading...</p>}
      </section>
    </main>
  );
}
