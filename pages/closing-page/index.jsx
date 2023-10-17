import Footer from "../../components/footer/footer";
import style from "./closingPage.module.css";

export default function ClosingPage() {
  return (
    <div className={style.container}>
      <div className={style.centerDiv}>
        <img className="icon" src="/icons/Icon-person-white.svg" alt="" />
        <p>
          Thank you for using this apps.
          <br />
          See you again.
        </p>
      </div>
      <Footer />
    </div>
  );
}
