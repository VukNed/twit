"use client";

import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

export default function Profile() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts.slice(0, 5)); // Postavlja limit na prvih 5
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="w-full bg-gray-100 min-h-screen px-4 sm:px-6">
      {/* Top Bar */}

        {/*  */}
        <div className="w-full flex items-center justify-between bg-white mb-2 shadow-md py-4 px-6">
          {/* Fixed Back Button */}
          <Link href="/" className="text-gray-600 hover:text-gray-800 font-medium">
            &larr; Back
          </Link>
          <h1 className="text-xl font-semibold text-gray-800">Profile</h1>
          <div></div> {/* Empty div to balance flex space */}
        </div>

        {/*  */}

          {/* <button
            onClick={() => router.push("/")}
            className="text-gray-600 hover:text-gray-800 font-medium"
          >
            &larr; Back
          </button> */}
        {/* <h1 className="text-xl font-semibold text-gray-800">Profile</h1> */}
        <div></div> {/* Empty div to balance flex space */}
      

      {/* Centered Container */}
      <div className="max-w-4xl mx-auto">
        {/* Profile Section */}
        <div className="relative">
          {/* Gradient Banner */}
          <div className="w-full h-32 bg-gradient-to-r from-purple-300 to-yellow-100 rounded-t-lg"></div>

          {/* Profile Card */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg -mt-16 flex items-center space-x-6">
            <img
              src="path/to/your/avatar.jpg"
              alt="Emily Johnson"
              className="w-24 h-24 rounded-full border-4 border-white object-cover -mt-12"
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
        </div>

        {/* Recent Posts Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white"
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
  // return (
  //   <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
  //     <div className="flex items-center space-x-4 mb-6">
  //       <img
  //         src="path/to/your/avatar.jpg"
  //         alt="Emily Johnson"
  //         className="w-24 h-24 rounded-full object-cover"
  //       />
  //       <div>
  //         <h1 className="text-2xl font-semibold text-gray-800">Emily Johnson</h1>
  //         <p className="text-gray-500 text-sm">@emilyjs | New York, United States</p>
  //         <p className="text-gray-500 text-sm">Engineering</p>
  //         <div className="mt-4 flex space-x-4">
  //           <button className="px-4 py-2 bg-purple-600 text-white rounded-full">
  //             Follow
  //           </button>
  //           <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full">
  //             Message
  //           </button>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="height"></div>

  //     <div>
  //       <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent</h2>
  //       <div className="space-y-4">
  //         {posts.length > 0 ? (
  //           posts.map((post) => (
  //             <div
  //               key={post.id}
  //               className="p-4 border border-gray-200 rounded-lg shadow-sm"
  //             >
  //               <div className="flex items-center space-x-2 mb-2">
  //                 <img
  //                   src="path/to/your/avatar.jpg"
  //                   alt="Emily Johnson"
  //                   className="w-8 h-8 rounded-full object-cover"
  //                 />
  //                 <div>
  //                   <h3 className="text-gray-800 font-semibold">Emily Johnson</h3>
  //                   <p className="text-sm text-gray-500">@emilyjs</p>
  //                 </div>
  //               </div>
  //               <p className="text-gray-700">{post.body}</p>
  //               <div className="mt-2 text-purple-600">
  //                 <span>#tag1</span> <span>#tag2</span> <span>#tag3</span>
  //               </div>
  //               <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
  //                 <span>{post.likes} Likes</span>
  //                 <span>{post.views} Views</span>
  //               </div>
  //             </div>
  //           ))
  //         ) : (
  //           <p>Loading posts...</p>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );
}
