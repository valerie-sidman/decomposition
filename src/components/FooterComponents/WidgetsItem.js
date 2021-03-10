import React from 'react';

/**
 * Компонент, представляющий из себя наполнение виджетов, которые состоят из списка.
 */

export default function WidgetsItem(props) {
  return (
    <li className="widgets-list-item">
      <div class="widgets-item-body">
        {props.children}
      </div>
    </li>
  )
}
