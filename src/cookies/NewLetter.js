/** @format */
import CookieConsent from "react-cookie-consent";
import "../cookies/cookie.css";

const NewsLetter = () => {
  return (
    <div>
      <CookieConsent
        className="cookieBg"
        location="bottom"
        buttonText="Accept!"
        cookieName="userExperience"
        expires={150}
      >
        This website uses cookies to enhance the user experience
      </CookieConsent>
    </div>
  );
};
export default NewsLetter;
