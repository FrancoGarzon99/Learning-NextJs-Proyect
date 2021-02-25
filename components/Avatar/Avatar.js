import styles from 'components/Avatar/avatar.module.css';
const Avatar = ({ text, src, alt, size }) => {
  return (
    <>
      <div className={styles.container}>
        <img src={src} alt={alt} className={styles.avatar} style={{ width: `${size}` }} />
        <strong>{text}</strong>
      </div>
    </>
  );
};

export default Avatar;
