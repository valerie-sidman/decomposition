import React from 'react';
import List from '../GeneralComponents/List';
import Widget from './Widget';
import WidgetsItem from './WidgetsItem';

/**
 * Компонент нижней части страницы. Включает в себя список виджетов.
 */

export default function Footer() {
  return (
    <div className="footer-container">
      <h5>Footer Container</h5>
      <div className="general-container">
        <div className="widgets-container">
          <List name="widgets-list" items={
            [
              <Widget title="Weather">
                <div className="weather-box">
                  <img className="promo-img weather-img" src="/#" alt="" />
                  <span className="current-weather">+ 17°</span>
                  <div className="total-indicators">
                    <span>Morning + 10</span>
                    <span>Evening  + 20</span>
                  </div>
                </div>
              </Widget>,

              <Widget title="Map">
                <a href="/#">Bus schedule</a>
              </Widget>,

              <Widget title="Broadcast">
                <List name="broadcast-list" items={
                  [
                    <WidgetsItem>
                      <img className="promo-img broadcast-img" src="/#" alt="" />
                      <span className="broadcast-title">Apple pie</span>
                      <span className="broadcast-hint">Cooking</span>
                    </WidgetsItem>,

                    <WidgetsItem>
                      <img className="promo-img broadcast-img" src="/#" alt="" />
                      <span className="broadcast-title">Madonna - Secret</span>
                      <span className="broadcast-hint">Music</span>
                    </WidgetsItem>,

                    <WidgetsItem>
                      <img className="promo-img broadcast-img" src="/#" alt="" />
                      <span className="broadcast-title">Walk in Moscow</span>
                      <span className="broadcast-hint">Travel</span>
                    </WidgetsItem>
                  ]
                } />
              </Widget>,

              <Widget title="Popular">
                <List name="popular-list" items={
                  [
                    <WidgetsItem>
                      <span className="popular-heading">Images&nbsp;</span>
                      <span className="popular-content">- kittens</span>
                    </WidgetsItem>,

                    <WidgetsItem>
                      <span className="popular-heading">Shop&nbsp;</span>
                      <span className="popular-content">- flowers</span>
                    </WidgetsItem>,

                    <WidgetsItem>
                      <span className="popular-heading">Video&nbsp;</span>
                      <span className="popular-content">- franz ferdinand can't stop feeling</span>
                    </WidgetsItem>
                  ]
                } />
              </Widget>,

              <Widget title="TV schedule">
                <List name="program-list" items={
                  [
                    <WidgetsItem>
                      <span className="program-time">7:00pm</span>
                      <span className="program-name">The Masked Singer</span>
                      <span className="program-channel">Fox</span>
                    </WidgetsItem>,

                    <WidgetsItem>
                      <span className="program-time">9:00pm</span>
                      <span className="program-name">Let's Make a Deal</span>
                      <span className="program-channel">Cbs</span>
                    </WidgetsItem>,

                    <WidgetsItem>
                      <span className="program-time">12:00pm</span>
                      <span className="program-name">Days of Our Lives</span>
                      <span className="program-channel">Nbc</span>
                    </WidgetsItem>
                  ]
                } />
              </Widget>
            ]
          } />
        </div>
      </div>
    </div>
  )
}
