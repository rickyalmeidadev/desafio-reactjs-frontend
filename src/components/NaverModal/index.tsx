import React from 'react';

import { ModalWrapper } from '..';
import { Container, Picture, InfoSection, InfoItem, Close } from './styles';

import { useModal } from '../../hooks/useModal';

import picture from '../../assets/images/naver-example.png';

const NaverModal: React.FC = () => {
  const { naverToggle, handleNaverToggle } = useModal();

  return (
    <ModalWrapper isShowing={naverToggle}>
      <Container>
        <Close onClick={handleNaverToggle} />
        <Picture src={picture} alt="Naver" />
        <InfoSection>
          <h2>Juliano Reis</h2>
          <p>Front-end Developer</p>

          <InfoItem>
            <h3>Idade</h3>
            <p>Lorem, ipsum.</p>
          </InfoItem>

          <InfoItem>
            <h3>Tempo de empresa</h3>
            <p>Lorem, ipsum.</p>
          </InfoItem>

          <InfoItem>
            <h3>Projetos que participou</h3>
            <p>Lorem, ipsum.</p>
          </InfoItem>
        </InfoSection>
      </Container>
    </ModalWrapper>
  );
};

export default NaverModal;
