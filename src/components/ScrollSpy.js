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
        debounce(() => {
          const whatsInViewport = idsInViewport(ids)
          set(whatsInViewport)
        }, 100)
      )
    }
  }, [])
  return children(map)
}

export default ScrollSpy
