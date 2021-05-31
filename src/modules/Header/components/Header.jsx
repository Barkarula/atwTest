import React from "react";
import { Link } from "react-router-dom";
import { Icon, Menu } from "antd"; // Row, Col,
import { Row, Col } from "antd";
import store from "redux/store";

import "./Header.scss";

class Header extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
    // console.log('click ', e);
    // console.log(e.key);
    // console.log(this.props);
    // Убрать
    //this.props.history.location = e.key;
  };

  render() {
    let storeState = store.getState();
    let name;

    if (storeState.user.data === null) {
      name = (
        <div>
          <Icon type="setting" />
          Войти
        </div>
      );
    } else {
      name = storeState.user.data.name;
    }

    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        className="header"
      >
        <Menu.Item key="home" title="Главная" className="header__home">
          <Link to="/home">Главная</Link>
        </Menu.Item>
        <Menu.Item key="reference">
          <Link to="/reference">Задание и помощь</Link>
        </Menu.Item>
        <Menu.Item key="workers">
          <Link to="/workers">
            <Icon type="appstore" />
            Сотрудники
          </Link>
        </Menu.Item>
        <Menu.Item key="setting" className="profile header__profile">
          <Link to="/profile">{name}</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
