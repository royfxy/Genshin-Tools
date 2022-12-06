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
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  src,
  element,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={src} alt={character.name} fill />
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
