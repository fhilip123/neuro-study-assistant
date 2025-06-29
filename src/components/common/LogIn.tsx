interface Props {
  width: number;
  height: number;
}

const LogIn = ({ width, height }: Props) => {
  const style: React.CSSProperties = {
    width,
    height,
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-light custom-login"
        style={style}
      >
        Log In
      </button>
    </div>
  );
};

export default LogIn;
