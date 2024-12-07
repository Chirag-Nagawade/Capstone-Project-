<<<<<<< HEAD
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
=======
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
>>>>>>> a7b0bbbf9ce2443d2de5290e518bc6b1412333ca
