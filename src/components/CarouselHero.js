import React, { useState, useEffect, useRef } from "react"
import { HeroContent, HeroWrapper } from "./Hero"
import { Fade } from "@material-ui/core"

const CarouselHeroContent = ({ content, interval }) => {
  const [, rerender] = useState()
  const index = useRef(0)
  useEffect(() => {
    const intervalRef = setInterval(() => {
      index.current = (index.current + 1) % content.length
      rerender(index.current)
    }, interval)
    return () => clearInterval(intervalRef)
  }, [])
  if (!content.length) throw new Error("Content cannot be empty!")
  const {
    title,
    subtitle,
    cta,
    onClick
  } = content[index.current];
  return (
    <Fade timeout={1000} appear in key={index.current}>
      <HeroContent
        title={title}
        subtitle={subtitle}
        cta={cta}
        onClick={onClick}
      />
    </Fade>
  )
}

export default ({ content, imageSrc, interval = 5000, id = null, fullScreen = false }) => {
  return (<HeroWrapper
      imageSrc={imageSrc}
      id={id}
      fullScreen={fullScreen}
    >
      <CarouselHeroContent content={content} interval={interval}/>
    </HeroWrapper>
  )
}
