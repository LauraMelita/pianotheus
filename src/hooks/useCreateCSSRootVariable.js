import { useRef, useEffect } from 'react';

export const useCreateCSSRootVariable = (
  variableName,
  htmlElementProperty,
  cssUnit
) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const cssVariable = `--${variableName}`;
    const cssValue = `${elementRef.current[htmlElementProperty]}${cssUnit}`;

    document.documentElement.style.setProperty(cssVariable, cssValue);
  });

  return elementRef;
};
