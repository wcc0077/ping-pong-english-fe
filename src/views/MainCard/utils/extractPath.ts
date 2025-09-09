import { parse } from 'opentype.js'

export async function extract(letter:string) {
  const reader = new FileReader()

  const buffer = fetch('./fonts/ARIAL.TTF').then(res => res.arrayBuffer());
  // console.log(await buffer)
  const font = parse(await buffer)
  const path = font.getPath('a')
  console.log(path)

}
