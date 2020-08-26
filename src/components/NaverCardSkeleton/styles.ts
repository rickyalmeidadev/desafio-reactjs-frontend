import styled from 'styled-components';

const Shimmer = styled.div`
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 800px;
  display: inline-block;
  position: relative;

  animation: shimmer 1.4s linear infinite;

  @keyframes shimmer {
    0% {
      background-position: -400px 0;
    }

    100% {
      background-position: 400px 0;
    }
  }
`;

export const PictureSkeleton = styled(Shimmer)`
  width: 100%;
  height: 0;
  padding-bottom: 100%;

  margin-bottom: ${props => props.theme.margins.normal};
`;

export const NameSkeleton = styled(Shimmer)`
  width: 80%;
  height: 24px;

  margin-bottom: ${props => props.theme.margins.smaller};
`;

export const RoleSkeleton = styled(Shimmer)`
  width: 60%;
  height: 20px;

  margin-bottom: ${props => props.theme.margins.normal};
`;

export const IconSection = styled.div`
  display: flex;

  > div + div {
    margin-left: ${props => props.theme.margins.normal};
  }
`;

export const IconSkeleton = styled(Shimmer)`
  width: 20px;
  height: 20px;

  margin-bottom: ${props => props.theme.margins.normal};
`;
