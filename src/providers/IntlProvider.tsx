import dayjs from 'dayjs';
import type { FC, PropsWithChildren } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';

import { AntdConfigProvider } from '@/providers/AntdConfigProvider';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

// 默认就是中文不做国际化处理
const language = 'zh-CN';

const zhCN = {
  // 公共文本

  // 各个页面的文本
  'views.errors.message.500': '内部服务错误',
  'views.errors.message.503': '服务维护中',
  'views.errors.message.504': '网关超时',
  'views.errors.message.unknown': '页面出现错误',
};

/**
 * 提供国际化能力
 * - react-intl
 * - antd intl
 */
export const IntlProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactIntlProvider locale={language} messages={zhCN}>
      <AntdConfigProvider language={language}>{children}</AntdConfigProvider>
    </ReactIntlProvider>
  );
};
