import { Layout, Menu, Row, Input } from "antd";
import logo from "../../images/news.png";
import { Football } from './../category/football';
import { MenuItems } from './../../apiService/mock';
import { SearchOutlined } from "@ant-design/icons";
import { MenuItem } from './../../apiService/mock2';


const { Header, Sider, Content } = Layout;

export const Footballs = () => {
  return (
    <Layout>
      <Sider theme="light" breakpoint="lg" collapsedWidth="0">
        <div className="logo">
          <img src={logo} alt="logo" width={200} height={100} />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={MenuItems}
          style={{color: '#ffffff'}}
        />
        <hr />
        <Menu
          theme="light"
          mode="inline"
          items={MenuItem}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            display: "flex",
            height: "fit-content",
            alignItems: "center",
          }}
        >
          <span className="header-text">FOOTBALL</span>
          <Input
            style={{
              width: 500,
              marginLeft: 200,
              backgroundColor: "rgb(14, 47, 105)",
              borderColor: "#fff",
              padding: 10,
            }}
            suffix={<SearchOutlined />}
          />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          
            <Row
              aria-orientation="horizontal"
              className="rows"
              gutter={20}
            >
              <Football />
            </Row>
        
        </Content>
      </Layout>
    </Layout>
  );
};
