import Logo from "../common/Logo";
import LogIn from "../common/LogIn";
const Header = () => {
  return (
    <>
      <div className="custom-navbar d-flex justify-content-between align-items-center">
        <Logo size={50} />
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <LogIn width={100} height={50}/>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
