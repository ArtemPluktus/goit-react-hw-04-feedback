import css from './Feedback.module.css';

export const Section = ({ title }) => {
  return (
    <section>
      <h1 className={css.title}>{title}</h1>
    </section>
  );
};
