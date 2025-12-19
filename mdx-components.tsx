import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
      size,
    }: {
      src: string
      alt: string
      caption: string
      size?: number
    }) => {
      return (
        <figure>
          <img src={src} alt={alt} className="rounded-xl" width={size} />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
  }
}
