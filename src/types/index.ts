import type { ReactNode } from 'react';
import type { RouteObject } from 'react-router-dom';

declare global {
  interface Window {
    YS_DRONE_MONITOR_CONFIGS: {
      arcgis_js_api: {
        mode: 'offline' | 'online'; // "online" or "offline"
        online: string;
        offline: string;
      };
      map_server: {
        mode: 'offline' | 'online'; // "online" or "offline"
        online: string;
        offline: string;
      };
    };
    ENV_CONFIGS: {
      productName: string;
      logoURL: string;
    };
  }
}

export type BaseEntity = {
  id: string;
  createdAt: number;
};

interface RouteMetaData {
  title: string;
  icon?: ReactNode;
  sort?: number;
}

export type RouteConfig = RouteObject & {
  meta: RouteMetaData;
  children?: RouteConfig[];
};
