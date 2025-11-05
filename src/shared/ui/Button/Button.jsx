import s from './button.module.scss';
const Button = ({ title, onClick, className, disabled }) => {
  return (
    <button
      className={`${s.button} dark:text-white ${className ? className : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
