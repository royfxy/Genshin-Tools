import characterData from "public/content-configs/characters.json"

export interface Character {
  id: string
  name: string
  element: Elem
  stars: number
  cardImage: string
}

const charactersMap: Record<string, Character> = (
  characterData as Character[]
).reduce((acc, cur) => {
  acc[cur.id] = cur
  return acc
}, {} as Record<string, Character>)

const characters: Character[] = characterData as Character[]

export { characters, charactersMap }
