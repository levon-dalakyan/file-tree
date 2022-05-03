import CSV from '../assets/file-icons/csv.svg';
import PDF from '../assets/file-icons/pdf.svg';
import JSON from '../assets/file-icons/json.svg';
import XLSX from '../assets/file-icons/xlsx.svg';
import DIR from '../assets/file-icons/directory.svg';

const extensionImages = {
  csv: CSV,
  pdf: PDF,
  json: JSON,
  xlsx: XLSX,
};

export const getImageUsingTitle = (title: string) => {
  if (title.includes('.')) {
    const pointIndex = title.indexOf('.');

    const extension = title.slice(pointIndex + 1, title.length);

    const image = extensionImages[extension as keyof typeof extensionImages];

    return [image, extension];
  }

  return [DIR, 'dir'];
};
