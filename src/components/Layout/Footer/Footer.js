import classes from './Footer.module.css';

const Footer = () => {
  return (
    <section className={classes['footerSection-container']}>
      <div className={classes['footerSection-poweredBy-part']}>
        <div className={classes['footerSection-poweredBy-part-brandName']}>
          Faith Fitness 💪🏻
        </div>
        <sup className={classes['footerSection-poweredBy-part-from']}>from</sup>
        <div className={classes['footerSection-poweredBy-part-founderName']}>
          HASSAN BILAL
        </div>
      </div>
    </section>
  );
};

export default Footer;
