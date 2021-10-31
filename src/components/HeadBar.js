import React, { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from "@ant-design/icons";

export default function HeadBar({ current, onClick }) {
  return (
    <Menu
      onClick={onClick}
      className="head-bar"
      selectedKeys={[current]}
			theme="dark"
      mode="horizontal"
    >
      <Menu.Item key="ContentA" icon={<MailOutlined />} />
      <Menu.Item key="ContentB" icon={<AppstoreOutlined />} />
    </Menu>
  );
}
