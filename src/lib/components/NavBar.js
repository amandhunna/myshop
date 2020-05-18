import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
export default function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Saada Bazar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/info">Info</Nav.Link>
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
 */}            </Navbar>

        </div>
    )
}