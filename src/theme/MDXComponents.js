
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

import { ButtonVariants } from '@site/src/components/button/ButtonVariants';
import { ButtonSizes } from '@site/src/components/button/ButtonSizes';
import { ButtonLoader } from '@site/src/components/button/ButtonLoader';

import { SingleToggle } from '@site/src/components/toggle/SingleToggle'
import { ToggleSizes } from '@site/src/components/toggle/ToggleSizes'
import { ToggleVariants } from '@site/src/components/toggle/ToggleVariants'



export default {
  // Re-use the default mapping
  ...MDXComponents,
  
  ButtonVariants,
  ButtonSizes,
  ButtonLoader,

  SingleToggle,
  ToggleSizes,
  ToggleVariants
};