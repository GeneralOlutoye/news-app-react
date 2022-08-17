import { Layout, Menu, Row, Input } from "antd";
import logo from "../../images/news.png";
import { Politics } from "./../category/politics";
import { Country } from "./../category/country";
import { Football } from "./../category/football";
import { Apple } from "./../category/apple";
import { MenuItems } from "./../../apiService/mock";
import { SearchOutlined } from "@ant-design/icons";
import { MenuItem } from "./../../apiService/mock2";

const { Header, Sider, Content } = Layout;

export const Dashboard = () => {
  return (
    <Layout>
      <Sider theme="light" breakpoint="lg" collapsedWidth="0">
        <div className="logo">
          <img src={logo} alt="logo" width={200} height={100} />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={MenuItems}
          style={{ color: "#ffffff" }}
        />
        <hr />
        <Menu theme="light" mode="inline" items={MenuItem} />
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
          <span className="header-text">HOME</span>
          <Input
            style={{
              width: 500,
              marginLeft: 200,
              backgroundColor: "rgb(14, 47, 105)",
              borderColor: "#333333",
              padding: 10,
            }}
            suffix={<SearchOutlined style={{color: 'white'}} />}
          />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          <h1
            style={{
              color: "#ffffff",
              fontWeight: 500,
              width: "100%",
              padding: 10,
              backgroundColor: "rgb(14, 47, 105)",
            }}
          >
            POLITICS
          </h1>

          <Row aria-orientation="horizontal" className="row" gutter={20}>
            <Politics />
          </Row>

          <h1
            style={{
              color: "#ffffff",
              fontWeight: 500,
              width: "100%",
              padding: 10,
              backgroundColor: "rgb(14, 47, 105)",
            }}
          >
            COUNTRY
          </h1>
          <Row aria-orientation="horizontal" className="row" gutter={20}>
            <Country />
          </Row>

          <h1
            style={{
              color: "#ffffff",
              fontWeight: 500,
              width: "100%",
              padding: 10,
              backgroundColor: "rgb(14, 47, 105)",
            }}
          >
            FOOTBALL
          </h1>

          <Row aria-orientation="horizontal" style={{marginBottom: 20}} className="row" gutter={20}>
            <Football />
          </Row>

          <h1
            style={{
              color: "#ffffff",
              fontWeight: 500,
              width: "100%",
              padding: 10,
              backgroundColor: "rgb(14, 47, 105)",
            }}
          >
            APPLE
          </h1>
          <Row aria-orientation="horizontal" className="row" gutter={20}>
            <Apple />
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};
