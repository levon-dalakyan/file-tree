import { ReloadOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { fetchTreeData } from '../../../store/slices/tree.slice';
import { getParentTitleUsingKey } from '../../../utils/tree.utils';
import * as S from './Sider.styles';

const { DirectoryTree } = Tree;

export const treeData = [
  {
    title: 'Translation',
    key: '0-0',
    children: [
      {
        title: 'ArrayLoader.pdf',
        key: '0-0-0',
        isLeaf: true,
        score: 2.5,
        createdAt: '04.07.2019 22:32:11',
        size: '1.4 Kb',
      },
      {
        title: 'composer.json',
        key: '0-0-1',
        isLeaf: true,
        score: 3,
        createdAt: '03.07.2020 12:34:11',
        size: '14 Mb',
      },
      {
        title: 'FileLoader.pdf',
        key: '0-0-2',
        isLeaf: true,
        score: 5,
        createdAt: '03.12.2010 10:34:11',
        size: '10 Kb',
      },
      {
        title: 'LoaderInterface.pdf',
        key: '0-0-3',
        isLeaf: true,
        score: 4.5,
        createdAt: '02.07.2020 07:28:06',
        size: '1 Kb',
      },
    ],
  },
  {
    title: 'Validation',
    key: '0-1',
    children: [
      {
        title: 'DatabasePresenceVerifier.xlsx',
        key: '0-1-0',
        isLeaf: true,
        score: 5,
        createdAt: '03.07.2020 12:34:11',
        size: '13 Mb',
      },
      {
        title: 'Factory.xlsx',
        key: '0-1-1',
        isLeaf: true,
        score: 4,
        createdAt: '03.07.2020 12:34:11',
        size: '10 Kb',
      },
      {
        title: 'Rules',
        key: '0-1-2',
        children: [
          {
            title: 'Dimensions.json',
            key: '0-1-2-0',
            isLeaf: true,
            score: 1.5,
            createdAt: '02.07.2018 01:44:01',
            size: '10 Mb',
          },
          {
            title: 'Exists.json',
            key: '0-1-2-1',
            isLeaf: true,
            score: 4,
            createdAt: '13.03.2020 12:34:11',
            size: '336 Kb',
          },
          {
            title: 'In.json',
            key: '0-1-2-2',
            isLeaf: true,
            score: 5,
            createdAt: '02.08.2015 23:04:01',
            size: '130 Mb',
          },
        ],
        score: 3.5,
        createdAt: '03.10.2020 12:34:11',
        size: '2 Gb',
      },
      {
        title: 'UnauthorizedException.csv',
        key: '0-1-3',
        isLeaf: true,
        score: 1,
        createdAt: '23.02.2017 12:34:11',
        size: '107 Kb',
      },
      {
        title: 'ValidatesWhenResolvedTrait.csv',
        key: '0-1-4',
        isLeaf: true,
        score: 3.5,
        createdAt: '01.11.2020 10:04:04',
        size: '101 Mb',
      },
      {
        title: 'ValidationServiceProvider.csv',
        key: '0-1-5',
        isLeaf: true,
        score: 4.5,
        createdAt: '02.05.2019 12:34:11',
        size: '11 Mb',
      },
    ],
  },
  {
    title: 'View',
    key: '0-2',
    children: [
      {
        title: 'Compilers',
        key: '0-2-0',
        children: [
          {
            title: 'BladeCompiler.pdf',
            key: '0-2-0-0',
            isLeaf: true,
            score: 5,
            createdAt: '03.07.2019 12:34:11',
            size: '11 Mb',
          },
          {
            title: 'CompilerInterface.pdf',
            key: '0-2-0-1',
            isLeaf: true,
            score: 3,
            createdAt: '03.07.2020 12:34:11',
            size: '45 Kb',
          },
          {
            title: 'Compiler.pdf',
            key: '0-2-0-2',
            isLeaf: true,
            score: 2,
            createdAt: '30.07.2018 02:34:11',
            size: '13 Mb',
          },
        ],
        score: 0.5,
        createdAt: '01.07.2021 12:34:11',
        size: '56 Mb',
      },
      {
        title: 'composer.json',
        key: '0-2-1',
        isLeaf: true,
        score: 5,
        createdAt: '13.07.2020 12:34:11',
        size: '11 Mb',
      },
      {
        title: 'Engines',
        key: '0-2-2',
        children: [
          {
            title: 'CompilerEngine.pdf',
            key: '0-2-2-0',
            isLeaf: true,
            score: 4.5,
            createdAt: '02.07.2020 07:34:11',
            size: '17 Mb',
          },
          {
            title: 'EngineInterface.pdf',
            key: '0-2-2-1',
            isLeaf: true,
            score: 5,
            createdAt: '03.07.2022 17:34:11',
            size: '42 Kb',
          },
          {
            title: 'Engine.pdf',
            key: '0-2-2-2',
            isLeaf: true,
            score: 2.5,
            createdAt: '13.07.2020 12:34:15',
            size: '13 Mb',
          },
          {
            title: 'EngineResolver.pdf',
            key: '0-2-2-3',
            isLeaf: true,
            score: 4.5,
            createdAt: '23.01.2020 14:34:15',
            size: '17 Mb',
          },
          {
            title: 'PhpEngine.pdf',
            key: '0-2-2-4',
            isLeaf: true,
            score: 3,
            createdAt: '15.03.2020 15:34:15',
            size: '45 Kb',
          },
        ],
        score: 4.5,
        createdAt: '01.07.2021 12:34:11',
        size: '23 Mb',
      },
      {
        title: 'Factory.csv',
        key: '0-2-3',
        isLeaf: true,
        score: 3.5,
        createdAt: '01.07.2021 12:34:14',
        size: '131 K.5b',
      },
      {
        title: 'FileViewFinder.csv',
        key: '0-2-4',
        isLeaf: true,
        score: 3,
        createdAt: '03.04.2016 12:44:11',
        size: '120 Mb',
      },
      {
        title: 'Middleware',
        key: '0-2-5',
        children: [
          {
            title: 'ShareErrorsFromSession.csv',
            key: '0-2-5-0',
            isLeaf: true,
            score: 3.5,
            createdAt: '23.01.2020 12:34:11',
            size: '17 Mb',
          },
        ],
        score: 4,
        createdAt: '04.09.2021 17:24:11',
        size: '3 Mb',
      },
      {
        title: 'ViewFinderInterface.csv',
        key: '0-2-6',
        isLeaf: true,
        score: 4.5,
        createdAt: '01.07.2021 12:34:11',
        size: '3 Mb',
      },
      {
        title: 'View.csv',
        key: '0-2-7',
        isLeaf: true,
        score: 3.5,
        createdAt: '03.03.2020 12:34:11',
        size: '103 Kb',
      },
    ],
  },
];

export const Sider = () => {
  const treeData = useAppSelector((state) => state.tree.treeData);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchTreeHandler();
  }, []);

  const fetchTreeHandler = () => {
    dispatch(fetchTreeData());
  };

  const onSelect = (keys: React.Key[], info: any) => {
    const title = info.node.title;

    const isFile = title.includes('.');

    if (!isFile) {
      const parentTitle = getParentTitleUsingKey(keys[0] as string, treeData);

      if (parentTitle) {
        navigate(`${parentTitle}/${title}}`);
      } else navigate(`${title}`);
    }
  };

  return (
    <S.Wrapper>
      <S.Reload onClick={fetchTreeHandler}>
        <ReloadOutlined style={{ padding: '20px 14px', cursor: 'pointer' }} />
      </S.Reload>
      <S.TreeWrapper>
        <DirectoryTree multiple onSelect={onSelect} treeData={treeData} />
      </S.TreeWrapper>
    </S.Wrapper>
  );
};
