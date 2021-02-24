const Avatar = (text, size, src, alt) => {
  return (
    <>
      <div className="container">
        <img src={src} alt={alt} style={{ width: `${size}` }} className="avatar" />
        <strong>{text}</strong>
      </div>
    </>
  );
};

export default Avatar;
