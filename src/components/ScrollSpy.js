import React, { useEffect, useState } from "react"
import debounce from "debounce"
import { idsInViewport } from "../helpers"

const ScrollSpy = ({ ids, children }) => {
  const [map, set] = useState(
    ids.reduce((acc, id) => ({ [id]: false, ...acc }), { top: true })
  )
  useEffect(() => {
    if (window) {
      window.addEventListener(
        "scroll",
        debounce(() => set(idsInViewport(ids)), 200)
      )
    }
  }, [])
  return children(map)
}

export default ScrollSpy
