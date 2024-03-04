import { DesktopOutlined } from '@ant-design/icons';
import { Empty } from 'antd';

import type { RouteConfig } from '@/types';
import { MODULES } from '@/utils/access';

export default [
  {
    path: MODULES.LOGS,
    element: <Empty />,
    meta: {
      title: '模训实时导调',
      icon: <DesktopOutlined style={{ fontSize: '18px' }} />,
      sort: 1,
    },
  },
] as RouteConfig[];
