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
  background-size: 600px 600px;
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

  @media (min-width: 768px) {
    width: 50%;
    padding-bottom: 50%;
  }
  height: 0;
  padding-bottom: 100%;
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  padding: ${props => props.theme.paddings.larger};
`;

export const NameSkeleton = styled(Shimmer)`
  width: 80%;
  height: 20px;

  margin-bottom: ${props => props.theme.margins.normal};
`;

export const RoleSkeleton = styled(Shimmer)`
  width: 60%;
  height: 16px;

  margin-bottom: ${props => props.theme.margins.large};
`;

export const InfoTitleSkeleton = styled(Shimmer)`
  width: 70%;
  height: 18px;

  margin-bottom: ${props => props.theme.margins.normal};
`;

export const InfoTextSkeleton = styled(Shimmer)`
  width: 50%;
  height: 14px;

  margin-bottom: ${props => props.theme.margins.large};
`;
