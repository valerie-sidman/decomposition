import React from 'react';
import List from '../GeneralComponents/List';
import News from './News';
import Title from './Title';
import Exchange from './Exchange';

/**
 * Компонент верхней части страницы. Включает в себя: Раздел с новостями, валюту и промо-блок.
 */

export default function Header() {
  return (
    <div className="header-container">
      <h5>Header Container</h5>
      <div className="general-container">
        <div className="news-container">
          <h5>News Container</h5>
          <div className="header-block">
            <h5>News Header</h5>
            <div className="gen-container-hb">
              <List name="news-titles" items={
                [
                  <Title title="Local news" />,
                  <Title title="Not interesting news" />,
                  <Title title="Foreign news" />
                ]
              } />
              <div className="news-date">21 Feb, sunday, 11:24</div>
            </div>
          </div>
          <div className="news-block">
            <h5>News List</h5>
            <List name="news-list" items={
              [
                <News icon="/#" header="News header. Very loooooooooooooooooong header" link="/#" />,
                <News icon="/#" header="News header. So much looooooooooooooooooooooooooooooooonger header" link="/#" />,
                <News icon="/#" header="News header. Not so looooooooong header" link="/#" />,
                <News icon="/#" header="News header. Almost noooormal header" link="/#" />,
                <News icon="/#" header="News header. Very nice header" link="/#" />,
              ]
            } />
          </div>
          <div className="exchange-block">
            <h5>Exchange Rates</h5>
            <div className="gen-container-exb">
              <List name="exchange-list" items={
                [
                  <Exchange type="USD" value="26,03" differences="▼ 0.09" />,
                  <Exchange type="EUR" value="31,45" differences="▲ 1.23" />,
                  <Exchange type="WOOD" value="100" differences="▲ 3%" />
                ]
              } />
              <a className="menu-btn" href="/#">More exchange info</a>
            </div>
          </div>
        </div>
        <div className="promo-container">
          <h5>Promo Container</h5>
          <div className="promo-block">
            <img className="promo-img" src="/#" alt="" />
            <a className="promo-title" href="/#">Best promo title</a>
            <p>You really need it</p>
          </div>
        </div>
      </div>
    </div>
  )
}
