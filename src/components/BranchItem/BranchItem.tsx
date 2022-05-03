import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { setFileAbout } from '../../store/slices/file.slice';
import { Branch } from '../../store/slices/tree.slice';
import { getImageUsingTitle } from '../../utils/images.utils';
import { getParentTitleUsingTitle } from '../../utils/tree.utils';
import * as S from './BranchItem.styles';

export const BranchItem: React.FC<{ item: Branch }> = ({ item }) => {
  const tree = useAppSelector((state) => state.tree.treeData);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { title, isLeaf } = item;

  const doubleClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    if (event.detail === 1) {
      dispatch(setFileAbout(item));
    } else if (event.detail === 2 && !isLeaf) {
      const parentTitle = getParentTitleUsingTitle(title, tree);

      navigate(`${parentTitle}/${title}`);
    }
  };

  const [image, extension] = getImageUsingTitle(title);

  return (
    <S.Wrapper align="middle" onClick={doubleClickHandler}>
      <S.Item justify="center">
        <S.Image src={image.toString()} alt={extension.toString()} />
        <S.Title>{title}</S.Title>
      </S.Item>
    </S.Wrapper>
  );
};
