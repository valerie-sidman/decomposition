import React from 'react';

/**
 * Компонент заголовков.
 */

export default function Title(props) {
  return (
    <li>
      <a href="/#">{props.title}</a>
    </li>
  )
}