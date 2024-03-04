import { ReadOutlined } from '@ant-design/icons';
import { Empty } from 'antd';

import type { RouteConfig } from '@/types';
import { MODULES } from '@/utils/access';
export default [
  {
    path: MODULES.TRAINING,
    element: <Empty />,
    meta: {
      title: '模训记录管理',
      icon: <ReadOutlined style={{ fontSize: '18px' }} />,
      sort: 2,
    },
  },
] as RouteConfig[];
