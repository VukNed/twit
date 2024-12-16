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
    <div>Profile</div>
      </div>
      <div>
         User karitca sa slikom i podacima
      </div>
      <div>Recent</div>
    </div>
  )
}

export default UsersPage