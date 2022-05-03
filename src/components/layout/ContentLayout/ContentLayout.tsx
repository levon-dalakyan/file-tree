import { Breadcrumb } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
import { getSeparatePathParts } from '../../../utils/path.utils';
import * as S from './ContentLayout.styles';

export const ContentLayout = () => {
  const location = useLocation();

  const pathParts = getSeparatePathParts(location.pathname);

  return (
    <S.LayoutWrapper>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>{pathParts[1]}</Breadcrumb.Item>
        <Breadcrumb.Item>
          {pathParts[2]?.includes('%')
            ? pathParts[2]?.slice(0, -3)
            : pathParts[2]}
        </Breadcrumb.Item>
        <Breadcrumb.Item>{pathParts[3]?.slice(0, -3)}</Breadcrumb.Item>
      </Breadcrumb>
      <S.Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Outlet />
      </S.Content>
    </S.LayoutWrapper>
  );
};
