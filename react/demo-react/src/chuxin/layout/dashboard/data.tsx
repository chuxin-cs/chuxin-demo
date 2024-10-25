import type { MenuProps } from 'antd';
import { MailOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

export const items: MenuItem[] = [
  {
    key: 'hooks',
    label: 'Hooks',
    icon: <MailOutlined />,
    children: [
      { key: 'useState', label: 'useState' },
      { key: 'useEffect', label: 'useEffect' },
    ],
  },
];
