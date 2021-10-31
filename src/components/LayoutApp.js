// plan:
// learn how to set up sidebar and head meanu
// using antd Menu, Layout

// create a Head Menu that can navigate throughout the page
// then a side bar
// then mixed

// state
// current - track current selection of navbar
// turn the display on/off based on the selection of navbar
// pass a func to bar to let it change current based on selection
// have a helper setting display states based on current


import { useState } from "react";

import HeadBar from "./HeadBar";
import ContentA from "./ContentA";
import ContentB from "./ContentB";

import {Layout, Menu} from "antd";

import {
  SettingOutlined,
	UserOutlined,
	NotificationOutlined,
	LaptopOutlined
} from "@ant-design/icons";

const {Header, Sider, Footer, Content} = Layout;
const {SubMenu} = Menu;

export default function App() {
  const [current, setCurrent] = useState("ContentA");

  // handler for headbar
  const handleHeadbarClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className="App">
			<Layout>
				<Header style={{ width: "100%"}}>
					<HeadBar current={current} onClick={handleHeadbarClick} />
				</Header>

				{/* put another Layout here within the layout to put sidebar underneath header*/}
					<Content className="main-content">
						<h1>Using ANTD to create Navbar</h1>
						<Layout >
							<Sider width={200} style={{backgroundColor: "#fff"}}>
								<Menu
									mode="inline"
									defaultSelectedKeys={['1']}
									defaultOpenKeys={['sub1']}
									style={{ height: '100%', borderRight: 0 }}
								>
									<SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
										<Menu.Item key="1">option1</Menu.Item>
										<Menu.Item key="2">option2</Menu.Item>
										<Menu.Item key="3">option3</Menu.Item>
										<Menu.Item key="4">option4</Menu.Item>
									</SubMenu>
									<SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
										<Menu.Item key="5">option5</Menu.Item>
										<Menu.Item key="6">option6</Menu.Item>
										<Menu.Item key="7">option7</Menu.Item>
										<Menu.Item key="8">option8</Menu.Item>
									</SubMenu>
								</Menu>
							</Sider>
							<Content>
								<div className="selected-content">
									<ContentA
										ifDisplay={current === "ContentA"}
									/>
									<ContentB
										ifDisplay={current === "ContentB"}
									/>
								</div>
							</Content>
						</Layout>
					</Content>
				<Footer style={{ textAlign: 'center' }}>
						Page for me to learn layout
				</Footer>
			</Layout>
    </div>
  );
}
