import React from "react";
import { Link } from "react-router-dom";
import { Icon, Menu } from "antd"; // Row, Col,
import store from "redux/store";

//const { SubMenu } = Menu;

class Header extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
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

    //Войти
    if(storeState.user.data === null)
    {
      name = <div><Icon type="setting" />Войти</div>;
    } else {
      name = storeState.user.data.name;
    }

    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="home" title='Главная'>
          <Link to="/home">Главная</Link>
        </Menu.Item>
        <Menu.Item key="reference">
          <Link to="/reference">Задание и помощь</Link>
        </Menu.Item>
        <Menu.Item key="workers">
          <Link to="/workers"><Icon type="appstore" />Сотрудники</Link>
        </Menu.Item>
        <Menu.Item key="setting" className="profile">
          <Link to="/profile">{name}</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;

        // <SubMenu
        //   title={
        //     <span className="submenu-title-wrapper">
        //       Задание и помощь
        //     </span>
        //   }
        // >
        //   <Menu.ItemGroup title="Задание">
        //     <Menu.Item key="setting:1">Описание</Menu.Item>
        //     <Menu.Item key="setting:2">Авторизация</Menu.Item>
        //     <Menu.Item key="setting:3">Сотрудники</Menu.Item>
        //     <Menu.Item key="setting:4">Профиль</Menu.Item>
        //   </Menu.ItemGroup>
        //   <Menu.ItemGroup title="Помощь">
        //     <Menu.Item key="setting:5">Frontend</Menu.Item>
        //     <Menu.Item key="setting:6">Backend</Menu.Item>
        //     <Menu.Item key="setting:7">GIT</Menu.Item>
        //   </Menu.ItemGroup>
        //</SubMenu>
