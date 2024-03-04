import { Link } from 'react-router-dom';

import { RouteConfig } from '@/types';
import { mapRoutesToMenus } from '@/utils/tree';

const rr = require.context('./modules', false, /.*\.ts/);

export const ROUTE_CONFIG = rr.keys().reduce((acc: any[], key) => {
  return [...acc, ...rr(key).default];
}, []);

export const MENU_CONFIG = mapRoutesToMenus(ROUTE_CONFIG, (node: RouteConfig) => {
  const label = node.element ? (
    <Link to={node.path ?? '/'}>{node.meta.title}</Link>
  ) : (
    node.meta.title
  );
  return {
    label,
    key: node.path,
    icon: node.meta.icon,
    children: node.children,
    sort: node.meta.sort,
  };
})
  .filter((item: { sort: undefined }) => item.sort !== undefined)
  .sort((prev: { sort: number }, curr: { sort: number }) => {
    const prevIndex = prev.sort as number;
    const currIndex = curr.sort as number;
    return prevIndex - currIndex;
  });
