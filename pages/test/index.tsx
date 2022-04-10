import React, { useEffect, useRef } from 'react'
import { destroy, init } from 'core/vrcontent/test'

const test = () => {
  const elRef = useRef(null)
  useEffect(() => {
    init(elRef.current)
    // return () => {
    //   destroy()
    // }
  }, [])
  return <main className="font-size-zero" ref={elRef} />
}

export default test