import { useEffect } from 'react';
import { StyledMenu, StyledWrapper } from './Menu.style';
import Button from '../Button/Button';
import { pageVariants, pageTransition, menuDecorTransition } from './motionConfig';
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import getElementByIndices from './menuUtils';
import MenuDecor from '../MenuDecor/MenuDecor';

function Menu(props) {
  const { config, setBreadcrumb, setLoader } = props;

  const location = useLocation();
  const subUrl = location.pathname;

  const { current, breadcrumb } = getElementByIndices(config, subUrl);
  const menu = current.menu?.submenu || current.menu;

  useEffect(() => {
    setBreadcrumb(breadcrumb);
  }, []);

  return (
    <StyledMenu>

      <motion.div
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
        transition={pageTransition}
      >
        <MenuDecor />
        <StyledWrapper>
          {
            menu.map((item, index) => {
              return (
                <Button
                  key={item.id}
                  index={index}
                  baseUrl={config.baseUrl}
                  label={item.label}
                  url={item.url}
                  iconNumber={item.iconNumber}
                  setLoader={setLoader}
                />
              )
            })
          }
        </StyledWrapper>
      </motion.div>
    </StyledMenu >

  )
}

export default Menu;