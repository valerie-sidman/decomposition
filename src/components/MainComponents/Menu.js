import React from 'react';

/**
 * Компонент, создающий разделы сайта.
 */

export default function Menu(props) {
  return (
    <li className="menu-list">
      <a href="/#">{props.item}</a>
    </li>
  )
}