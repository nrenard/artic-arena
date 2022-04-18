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