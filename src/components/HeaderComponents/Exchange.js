import React from 'react';

/**
 * Компонент, создающий структуру валюты.
 */

export default function Exchange(props) {
  return (
    <li className="exchange-item">
      <a href="/#">{props.type}</a>
      <div>{props.value}</div>
      <div>{props.symbol}{props.differences}</div>
    </li>
  )
}
