import { Typography } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  height: 100vh;
  background-color: #fff;
  padding: 20px 75px;
`;

export const Image = styled.img`
  width: 150px;
  height: 200px;
  margin-bottom: 10px;
`;

export const Title = styled(Typography.Text)`
  font-size: 18px;
`;

export const Size = styled(Typography.Text)`
  font-size: 16px;
`;

export const Data = styled(Size)``;
