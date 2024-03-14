"use client"
import React from "react";
import { Menu, Dropdown } from "antd";

const Header = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="#">Profile</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#">Logout</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <header>
      <div className="logo">
        <h1>Ecommerce</h1>
      </div>
      <div className="nav-menu">
        <Menu mode="horizontal">
          <Menu.Item>
            <a href="#">Home</a>
          </Menu.Item>
          <Menu.Item>
            <a href="#">Products</a>
          </Menu.Item>
          <Menu.Item>
            <a href="#">About</a>
          </Menu.Item>
        </Menu>
      </div>
      <div className="user-profile">
        <Dropdown overlay={menu}>
          <a href="#">
            <img
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniV.png"
              alt="profile"
            />
          </a>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
