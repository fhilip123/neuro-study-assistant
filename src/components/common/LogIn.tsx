interface Props {
  width?: number;
  height?: number;
  text?: string;
}

const LogIn = ({ width, height, text }: Props) => {
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
        {text}
      </button>
    </div>
  );
};

export default LogIn;
