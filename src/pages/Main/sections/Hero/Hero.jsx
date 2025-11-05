import heroImg from './assets/hero-img.jpg';
import s from './hero.module.scss';

const Hero = ({ title, subtitle, button }) => {
  return (
    <section className={s.hero}>
      <div className={s.hero__wrapper}>
        <div className={s.hero__intro}>
          <div className={s.hero__text_wrapper}>
            <p className={`${s.hero__title} text-green-950 dark:text-white`}>
              {title}
            </p>
            <p
              className={`${s.hero__subtitle} text-green-950 dark:text-white `}
            >
              {subtitle}
            </p>
            {button}
          </div>
          <div className={`${s.hero__img_wrapper} rounded-lg overflow-hidden`}>
            <img src={heroImg} alt="" className={s.hero__img} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
