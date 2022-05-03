import { IDir, Branch } from '../store/slices/tree.slice';

export const getParentTitleUsingKey: any = (key: string, tree: IDir[]) => {
  let parentTitle;
  let grandparentTitle;

  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];

    if (node.children) {
      if (node.children.some((item: Branch) => item.key === key)) {
        parentTitle = node.title;
      } else if (getParentTitleUsingKey(key, node.children)) {
        grandparentTitle = node.title;

        parentTitle =
          grandparentTitle + '/' + getParentTitleUsingKey(key, node.children);
      }
    }
  }

  return parentTitle as string;
};

export const getParentTitleUsingTitle: any = (title: string, tree: IDir[]) => {
  let parentTitle;
  let grandparentTitle;

  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];

    if (node.children) {
      if (node.children.some((item: Branch) => item.title === title)) {
        parentTitle = node.title;
      } else if (getParentTitleUsingTitle(title, node.children)) {
        grandparentTitle = node.title;

        parentTitle =
          grandparentTitle +
          '/' +
          getParentTitleUsingTitle(title, node.children);
      }
    }
  }

  return parentTitle as string;
};

export const getBranchUsingTitle = (title: string, tree: Branch[]) => {
  let selectedBranch: Branch[] = [];

  const titleNormalized = title.includes('%') ? title.slice(0, -3) : title;

  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];

    if (node.title === titleNormalized) {
      selectedBranch = node.children;
    } else if (node.children) {
      node.children.map(
        (item: Branch) =>
          item.title === titleNormalized &&
          (selectedBranch = [...item.children])
      );
    }
  }

  return selectedBranch;
};
