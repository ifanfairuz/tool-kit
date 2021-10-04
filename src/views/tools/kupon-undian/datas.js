import { loadStorage, saveStorage } from '@lib/support/storage';

const data_default = {
  is_full: false,
  config: {
    paper: {
      size: 'A4',
      landscape: false,
      margin: {
        top: 0.2,
        right: 0.2,
        bottom: 0.2,
        left: 0.1
      }
    },
    layout: {
      col: 2,
      row: 6,
      spacing: 1
    },
    coupon: {
      bg: {
        type: 'gradient',
        solid: {
          red: 255,
          green: 0,
          blue: 0,
          alpha: 1,
          style: '#ff0000'
        },
        gradient: {
          type: 'linear',
          degree: 21,
          points: [
            {
              left: 0,
              red: 2,
              green: 0,
              blue: 36,
              alpha: 0.78
            },
            {
              left: 33,
              red: 87,
              green: 13,
              blue: 248,
              alpha: 1
            },
            {
              left: 100,
              red: 240,
              green: 0,
              blue: 184,
              alpha: 1
            }
          ],
          style: 'linear-gradient(21deg, rgba(2,0,36,0.78) 0%, rgba(87,13,248,1) 33%, rgba(240,0,184,1) 100%)'
        },
        image: {
          file: null,
          position: 'center',
          width: '100',
          height: '100',
          repeat: false,
        }
      }
    }
  },
  view: {
    tab: 'paper'
  }
}

export const saveConfig = value => saveStorage('kupon-undian-config', value);
export const loadConfig = () => loadStorage('kupon-undian-config');

export default () => ({
  ...data_default,
  config: {
    ...data_default.config,
    ...loadConfig()
  }
});