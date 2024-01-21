import { useState } from 'react';

export const useShowPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prevState) => !prevState);

  const icon = showPassword ? 'eye' : 'eye-slash';

  const inputType = showPassword ? 'text' : 'password';

  return { toggleShowPassword, icon, inputType };
};
