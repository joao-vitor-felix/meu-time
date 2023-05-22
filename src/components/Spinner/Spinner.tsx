import { SpinnerOverlay, SpinnerContainer } from "./Spinner.styles";

type SpinnerProps = {
  small?: boolean;
};

const Spinner = ({ small }: SpinnerProps) => (
  <SpinnerOverlay small={small}>
    <SpinnerContainer small={small} />
  </SpinnerOverlay>
);

export default Spinner;
