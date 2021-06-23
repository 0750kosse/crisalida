export const breakpoints = {
  portrait: 860,
  medium: 980,
  laptop: 1024,
  xl: 1201,
  xxl: 1980
}

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}px) {${style}}`
}