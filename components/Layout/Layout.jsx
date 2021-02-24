import styles, { globalStyles } from "./Style";
export default function Layout({ children }) {
  return (
    <>
      {/* Layout render */}
      <div>
        <main>{children}</main>
      </div>
      {/* styles */}
      <style jsx>{styles}</style>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
}
