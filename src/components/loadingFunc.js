import React, { useEffect } from 'react'

const Loading = (props) => {

    useEffect(() => {
        const myInterval = setInterval(() => {
            console.log('Loading...')
        }, 1000)
        return () => {
            clearInterval(myInterval);
        }
    }, [])
  return (
    <div>loading...</div>
  )
}

export default Loading