import { ProfileOutlined } from '@ant-design/icons';
import { Empty } from 'antd';

import type { RouteConfig } from '@/types';
import { MODULES } from '@/utils/access';
import { lazyImport } from '@/utils/lazyImport';

const { SubjectFailure } = lazyImport(() => import('@/features/subject-failure'), 'SubjectFailure');

export default [
  {
    path: MODULES.SUBJECTS,
    meta: {
      title: '模训科目管理',
      icon: <ProfileOutlined style={{ fontSize: '18px' }} />,
      sort: 0,
    },
    children: [
      {
        path: MODULES.SUBJECTS_FAILURE,
        element: <SubjectFailure />,
        meta: {
          title: '故障判断与排除科目管理',
        },
      },
      {
        path: MODULES.SUBJECTS_MATERIAL,
        element: <Empty />,
        meta: {
          title: '系统设备认知科目管理',
        },
      },
      {
        path: MODULES.SUBJECTS_EQUIPMENT,
        element: <Empty />,
        meta: {
          title: '系统设备控制科目管理',
        },
      },
    ],
  },
] as RouteConfig[];
