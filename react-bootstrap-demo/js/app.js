var React = require('react');
var ReactDOM = require('react-dom');

/* navbarInstance 开始 */
var Navbar = require('react-bootstrap').Navbar;

var NavBrand = require('react-bootstrap').NavBrand;

var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;

const navbarInstance = (
    <Navbar inverse toggleNavKey={0}>
        <NavBrand>React-Demo 官网</NavBrand>
        <Nav right eventKey={0}> {/* This is the eventKey referenced */}
            <NavItem eventKey={1} href="#">介绍</NavItem>
            <NavItem eventKey={2} href="#">开始</NavItem>
            <NavItem eventKey={3} href="#">组件</NavItem>
            <NavItem eventKey={4} href="#">支持</NavItem>
            <NavDropdown eventKey={5} title="GitHUB" id="collapsible-navbar-dropdown">
                <MenuItem eventKey="1">react-demo github</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="2">react github</MenuItem>
                <MenuItem eventKey="3">react-bootstrap github</MenuItem>
                <MenuItem eventKey="4">react-bootstrap document</MenuItem>
            </NavDropdown>
        </Nav>
    </Navbar>
);

ReactDOM.render(navbarInstance, document.getElementById('header'));
/* navbarInstance 结束 */


/* thumbnailInstance 开始 */
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var Thumbnail = require('react-bootstrap').Thumbnail;

var Button = require('react-bootstrap').Button;

const thumbnailInstance = (
    <Grid>
        <Row>
            <Col xs={6} md={4}>
                <Thumbnail src="../react-bootstrap-demo/img/logo.png" alt="242x200">
                    <h3>react</h3>
                    <p>React是Facebook开发的一款JS库</p>
                    <p>
                        <Button bsStyle="default">GitHUB</Button>
                    </p>
                </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
                <Thumbnail src="../react-bootstrap-demo/img/logo.png" alt="242x200">
                    <h3>react-bootstrap</h3>
                    <p>基于react开发的组件库</p>
                    <p>
                        <Button bsStyle="primary">Document</Button>&nbsp;
                        <Button bsStyle="default">GitHUB</Button>
                    </p>
                </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
                <Thumbnail src="../react-bootstrap-demo/img/logo.png" alt="242x200">
                    <h3>react-demo</h3>
                    <p>基于react-bootstrap组件库的开发的网站</p>
                    <p>
                        <Button bsStyle="primary">Demo</Button>&nbsp;
                        <Button bsStyle="default">GitHUB</Button>
                    </p>
                </Thumbnail>
            </Col>
        </Row>
    </Grid>
);

ReactDOM.render(thumbnailInstance, document.getElementById('sub_header'));
/* thumbnailInstance 结束 */
