import { useEffect } from 'react';
import ColorModeToggle from '@theme-original/ColorModeToggle';
import { useThemeMode } from 'tropix-ui';

export default function ColorModeToggleWrapper(props) {

    const { setIsDark } = useThemeMode();

    // "value" holds the color theme. Either "light" or "dark"
    const { value } = props;

    //change mode based on "value" prop
    useEffect(() => {
      if (value === 'dark') setIsDark(true)
      else setIsDark(false)
    }, [value]);

  return (
    <>
      <ColorModeToggle {...props} />
    </>
  );
}
