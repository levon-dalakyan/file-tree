import { Row } from 'antd';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux-hooks';
import { Branch } from '../../store/slices/tree.slice';
import { getSeparatePathParts } from '../../utils/path.utils';
import { getBranchUsingTitle } from '../../utils/tree.utils';
import { BranchItem } from '../BranchItem/BranchItem';

export const BranchDetails = () => {
  const treeData = useAppSelector((state) => state.tree.treeData);

  const location = useLocation();
  const pathParts = getSeparatePathParts(location.pathname);

  const selectedPathPart = pathParts[pathParts.length - 1];

  let selectedBranch;

  if (selectedPathPart) {
    selectedBranch = getBranchUsingTitle(selectedPathPart, treeData);
  }

  return (
    <>
      {selectedBranch && (
        <Row justify="start">
          {selectedBranch.map((item: Branch) => (
            <BranchItem key={item.key} item={item} />
          ))}
        </Row>
      )}
    </>
  );
};
