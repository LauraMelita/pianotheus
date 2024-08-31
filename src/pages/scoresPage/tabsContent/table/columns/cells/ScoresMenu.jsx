import React from 'react';

import { useAudioPlayer } from '../../../../../../hooks/useAudioPlayer';
import { useDropdownModal } from '../../../../../../hooks/useDropdownModal';

import Svg from '../../../../../../components/UI/svg/Svg';
import Button from '../../../../../../components/UI/button/Button';
import Video from '../../../../../../components/UI/video/Video';
import {
  DropdownMenu,
  DropdownItem,
  DropdownModalItem,
} from '../../../../../../components/UI/dropdown/Dropdown';
import DownloadButton from '../../../../../../features/scores/download/DownloadButton';
import ViewPDFButton from '../../../../../../features/scores/view/ViewPDFButton';

const ScoresMenu = ({ score }) => {
  const {
    dropdownTriggerRef,
    focusRef,
    dropdownOpen,
    hasOpenModal,
    setDropdownOpen,
    handleSelectDropdownItem,
    handleToggleModal,
  } = useDropdownModal();

  const { handlePauseSong } = useAudioPlayer();

  const hasSheetMusic = score.status.sheetMusic === 'uploaded';
  const hasMidi = score.status.midi === 'uploaded';
  const hasTutorial = score.videoKey;

  const openTutorial = () => {
    handleSelectDropdownItem();
    handlePauseSong();
  };

  return (
    <DropdownMenu
      className='scores-menu__dropdown-menu'
      open={dropdownOpen}
      onOpenChange={setDropdownOpen}
      triggerComponent={
        <div ref={dropdownTriggerRef}>
          <Button className='more-button'>
            <Svg icon='more' />
          </Button>
        </div>
      }
      triggerOffset={0}
      align='end'
      alignOffset={-10}
      hidden={hasOpenModal}
      onCloseAutoFocus={(e) => {
        if (focusRef.current) {
          focusRef.current.focus();
          focusRef.current = null;
          e.preventDefault();
        }
      }}
    >
      {hasSheetMusic && (
        <DropdownItem>
          <DownloadButton score={score} fileType='sheetMusic' isDropdownItem />
        </DropdownItem>
      )}

      {hasSheetMusic && (
        <DropdownItem>
          <ViewPDFButton score={score} isDropdownItem />
        </DropdownItem>
      )}

      {hasMidi && (
        <DropdownItem>
          <DownloadButton score={score} fileType='midi' isDropdownItem />
        </DropdownItem>
      )}

      {hasTutorial && (
        <DropdownModalItem
          className='youtube'
          modalTrigger={
            <span>
              <Svg icon='youtube-outline' />
              Watch Tutorial
            </span>
          }
          onOpenChange={handleToggleModal}
          onSelect={openTutorial}
        >
          <Video title={score.title} videoKey={score.videoKey} autoPlay />
        </DropdownModalItem>
      )}
    </DropdownMenu>
  );
};

export default ScoresMenu;
