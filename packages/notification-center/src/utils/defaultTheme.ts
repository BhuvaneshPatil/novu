import merge from 'lodash.merge';

import {
  defaultCommonTheme,
  defaultDarkTheme,
  defaultLightTheme,
  defaultNotificationBellDarkTheme,
  defaultNotificationBellLightTheme,
} from '../shared/config/themeDefaultValues';
import { ICommonTheme, INovuThemeProvider } from '../store/novu-theme-provider.context';
import { INotificationBellColors, INovuTheme } from '../store/novu-theme.context';
import { ColorScheme } from '../index';

interface IDefaultThemeProps {
  colorScheme?: ColorScheme;
  theme?: INovuThemeProvider;
}

export function getDefaultTheme(props: IDefaultThemeProps): {
  theme: INovuTheme;
  common: ICommonTheme;
} {
  const theme =
    props.colorScheme === 'light'
      ? merge(structuredClone(defaultLightTheme), props?.theme?.light)
      : merge(structuredClone(defaultDarkTheme), props?.theme?.dark);

  const common = merge(structuredClone(defaultCommonTheme), props?.theme?.common);

  return {
    theme,
    common,
  };
}

interface IDefaultBellColors {
  colorScheme?: ColorScheme;
  bellColors: INotificationBellColors;
}

export function getDefaultBellColors(props: IDefaultBellColors): { bellColors: INotificationBellColors } {
  const colorScheme = props?.colorScheme ? props?.colorScheme : 'light';

  const bellColors =
    colorScheme === 'light'
      ? { ...structuredClone(defaultNotificationBellLightTheme), bellColors: props?.bellColors }
      : { ...structuredClone(defaultNotificationBellDarkTheme), bellColors: props?.bellColors };

  return {
    bellColors,
  };
}
