import React from 'react'

export default function UserAddress({ user }) {
    return (
        <div className='address-block top-fixed'>
            <p>{user.address.city},
            {user.address.street},
            {user.address.suite}</p>
            <p>{user.address.zipcode}</p>
        </div>
    )
}
