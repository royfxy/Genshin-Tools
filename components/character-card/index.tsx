import { Character } from "lib/utils/characters"
import Image from "next/image"
import React from "react"
import { FormattedMessage } from "react-intl"
import Stars from "../stars"
import styles from "./index.module.scss"

interface CharacterCardProps {
  character: Character
  src: string
  element: Elem
  onClick?: () => void
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  src,
  element,
  onClick,
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={src}
          alt={character.name}
          fill
          sizes="200px"
        />
      </div>
      <div
        className={styles.nameContainer}
        style={{
          background: `linear-gradient(0deg, var(--color-element-${element}-dark) 0%, transparent 100%)`,
        }}
      >
        {<FormattedMessage id={`character.${character.id}`} />}
        <Stars number={character.stars} />
      </div>
    </div>
  )
}

export default CharacterCard
