import "./DashBoard.css";
import { Navbar, Container, Nav } from 'react-bootstrap';

import home from '../../images/home.svg';
import games from '../../images/games.svg';
import account from '../../images/count.svg';
import out from '../../images/out.svg';
import { Outlet } from "react-router";

// import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function DashBoard() {

    return (
       <div>
           <Navbar className="navbar, align-items-start">
            <Container>
            <Nav className="flex-column">
              <Nav.Link href="/dashBoard/home" ><img src={home} alt="home"></img ></Nav.Link>
              <Nav.Link href="/dashBoard/games"><img src={games} alt="games"></img></Nav.Link>
              <Nav.Link href="/dashBoard/account" ><img src={account} alt="count"></img></Nav.Link>
              <Nav.Link className="xx" href="/">
                <img src={out} alt="out"/>
              </Nav.Link>
            </Nav>
            </Container>
          </Navbar>

          {<Outlet />}
       </div>
    );
  }