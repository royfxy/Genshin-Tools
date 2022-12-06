import wishData from "public/content-configs/wish.json"
import { Character, charactersMap } from "./characters"

interface Wish {
  id: number
  name: string
  characters: {
    id: number
    char_id: string
  }[]
}

const wishes: Wish[] = wishData

const wishCharacters: Character[][] = wishes.map((wish) => {
  return wish.characters.map((char) => charactersMap[char.char_id])
})

export { wishes, wishCharacters }
