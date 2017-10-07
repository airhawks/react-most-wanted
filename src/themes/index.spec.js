import {getThemeSource}  from './index';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

describe('locales', () => {

  it('should return theme source', () => {
    expect(
      getThemeSource('light')
    ).toEqual(lightBaseTheme)
  })

  it('should return default theme on wrong input', () => {
    expect(
      getThemeSource('themeX')
    ).toEqual(lightBaseTheme)
  })


})
