import * as React from 'react';
import type { FC, PropsWithChildren } from 'react';

import { Head } from '../Head';

type ContentLayoutProps = {
  title: string;
};

export const ContentLayout: FC<PropsWithChildren<ContentLayoutProps>> = ({ children, title }) => {
  return (
    <>
      <Head title={title} />
      <div className="p-6">{children}</div>
    </>
  );
};
