import React, { useContext } from "react";
import { Context } from "..";
import { Button, Nav , Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import { observer } from "mobx-react-lite";
import {Container} from "react-bootstrap";
import { SHOP_ROUTE } from "../utils/consts";


const NavBar = observer(() => {
    const{user} = useContext(Context)
    return(
        <Navbar bg="dark" variant="dark">
          <Container>
            <Link to={SHOP_ROUTE} style={{color:'white'}}>ROZETKA</Link>
          {user.isAuth ?
          <Nav className="ms-auto" style={{color:"white"}}>
          <Button variant={'outline-light'}>Адмие панель</Button>
            <Button variant={'outline-light'} className="ms-2">Вхід</Button>
          </Nav>
          :
          <Nav className="ms-auto" style={{color:"white"}}>
          <Button variant={'outline-light'}>Админ панель</Button>
            <Button variant={'outline-light'} className="ms-2" onClick={()=> user.setIsAuth(true)}>Авторизація</Button>
          </Nav>
        }
        </Container>
      </Navbar>
    );
});

export default NavBar;