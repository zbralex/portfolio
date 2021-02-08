export interface Projects {
  id: number,
  name: string,
  route: string,
  description: string,
  technologies: string,
  images: Array<Image>
}
export interface Image {
  src: string,
  srcset: string,
  alt?: string,
  title?: string
}
