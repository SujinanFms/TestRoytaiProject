"use client";
import React, { useState } from "react";
import {
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
  BellOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { compatibleBorder } from "@ant-design/pro-utils";
import { ProSettings } from "@ant-design/pro-components";
import { PageContainer, ProCard, ProLayout } from "@ant-design/pro-components";
import { Col, Divider, Input, Row } from "antd";
import defaultProps from "../components/defaultProps";
//Logo
import Logo from "../../public/Logo-roytai.png";
import Image from "next/image";

const Headbar = ({ children }) => {
  const settings = {
    fixSiderbar: true,
    layout: "top",
    splitMenus: true,
  };

  const logoStyle = {
    width: 121,
    height: 112,
  };

  const [pathname, setPathname] = useState("/list/sub-page/sub-sub-page1");

  return (
    <div
      style={{
        height: "100vh",
        background: "#ffffff",
      }}
    >
      <ProLayout
        className="headbars"
        logo={<Image src={Logo} style={logoStyle} alt="Roytai" />}
        bgLayoutImgList={[
          {
            src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
            left: 85,
            bottom: 100,
            height: "303px",
          },
          {
            src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
            bottom: -68,
            right: -45,
            height: "303px",
          },
          {
            src: "https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png",
            bottom: 0,
            left: 0,
            width: "331px",
          },
        ]}
        {...defaultProps}
        location={{
          pathname,
        }}
        menu={{
          type: "group",
        }}
        avatarProps={{
          size: "small",
          // title: <div>七妮妮</div>,
          src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          if (typeof window !== "undefined") {
            // Your client-side code here
            return [
              props.layout !== "side" && window.innerWidth > 1400 ? (
                <div
                  className="m-4"
                  key="SearchOutlined"
                  aria-hidden
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginInlineEnd: 24,
                  }}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                >
                  <Input
                    style={{
                      borderRadius: 4,
                      marginInlineEnd: 12,
                    }}
                    prefix={<SearchOutlined />}
                    placeholder="Search"
                    // {...compatibleBorder(false)}
                  />
                  <PlusCircleFilled
                    style={{
                      color: "var(--ant-primary-color)",
                      fontSize: 24,
                    }}
                  />
                </div>
              ) : undefined,
              <Row className=" hover:bg-transparent">
                <Col span={24}>
                  <div className="flex justify-around ">
                    <div className="text-sm text-black hover:bg-transparent hover:text-[var(--color-primary)] ">
                      {"ช่วยเหลือ"}
                    </div>
                    <div className="text-sm text-black hover:bg-transparent ">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span
                          className="hover:text-[var(--color-primary)]"
                          style={{ marginRight: "5px" }}
                        >
                          {"ไทย"}
                        </span>
                        <span>|</span>
                        <span
                          className="hover:text-[var(--color-primary)]"
                          style={{ marginLeft: "5px" }}
                        >
                          {"อังกฤษ"}
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-black hover:bg-transparent hover:text-[var(--color-primary)] ">
                      {"Nongkai"}
                    </div>
                    {/* <div>
                        <BellOutlined
                    style={{ color: "#576974", fontSize: "32px" }}
                    key="Noti"
                  />
                  <Divider type="vertical" />
                  <ShoppingCartOutlined
                    style={{ color: "#576974", fontSize: "32px" }}
                    key="cart"
                  />
                    </div> */}
                  
                  </div>

                  {/* <div className="text-sm text-black hover:bg-transparent hover:text-[var(--color-primary)]">
                    {"ช่วยเหลือ"}
                  </div>
                  <div className="text-sm text-black hover:bg-transparent ">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span
                        className="hover:text-[var(--color-primary)]"
                        style={{ marginRight: "5px" }}
                      >
                        {"ไทย"}
                      </span>
                      <span>|</span>
                      <span
                        className="hover:text-[var(--color-primary)]"
                        style={{ marginLeft: "5px" }}
                      >
                        {"อังกฤษ"}
                      </span>
                    </div>
                  </div> */}
                  {/* <InfoCircleFilled key="InfoCircleFilled" />,
                <QuestionCircleFilled key="QuestionCircleFilled" />,
                <GithubFilled key="GithubFilled" />, */}
                  {/* <div className="text-sm text-black hover:bg-transparent hover:text-[var(--color-primary)]">
                    {"Nongkai"}
                  </div> */}
                </Col>
                <Col span={24} className="flex justify-end items-center">
                  <BellOutlined
                    style={{ color: "#576974", fontSize: "32px" }}
                    key="Noti"
                  />
                  <Divider type="vertical" />
                  <ShoppingCartOutlined
                    style={{ color: "#576974", fontSize: "32px" }}
                    key="cart"
                  />
                </Col>
              </Row>,
            ];
          } else {
            // Your server-side code here
            return null; // Or some fallback content for server rendering
          }
        }}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <div
              style={{
                textAlign: "center",
                paddingBlockStart: 12,
              }}
            >
              <div>© 2024 Roytai</div>
              {/* <div>by Ant Design</div> */}
            </div>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || "/welcome");
            }}
          >
            {dom}
          </a>
        )}
        {...settings}
      >
        <PageContainer>
          <ProCard
            style={{
              // height: "200vh",
              minHeight: 800,
            }}
          >
            {children}
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  );
};
export default Headbar;
