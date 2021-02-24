import { colors } from "../../styles/theme";

const Button = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>
        {`
          button {
            background: ${colors.black};
            border: 0;
            color: #fff;
            cursor: pointer;
            border-radius: 999px;
            font-size: 16px;
            font-weight: 800;
            padding: 8px 24px;
            transition: opacity 0.3s ease;
            align-items: center;
            display: flex;
          }
          button:focus {
            outline: none;
          }
          button:hover {
            opacity: 0.7;
          }
          button > :global(svg) {
            margin-right: 8px;
          }
        `}
      </style>
    </>
  );
};

export default Button;
