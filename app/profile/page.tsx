import React from 'react'
import Link from 'next/link'

const UsersPage = () => {
  return (
    <div>
      <div>
        <div>      
          <Link href="/">
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#0070f3',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
        Go to Home 
            </button>
    </Link></div>
      </div>
      <div>
        <div class="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">

  <div class="flex items-center space-x-4 mb-6">
    <div class="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl">
      <span class="font-bold">EJ</span>
    </div>
    <div>
      <h1 class="text-2xl font-semibold text-gray-800">Emily Johnson</h1>
      <p class="text-gray-500 text-sm">@emilyjs | New York, United States</p>
      <p class="text-gray-500 text-sm">Engineering</p>
      <div class="mt-4 flex space-x-4">
        <button class="px-4 py-2 bg-purple-600 text-white rounded-full">Follow</button>
        <button class="px-4 py-2 border border-gray-300 text-gray-700 rounded-full">Message</button>
      </div>
    </div>
  </div>


  <div>
    <h2 class="text-xl font-semibold text-gray-800 mb-4">Recent</h2>
    <div class="space-y-4">

      <div class="p-4 border border-gray-200 rounded-lg shadow-sm">
        <div class="flex items-center space-x-2 mb-2">
          <div class="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center">
            <span class="font-bold">EJ</span>
          </div>
          <div>
            <h3 class="text-gray-800 font-semibold">Emily Johnson</h3>
            <p class="text-sm text-gray-500">@emilyjs</p>
          </div>
        </div>
        <p class="text-gray-700">Post body lorem ipsum dolor sit amet consectetur. Stem vestibulum massa luctus.</p>
        <div class="mt-2 text-purple-600">
          <span>#tag1</span> <span>#tag2</span> <span>#tag3</span>
        </div>
        <div class="mt-2 flex items-center space-x-4 text-sm text-gray-500">
          <span>20 Likes</span>
          <span>74 Shares</span>
          <span>1,230 Views</span>
        </div>
      </div>

    </div>
  </div>
</div>

    </div>
      <div>Recent</div>
    </div>
  )
}

export default UsersPage