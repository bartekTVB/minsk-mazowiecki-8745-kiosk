import { StyledHeader, StyledNav } from './Header.style';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Clock from '../Clock/Clock';
import Weather from '../Weather/Weather';

function Header(props) {
  const { breadcrumb } = props;

  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <img src={logo} alt='' />
        </Link>
        <div>
          <Weather {...props} />
          <Clock />
        </div>
      </div>
      <StyledNav>
        {
          breadcrumb.map((item, i) => {
            return (
              <Link key={i} to={item.path}>
                <div>{item.label.replace(/\\n|\n/g, ' ')}</div>
              </Link>
            )
          })
        }
      </StyledNav>
    </StyledHeader>
  )
}

export default Header;