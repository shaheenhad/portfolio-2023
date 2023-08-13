import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">Built by Shaheen Hadadzadeh</p>
      <p className="footer__text">
        Inspired by{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="footer__link"
          href="https://v4.brittanychiang.com/"
        >
          Brittany Chiang
        </a>
      </p>
    </footer>
  );
};
