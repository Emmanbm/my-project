import React from 'react'

const Logout = () => {
    return (
        <>
            <div style={{ background: 'red' }}>Do you really want to logout ?</div>
            {
                [1, 2, 3, 4, 5, 6, 7].map(element => (
                    <div key={element}>{element}</div>
                ))

            }
        </>
    )
}

export default Logout