import clsx from "clsx"
import React from "react"
import styles from "./styles.module.css"

export type Props = {
  categories: Array<{ title: string; description: string; url: string }>
  activeCategory?: string
}

export const Categories = ({ activeCategory, categories }: Props) => (
  <div className={styles.root}>
    {categories.map(({ title, description, url }) => (
      <a
        href={url}
        key={url}
        className={clsx(styles.category, {
          [styles.active]: activeCategory === url,
        })}
      >
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </a>
    ))}
  </div>
)
