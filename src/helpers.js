export const idsInViewport = ids => {
  if (!window) return ids.reduce((acc, id) => ({ [id]: false, ...acc }), { top: true })
  const { pageYOffset, innerHeight } = window
  return ids
    .map(id => {
      const e = document.getElementById(id)
      const { offsetTop, scrollHeight } = e
      const inViewport = a => a >= pageYOffset && a <= pageYOffset + innerHeight
      return [
        id,
        inViewport(offsetTop) || inViewport(offsetTop + scrollHeight),
        offsetTop,
      ]
    })
    .sort(([, , offsetA], [, , offsetB]) => offsetA - offsetB)
    .reduce(({ gotCurrent, ids }, [id, inViewport]) => ({
      ids: {
        [id]: gotCurrent ? false : inViewport,
        ...ids
      },
      gotCurrent: gotCurrent || inViewport
    }), {
      gotCurrent: pageYOffset === 0,
      ids: {top: pageYOffset === 0 },
    })
    .ids
}
