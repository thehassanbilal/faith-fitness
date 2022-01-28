import classes from './ClientTestimonials.module.css';

const ClientTestimonials = () => {
  return (
    <section className={classes['clientTestimonials-container']}>
      <div className={classes['clientTestimonials-title']}>
        <p className={classes['clientTestimonials-title-firstHalf']}>Clients</p>
        <p className={classes['clientTestimonials-title-secondHalf']}>
          Testimonials
        </p>
      </div>
      <div className={classes['clientTestimonials-video-container']}>
        <iframe
          src='https://www.youtube.com/embed/tgbNymZ7vqY'
          frameborder='0'
          width='420'
          height='345'
        />
        <iframe
          src='https://www.youtube.com/embed/tgbNymZ7vqY'
          frameborder='0'
          width='420'
          height='345'
        />
      </div>
    </section>
  );
};

export default ClientTestimonials;
