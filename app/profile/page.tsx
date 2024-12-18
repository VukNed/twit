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
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">

  <div className="flex items-center space-x-4 mb-6">
    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl">
      <span className="font-bold">EJ</span>
    </div>
    <div>
      <h1 className="text-2xl font-semibold text-gray-800">Emily Johnson</h1>
      <p className="text-gray-500 text-sm">@emilyjs | New York, United States</p>
      <p className="text-gray-500 text-sm">Engineering</p>
      <div className="mt-4 flex space-x-4">
        <button className="px-4 py-2 bg-purple-600 text-white rounded-full">Follow</button>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full">Message</button>
      </div>
    </div>
  </div>


  <div>
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent</h2>
    <div className="space-y-4">

      <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center">
            <span className="font-bold">EJ</span>
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold">Emily Johnson</h3>
            <p className="text-sm text-gray-500">@emilyjs</p>
          </div>
        </div>
        <p className="text-gray-700">Post body lorem ipsum dolor sit amet consectetur. Stem vestibulum massa luctus.</p>
        <div className="mt-2 text-purple-600">
          <span>#tag1</span> <span>#tag2</span> <span>#tag3</span>
        </div>
        <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
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