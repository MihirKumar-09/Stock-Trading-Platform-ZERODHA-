import style from "./Hero.module.css";
export default function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivative, mutual funds, and
          more
        </p>
        <button className={style.signUpBtn}>Signup now</button>
      </div>
    </div>
  );
}
