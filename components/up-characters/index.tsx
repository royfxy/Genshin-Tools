import React from "react"
import CharacterCard from "../character-card"

import styles from "./index.module.scss"
import { Character } from "lib/utils/characters"

interface UpCharactersPhaseProps {
  characters: Character[]
}

const UpCharactersPhase: React.FC<UpCharactersPhaseProps> = ({
  characters,
}) => {
  // import images
  const images = characters.map((character) => {
    return require(`/public/images/character-card/${character.cardImage}`)
  })

  return (
    <div className={styles.listContainer}>
      {characters.map((character, index) => (
        <CharacterCard
          key={index}
          character={character}
          src={images[index]}
          element={character.element}
        />
      ))}
    </div>
  )
}

interface UpCharactersPhaseListProps {
  phases: Character[][]
}

export const UpCharactersPhaseList: React.FC<UpCharactersPhaseListProps> = ({
  phases,
}) => {
  return (
    <div className={styles.phaseContainer}>
      {phases.map((characters, index) => (
        <UpCharactersPhase key={index} characters={characters} />
      ))}
    </div>
  )
}

export default UpCharactersPhase
