import { BUTTON_VARIENT } from "@utils/constants";

const Button = (props) => {
  const { variant, label, onClick } = props;

  if (variant === BUTTON_VARIENT.CONTAINED)
    return (
      <button
        onClick={onClick}
        // disabled={true}
        className="px-4 py-2 text-sm bg-tertiary text-light rounded-full"
      >
        {label}
      </button>
    );
};

export default Button;
