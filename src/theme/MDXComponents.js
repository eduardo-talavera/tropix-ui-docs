
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

import { ButtonVariants } from '@site/src/components/button/ButtonVariants';
import { ButtonSizes } from '@site/src/components/button/ButtonSizes';
import { ButtonLoader } from '@site/src/components/button/ButtonLoader';

import { SingleToggle } from '@site/src/components/toggle/SingleToggle'
import { ToggleSizes } from '@site/src/components/toggle/ToggleSizes'
import { ToggleVariants } from '@site/src/components/toggle/ToggleVariants'

import { AvatarSizes } from '@site/src/components/avatar/AvatarSizes';
import { AvatarVariants } from '@site/src/components/avatar/AvatarVariants';

import { SimpleTable } from '@site/src/components/table/SimpleTable';
import { CustomRendersTable } from '@site/src/components/table/CustomRendersTable';

import { InputDefault } from '@site/src/components/input/InputDefault'
import { InputIntents } from '@site/src/components/input/InputIntents'
import { InputErrMsg } from '@site/src/components/input/InputErrMsg'
import { InputCurrencyAndNumber } from '@site/src/components/input/InputCurrencyAndNumber'
import { InputSizes } from '@site/src/components/input/InputSizes'



export default {
  // Re-use the default mapping
  ...MDXComponents,
  
  ButtonVariants,
  ButtonSizes,
  ButtonLoader,

  SingleToggle,
  ToggleSizes,
  ToggleVariants,

  AvatarSizes,
  AvatarVariants,

  SimpleTable,
  CustomRendersTable,

  InputDefault,
  InputIntents,
  InputErrMsg,
  InputCurrencyAndNumber,
  InputSizes
};