export const idsInViewport = ids => {
  if (!window)
    return ids.reduce((acc, id) => ({ [id]: false, ...acc }), { top: true })

  const inViewport = (offset) => offset <= window.pageYOffset + 130

  const offsets = ids
    .map(id => [id, document.getElementById(id) ? document.getElementById(id).offsetTop : Infinity])
    .sort(([, offsetA], [, offsetB]) => offsetB - offsetA)

  return [...offsets, ['top', 0]]
    .reduce(
      ({ wasSet, ids }, [id, offset]) => {
        const isIn = !wasSet && (inViewport(offset) || offset === 0)
        return {
          wasSet: wasSet || isIn,
          ids: {
            [id]: isIn,
            ...ids,
          },
        }
      },
      { wasSet: false, ids: {} }
    ).ids
}
