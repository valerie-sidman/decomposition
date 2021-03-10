import React from 'react';
import List from '../GeneralComponents/List';
import Menu from './Menu';

/**
 * Компонент средней части страницы. Включает в себя: список из ссылок на разделы сайта, поисковую зону и блок с рекламным баннером.
 */

export default function Main() {
  return (
    <div className="main-container">
      <h5>Main Container</h5>
      <div className="general-container general-main">
        <div className="menu-container">
          <h5>Menu Container</h5>
          <div className="menu-block">
            <List name="main-menu" items={
              [
                <Menu item="Video" />,
                <Menu item="Images" />,
                <Menu item="News" />,
                <Menu item="Road maps" />,
                <Menu item="Shop" />,
                <Menu item="Translator" />,
                <Menu item="Broadcast" />
              ]
            } />
            <button className="btn-more">More</button>
          </div>
        </div>
        <div className="search-logo-container">
          <h5>Search Container</h5>
          <div className="search-logo-box">
            <div className="logo-block">
              <img className="promo-img logo-img" src="/#" alt="" />
            </div>
            <div className="search-block">
              <form className="search-form">
                <input className="search-field" />
                <button className="submit-btn" type="submit">Ok</button>
              </form>
              <span className="search-hint">You can search everything!</span>
            </div>
          </div>
        </div>
        <div className="banner-container">
          <h5>Banner Container</h5>
          <div className="banner-block">
            <img className="promo-img banner" src="/#" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
