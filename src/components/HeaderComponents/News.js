import React from 'react';

/**
 * Компонент, моделирующий отельно взятую новость в списке новостей.
 */

export default function News(props) {
  return (
    <li className="news">
      <img className="news-icon" src={props.icon} alt="" />
      <a className="news-header" href={props.link}>{props.header}</a>
    </li>
  )
}