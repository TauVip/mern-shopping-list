import { Component } from 'react'
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem
} from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LoginModal from './auth/LoginModal'
import { Logout } from './auth/Logout'
import RegisterModal from './auth/RegisterModal'

class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <Navbar color='dark' dark expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand href='/'>ShoppingList</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <RegisterModal />
                </NavItem>
                <NavItem>
                  <LoginModal />
                </NavItem>
                <NavItem>
                  <Logout />
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(AppNavbar)
