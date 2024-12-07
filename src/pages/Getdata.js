import React, { useEffect } from 'react'

function Getdata() {

    const getuser = () => {
        fetch("/api/user").then(res => res.json().then(json => console.log(json)))
    }
    useEffect(() => {
        getuser()
    }, [])
    return (
        <div>

        </div>
    )
}

export default Getdata
