import { Row, Typography } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled(Row)`
  width: 25%;
  height: 200px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Item = styled(Row)`
  width: 130px;
`;

export const Title = styled(Typography.Text)`
  word-break: break-word;
  text-align: center;
  padding: 0 9px;
`;

export const Image = styled.img`
  width: 100px;
  height: 150px;
`;
