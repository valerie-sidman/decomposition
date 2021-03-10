import React from 'react';

/**
 * Основной компонент. На нем построено большинство элементов-списоков.
 */

export default function List({name, items}) {
  return (
    <ul className={name}>
      {items.map((news) => news)}
    </ul>
  )
}
