import IDirectory from '@/types/directory';
import React from 'react';
import DirectoryItem from './DirectoryItem';

interface IProps {
  directories: IDirectory[];
}

const DirectoryContainer: React.FunctionComponent<IProps> = ({
  directories,
}) => {
  return (
    <>
      <div className="flex w-[100%] flex-col gap-5">
        {directories.map((c, i) => (
          <DirectoryItem key={i} directory={c}></DirectoryItem>
        ))}
      </div>
    </>
  );
};

export default DirectoryContainer;
