import React from 'react';

import {
  PictureSkeleton,
  NameSkeleton,
  RoleSkeleton,
  InfoSection,
  InfoTextSkeleton,
  InfoTitleSkeleton,
} from './styles';

const NaverModalSkeleton: React.FC = () => {
  return (
    <>
      <PictureSkeleton />
      <InfoSection>
        <NameSkeleton />
        <RoleSkeleton />
        <InfoTitleSkeleton />
        <InfoTextSkeleton />
        <InfoTitleSkeleton />
        <InfoTextSkeleton />
        <InfoTitleSkeleton />
        <InfoTextSkeleton />
      </InfoSection>
    </>
  );
};

export default NaverModalSkeleton;
