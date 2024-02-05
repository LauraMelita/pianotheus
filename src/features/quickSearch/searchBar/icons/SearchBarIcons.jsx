import React from 'react';

import { useScreenSize } from '../../../../hooks/useScreenSize';
import { useMobileMenuContext } from '../../../../context/MobileMenuContext';

import Spinner from '../../../../components/UI/spinner/Spinner';
import Button from '../../../../components/UI/button/Button';
import Svg from '../../../../components/UI/svg/Svg';

//prettier-ignore
const SearchBarIcons = ({
  dataIsLoading,
  clearSearch,
  showDropdown,
  searchInputEmpty,
}) => {
  const { isMobile } = useScreenSize();
  const { menus: { drawer: { close: closeSearchMenu } } } = useMobileMenuContext();

  return isMobile ? (
    <Button variant='icon'>
      <Svg icon='close' onClick={closeSearchMenu} />
    </Button>
  ) : (
    <Button variant='icon'>
      {!searchInputEmpty && dataIsLoading && <Spinner type='dotted' />}
      {!searchInputEmpty && showDropdown && <Svg icon='close' onClick={clearSearch} />}
    </Button>
  );
};

export default SearchBarIcons;
