import React from 'react';

/**
 * Компонент, представляющий из себя виджет. Состоит из названия и контента.
 */

export default function Widget(props) {
  return (
    <li className="widget">
      <a href="/#">{props.title}</a>
      <div class="widget-body">
        {props.children}
      </div>
    </li>
  )
}
