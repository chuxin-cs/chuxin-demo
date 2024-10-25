import { FC } from 'react';
import { Outlet ,useNavigate} from 'react-router-dom';
import { Menu, Layout, MenuProps } from 'antd';

const { Header, Sider, Content } = Layout;
import { items } from './data.tsx';
import {
  layoutStyle,
  headerStyle,
  contentStyle,
  siderStyle,
} from './css';

const DashboardLayout: FC = () => {

  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key);
  };

  return <>
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Header</Header>
      <Layout>
        <Sider style={siderStyle}>
          <Menu
            defaultSelectedKeys={['useState']}
            defaultOpenKeys={['hooks']}
            mode="inline"
            theme="dark"
            items={items}
            onClick={onClick}
          />
        </Sider>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  </>;
};

export default DashboardLayout;











