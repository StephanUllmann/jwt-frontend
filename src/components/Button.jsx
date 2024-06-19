import { twMerge } from 'tailwind-merge';

const Button = (props) => {
  return (
    <button className={twMerge('bg-turtle-green-900 text-cocoa-bean-200', props.className)} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
