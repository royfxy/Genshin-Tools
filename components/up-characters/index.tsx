import React, { useEffect, useState } from "react"
import CharacterCard from "../character-card"

import styles from "./index.module.scss"
import { Character } from "lib/utils/characters"
import { SwiperSelector, SwiperSelectorItem } from "components/swiper-selector"
import cs from "classnames"

interface UpCharactersPhaseProps {
  characters: Character[]
  selected: boolean
}

const UpCharactersPhase: React.FC<UpCharactersPhaseProps> = ({
  characters,
  selected,
}) => {
  // import images
  const images = characters.map((character) => {
    return require(`/public/images/character-card/${character.cardImage}`)
  })

  const [classNames, setClassNames] = useState<string>("")

  useEffect(() => {
    setClassNames(cs(styles.phaseContainer, { [styles.selected]: selected }))
  }, [selected])

  return (
    <div className={cs(classNames)}>
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
    <SwiperSelector value={1}>
      {/* <Swiper value={1} className={styles.listContainer}>*/}
      {phases.map((characters, index) => (
        <SwiperSelectorItem key={index}>
          <UpCharactersPhase selected={false} characters={characters} />
        </SwiperSelectorItem>
      ))}
    </SwiperSelector>
  )
}

export default UpCharactersPhase
