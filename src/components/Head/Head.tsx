import { Helmet } from 'react-helmet-async';

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = '', description = '' }: HeadProps = {}) => {
  return (
    <Helmet title={title ? `${title} | lvc-front-end` : undefined} defaultTitle="lvc-front-end">
      <meta name="description" content={description} />
    </Helmet>
  );
};
