'use client'
 
import { useEffect, useState } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('In use effect.')
  }, [])
 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {console.log(count); setCount(count + 1);}}>Click me</button>
    </div>
  )
}