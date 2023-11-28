import { BUTTON_VARIENT } from "@utils/constants";

const Button = (props) => {
  const { variant, label, onClick, className } = props;

  if (variant === BUTTON_VARIENT.CONTAINED)
    return (
      <button
        onClick={onClick}
        // disabled={true}
        className={`px-4 py-2 text-sm bg-tertiary text-light rounded-full ${
          className ? className : ""
        }`}
      >
        {label}
      </button>
    );
};

export default Button;
