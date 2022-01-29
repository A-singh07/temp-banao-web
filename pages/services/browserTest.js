import { useState, useEffect } from 'react'

// function useWindowSize() {
//   const [size, setSize] = useState([window.innerHeight, window.innerWidth])
//   useEffect(() => {
//     const handleResize = () => {
//       setSize([window.innerHeight, window.innerWidth])
//     }
//     window.addEventListener('resize', handleResize)
//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
//   }, [])
//   return size
// }

const BrowserTest = () => {
  // const [height, width] = useWindowSize()
  // const [width, setWidth] = useState(0)

  // useEffect(() => {
  //   const handleResize = () => setWidth(window.innerWidth)
  //   window.addEventListener('resize', handleResize)
  //   console.log(width)
  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [width])

  return (
    <div>
      This is Test
      <p>Screen Width is : {/*<span>{width}</span>*/} </p>

      {/*
        width >= 1000 ? (
          <p>This is Desktop Mode</p>
        ) : (
          <p>This is Mobile</p>
        )
        */}
    </div>
  )
}

export default BrowserTest
