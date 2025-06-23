import logo from "../../assets/logo.jpg";

interface Props {
    size: number;
}

const Logo = ({size}: Props) => {
  return (
    <div>
      <img src={logo} alt="logo" height={size}/>
    </div>
  );
};

export default Logo;
