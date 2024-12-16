"use client";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Profile() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts); // Store the fetched posts
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src="path/to/your/avatar.jpg"
          alt="Emily Johnson"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Emily Johnson</h1>
          <p className="text-gray-500 text-sm">@emilyjs | New York, United States</p>
          <p className="text-gray-500 text-sm">Engineering</p>
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

      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent</h2>
        <div className="space-y-4">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post.id}
                className="p-4 border border-gray-200 rounded-lg shadow-sm"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <img
                    src="path/to/your/avatar.jpg"
                    alt="Emily Johnson"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-gray-800 font-semibold">Emily Johnson</h3>
                    <p className="text-sm text-gray-500">@emilyjs</p>
                  </div>
                </div>
                <p className="text-gray-700">{post.body}</p>
                <div className="mt-2 text-purple-600">
                  <span>#tag1</span> <span>#tag2</span> <span>#tag3</span>
                </div>
                <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                  <span>{post.likes} Likes</span>
                  <span>{post.views} Views</span>
                </div>
              </div>
            ))
          ) : (
            <p>Loading posts...</p>
          )}
        </div>
      </div>
    </div>
  );
}
