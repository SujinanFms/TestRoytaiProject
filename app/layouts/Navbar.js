"use client";
import React from "react";
import { Avatar, Breadcrumb, Flex, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
//Logo
import Logo from "../../public/Logo-roytai.png";
import UserAvartar from "../../public/user.png";

import Image from "next/image";
import Link from "next/link";
// const items = new Array(15).fill(null).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,
// }));

// console.log("items", items);

const logoStyle = {
  width: 80, // Adjust width and height as needed
  height: 50, // Adjust width and height as needed
  marginRight: 20, // Add margin for spacing
  marginLeft: 10,
  marginTop: 6,
};

const items = [
  { key: 1, label: <Link href={`/test`}>Navigation One</Link> },
  { key: 2, label: "nav 2" },
];

const Navbar = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const url = "../../public/user.png";

  return (
    <Layout style={{ height: "100dvh" }}>
      <Header
        // style={{
        //   display: "flex",
        //   alignItems: "center",
        //   background: "white",
        // }}
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <Flex wrap="wrap">
          <Image src={Logo} style={logoStyle} alt="Roytai" />

          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
            style={{
              flex: 1,
              minWidth: 0,
              // height: "152px",
            }}
          />

          <Avatar size="large" title="user">
            U
          </Avatar>
        </Flex>
      </Header>

      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          overflow: "auto", // เพิ่ม overflow เพื่อให้มีการเลื่อน
          // maxHeight: "500px", // ระบุความสูงสูงสุดที่ต้องการ
        }}
      >
        {children}
      </Content>
      {/* <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer> */}
    </Layout>
  );
};
export default Navbar;
