import { Rate } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { setFileAbout } from '../../store/slices/file.slice';
// import { updateFile } from '../../utils/firebase.utils';
// import { Branch, updateTree } from '../../store/slices/tree.slice';
import { getImageUsingTitle } from '../../utils/images.utils';
// import { getSeparatePathParts } from '../../utils/path.utils';
// import {
//   getParentTitleUsingTitle,
//   updateTreeUtil,
// } from '../../utils/tree.utils';
import * as S from './FileInfo.styles';

export const FileInfo = () => {
  const dispatch = useAppDispatch();
  const file = useAppSelector((state) => state.file.file);
  const tree = useAppSelector((state) => state.tree.treeData);

  const { title, size, createdAt, score } = file;

  const [image, extension] = getImageUsingTitle(title);

  const rateChangeHandler = (value: number) => {
    const updatedFile = { ...file, score: value };
    // const parentTitle = getParentTitleUsingTitle(updatedFile.title, tree);
    // const pathSeparated = getSeparatePathParts(parentTitle);
    dispatch(setFileAbout(updatedFile));
  };

  return (
    <S.Wrapper>
      <S.Image src={image.toString()} alt={extension.toString()} />
      <S.Title strong>{title}</S.Title>
      <S.Size>{size}</S.Size>
      <S.Data>{createdAt}</S.Data>
      <Rate onChange={rateChangeHandler} allowHalf value={score} />
    </S.Wrapper>
  );
};
