export interface Skills {
  id: number,
  name: string,
  short_name: string,
  images: Array<Images>
}

export interface Images {
  id: number,
  path: string
}
