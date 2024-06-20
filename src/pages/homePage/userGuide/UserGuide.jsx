import React from 'react';

import Tabs from '../../../features/tabs/Tabs';
import Image from '../../../components/UI/image/Image';
import Instruction from './instruction/Instruction';
import Tips from './tips/Tips';

import { siteConfig } from '../../../utils/config';

import './UserGuide.scss';

const UserGuide = () => {
  const { instructions, tips } = siteConfig.home.userGuide;

  const tabs = instructions.map((instruction) => ({
    name: instruction.label.toLocaleLowerCase(),
    label: instruction.label,
    content: (
      <Instruction
        title={instruction.title}
        instruction={instruction.instruction}
        link={instruction.link}
      />
    ),
    image: instruction.image,
  }));

  const displayImage = (currentTab) => {
    return (
      currentTab.image && (
        <Image
          src={`${require(`../../../assets/images/instructions/${currentTab.image}`)}`}
          alt={`screenshot`}
        />
      )
    );
  };

  return (
    <div className='user-guide'>
      <div className='instructions'>
        <div id='instructions__video' />
        <div className='instructions__steps'>
          <h1 className='heading'>How It Works</h1>
          <Tabs
            tabs={tabs}
            hasPortal
            portalId='instructions__video'
            renderPortalContent={displayImage}
          />
        </div>
      </div>
      <Tips tips={tips} />
    </div>
  );
};

export default UserGuide;
