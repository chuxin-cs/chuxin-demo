import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import LayoutMenu from "./components/LayoutMenu";

const { Sider, Content } = Layout;

function LayoutIndex() {
  return (
    <Layout>
      <Sider width="25%">
        <LayoutMenu />
      </Sider>

      <Layout>
        <Content>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutIndex;
