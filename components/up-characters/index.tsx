import React, { useEffect, useState } from "react"
import CharacterCard from "../character-card"

import styles from "./index.module.scss"
import { Character } from "lib/utils/characters"
import { SwiperSelector, SwiperSelectorItem } from "components/swiper-selector"
import cs from "classnames"

interface UpCharactersPhaseProps {
  characters: Character[]
  selected: boolean
  onClick?: () => void
}

const UpCharactersPhase: React.FC<UpCharactersPhaseProps> = ({
  characters,
  selected,
  onClick,
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
    <div className={cs(classNames)} onClick={onClick}>
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
  const [selected, setSelected] = useState<number>(0)

  return (
    <SwiperSelector value={1}>
      {/* <Swiper value={1} className={styles.listContainer}>*/}
      {phases.map((characters, index) => (
        <SwiperSelectorItem key={index}>
          <UpCharactersPhase
            selected={index == selected}
            characters={characters}
            onClick={() => setSelected(index)}
          />
        </SwiperSelectorItem>
      ))}
    </SwiperSelector>
  )
}

export default UpCharactersPhase
