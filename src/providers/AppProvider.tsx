import { ReloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

import { Spinner } from '@/components/Elements';
import { IntlProvider } from '@/providers/IntlProvider';
import { QueryProvider } from '@/providers/QueryProvider';

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">糟糕, 页面出了点问题 :( </h2>
      <Button
        size="large"
        icon={<ReloadOutlined />}
        onClick={() => window.location.assign(window.location.origin)}
      >
        刷新
      </Button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryProvider>
            <IntlProvider>
              <Router>{children}</Router>
            </IntlProvider>
          </QueryProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
