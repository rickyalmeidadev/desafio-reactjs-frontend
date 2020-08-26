import React, { SyntheticEvent } from 'react';

import { useModal } from '../../hooks/useModal';
import { useNavers } from '../../hooks/useNavers';

import { ModalWrapper, NaverModalSkeleton } from '..';
import { Container, Picture, InfoSection, InfoItem, Close } from './styles';

import imagePlaceholder from '../../assets/images/image-placeholder.png';

import { formatBirthdate, formatAdmissionDate } from './formatTime';

const NaverModal: React.FC = () => {
  const { naverToggle, handleNaverToggle } = useModal();

  const {
    selectedNaver: { name, url, job_role, birthdate, admission_date, project },
    isLoadingModal,
  } = useNavers();

  const handleBrokenImg = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = imagePlaceholder;
  };

  const formattedBirthdate = formatBirthdate(birthdate);
  const formattedAdmissionDate = formatAdmissionDate(admission_date);

  return (
    <ModalWrapper isShowing={naverToggle}>
      <Container>
        {isLoadingModal ? (
          <NaverModalSkeleton />
        ) : (
          <>
            <Close onClick={handleNaverToggle} />
            <Picture onError={handleBrokenImg} src={url} alt={name} />
            <InfoSection>
              <h2>{name}</h2>
              <p>{job_role}</p>

              <InfoItem>
                <h3>Idade</h3>
                <p>{formattedBirthdate}</p>
              </InfoItem>

              <InfoItem>
                <h3>Tempo de empresa</h3>
                <p>{formattedAdmissionDate}</p>
              </InfoItem>

              <InfoItem>
                <h3>Projetos que participou</h3>
                <p>{project}</p>
              </InfoItem>
            </InfoSection>
          </>
        )}
      </Container>
    </ModalWrapper>
  );
};

export default NaverModal;
