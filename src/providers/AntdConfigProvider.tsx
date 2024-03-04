import { App as AntdApp, ConfigProvider, theme } from 'antd';
import type { ThemeConfig } from 'antd';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import type { FC, PropsWithChildren } from 'react';

import EscapeAntd from '@/stores/escapeAntd';

const ANTDLocaleMap = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

const ANTDThemeConfig: ThemeConfig = {
  token: {
    colorPrimary: 'var(--custom-primary-color)',
    colorLinkHover: 'var(--custom-primary-active-color)',
    colorLinkActive: 'var(--custom-primary-active-color)',
    colorPrimaryActive: '#D9D9D9',
    colorPrimaryHover: '#D9D9D9',
    colorBgLayout: '#fff',
    colorTextBase: '#1F2328',
  },
  components: {
    Layout: {
      headerBg: '#F6F8FA',
      lightSiderBg: 'var(--custom-primary-color)',
    },
    Menu: {
      itemBg: 'var(--custom-primary-color)',
      itemColor: 'rgba(255, 255, 255, 0.88)',
      itemActiveBg: 'rgba(208, 215, 222, 0.48)',
      itemHoverBg: 'rgba(208, 215, 222, 0.32)',
      itemHoverColor: 'var(--custom-text-white-color)',
      itemSelectedBg: 'rgba(208, 215, 222, 0.48)',
      itemSelectedColor: 'var(--custom-text-white-color)',
      popupBg: 'rgba(0, 0, 0, 0.88)',
    },
  },
  algorithm: theme.defaultAlgorithm,
};

type ProviderProps = {
  language: keyof typeof ANTDLocaleMap;
};

export const AntdConfigProvider: FC<PropsWithChildren<ProviderProps>> = ({
  language,
  children,
}) => {
  return (
    <ConfigProvider
      theme={ANTDThemeConfig}
      locale={ANTDLocaleMap[language]}
      componentSize="middle"
      virtual
    >
      <AntdApp>
        <EscapeAntd />
        {children}
      </AntdApp>
    </ConfigProvider>
  );
};
