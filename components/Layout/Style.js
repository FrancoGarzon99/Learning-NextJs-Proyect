import { breakPoins, fonts } from '../../styles/theme';
import css from 'styled-jsx/css';

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }
  main {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    height: 100%;
    position: relative;
    width: 100%;
  }
  @media (min-width: ${breakPoins.mobile}) {
    main {
      height: 90vh;
      width: ${breakPoins.mobile};
    }
  } ;
`;
export const globalStyles = css.global`
  shtml,
  body {
    background-image: radial-gradient(#099f 1px, #f4f4f4 1px),
      radial-gradient(#099f 1px, #f4f4f4 1px);
    margin: 0;
    padding: 0;
    font-family: ${fonts.base};
  }
`;
