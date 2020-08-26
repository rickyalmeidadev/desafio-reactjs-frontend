import React from 'react';

import {
  PictureSkeleton,
  NameSkeleton,
  RoleSkeleton,
  IconSection,
  IconSkeleton,
} from './styles';

const NaverCardSkeleton: React.FC = () => {
  return (
    <>
      <PictureSkeleton />
      <NameSkeleton />
      <RoleSkeleton />
      <IconSection>
        <IconSkeleton />
        <IconSkeleton />
      </IconSection>
    </>
  );
};

export default NaverCardSkeleton;
