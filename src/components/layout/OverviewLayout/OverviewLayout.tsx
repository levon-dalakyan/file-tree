import { Col, Layout, Row } from 'antd';
import { FileInfo } from '../../FileInfo/FileInfo';
import { ContentLayout } from '../ContentLayout/ContentLayout';
import { Sider } from '../Sider/Sider';
import * as S from './OverviewLayout.styles';

export const OverviewLayout = () => {
  return (
    <S.LayoutWrapper>
      <Row justify="space-between">
        <Col span={6}>
          <Sider />
        </Col>
        <Col span={12}>
          <ContentLayout />
        </Col>
        <Col span={6}>
          <FileInfo />
        </Col>
      </Row>
    </S.LayoutWrapper>
  );
};
