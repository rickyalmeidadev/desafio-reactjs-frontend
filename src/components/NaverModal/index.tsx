import React, { SyntheticEvent } from 'react';

import { INaver } from '../../services/api';

import { ModalWrapper } from '..';
import { Container, Picture, InfoSection, InfoItem, Close } from './styles';

import { useModal } from '../../hooks/useModal';

import picture from '../../assets/images/naver-example.png';

type IProps = INaver;

const NaverModal: React.FC<IProps> = ({
  name,
  url,
  job_role,
  birthdate,
  admission_date,
  project,
}) => {
  const { naverToggle, handleNaverToggle } = useModal();

  const handleBrokenImg = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = picture;
  };

  const formattedBirthdate = birthdate
    ? new Date().getFullYear() - new Date(birthdate).getFullYear()
    : null;

  const formattedAdmissionDate = admission_date
    ? new Date().getFullYear() - new Date(admission_date).getFullYear()
    : null;

  return (
    <ModalWrapper isShowing={naverToggle}>
      <Container>
        <Close onClick={handleNaverToggle} />
        <Picture onError={handleBrokenImg} src={url} alt={name} />
        <InfoSection>
          <h2>{name}</h2>
          <p>{job_role}</p>

          <InfoItem>
            <h3>Idade</h3>
            <p>{formattedBirthdate} anos</p>
          </InfoItem>

          <InfoItem>
            <h3>Tempo de empresa</h3>
            <p>{formattedAdmissionDate} anos</p>
          </InfoItem>

          <InfoItem>
            <h3>Projetos que participou</h3>
            <p>{project}</p>
          </InfoItem>
        </InfoSection>
      </Container>
    </ModalWrapper>
  );
};

export default NaverModal;
