import { useState } from "react";
import React from "react";

import {Link, Route, Switch, Redirect} from "react-router-dom"
import HomePage from "./HomePageContent"
import ContentA from "./ContentA";
import ContentB from "./ContentB";
import Messages from "./Messages/Messages";

import ProLayout, {
	PageContainer,
	SettingDrawer,
} from '@ant-design/pro-layout';
import { Descriptions, Button } from "antd";
import defaultProps from "./layoutMenu";
// import defaultProps from "./example/_defaultProps";

import logo from "../assets/logo.PNG"


// plan: default props for pages routing

export default function ProLayoutApp(){
	const [pathname, setPathname] = useState("/home");
	const [settings, setSettings] = useState({
		splitMenus: true,
		layout: "mix",
	});

	const content = (
		<Descriptions size="small" column={2}>
			<Descriptions.Item label="创建人">张三</Descriptions.Item>
			<Descriptions.Item label="联系方式">
				<a>421421</a>
			</Descriptions.Item>
			<Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
			<Descriptions.Item label="更新时间">2017-10-10</Descriptions.Item>
			<Descriptions.Item label="备注">
				中国浙江省杭州市西湖区古翠路
			</Descriptions.Item>
		</Descriptions>
	);

	return (
		<div>
			<ProLayout 
				{...defaultProps}
				{...settings}
				location = {{pathname}}

				title={"David's page"}
				logo={
					logo
				}
				menuHeaderRender={(logo, title, props) => (
          <div
            onClick={() => {
            window.open('');
            }}
          >
            {logo}
            {title}

            {/* The following part doesnt work because props is undefined for some reaon, weird */}
            {/* {console.log(props.collapsed)}
            {/* when menu is collapsed, don't display this part */}
            {/* {!props.collapsed? "Preview Pro": ""} */} 
          </div>
				)}
				
				menuItemRender={
					(item, dom)=>(
					<Link 
						onClick={()=>{setPathname(item.path || "/home")}}
						to={item.path || "/home"}
					>
						{dom}
					</Link>)
				}

        pageTitleRender={
          (props, defaultPageTitle, info)=>(`myTitle>${info.pageName}`)
        }
			>
				<PageContainer
					content={content}
				>
					<Switch>
						<Route path="/home">
							<HomePage/>
						</Route>

						<Route path="/A">
							<ContentA/>
						</Route>
						
						<Route path="/B">
							<ContentB/>
						</Route>
						
						{/* when called this way, match and location is accessible by props
						otherwise, only can be gotten using hook */}
						{/* <Route path="/Messages">
							<Messages />
						</Route> */}
						<Route path="/messages" component={Messages}/>

						{/* Default back to homepage */}
						<Redirect to='/'/>
					</Switch>
					<img src={logo}/>
          <Button type="primary">Primary Button</Button>
				</PageContainer>
			</ProLayout>

			<SettingDrawer
				settings={settings}
				onSettingChange={(changes)=>setSettings(changes)}

				pathname={pathname}
				disableUrlParams
			>
			</SettingDrawer>
		</div>
	);
}