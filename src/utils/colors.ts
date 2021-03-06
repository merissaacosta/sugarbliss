export type color = keyof typeof solids;
export type grays = keyof typeof grays;

interface Colors {
  solids: { [K in color]: string };
}

const solids = {
  BROWN: '#4F2C1D',
  MAIN_MED_BLUE: '#619ec2',
  MAIN_LIGHT_BLUE: '#98d9ec',
  MAIN_MED_PINK: '#e6a3b4',
  MAIN_LIGHT_PINK: '#f7aec0',
  ORDER_PINK: '#f4d7d9',
  ORDER_PINK_LIGHT: '#f7e2e3',
  ORDER_DARK_BLUE_LIGHT: '#3e4b67',
  DARK_BLUE: '#2c3a56',
  BABY_BLUE: '#d9edf7',
  BABY_PINK: '#fef6f5',
  WHITE: '#FFF',
  ERROR: 'red',
};


export const colors: Colors = { solids };