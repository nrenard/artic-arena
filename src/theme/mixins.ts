type TJustity =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly' | 'initial';

export const simpleFlex = (justifyContent: TJustity = 'initial') => `
  display: flex;
  align-items: center;
  justify-content: ${justifyContent};
`;

export const container = `
  width: 100%;
  max-width: 1280px;
  padding: 0 20px;
`;