import React from 'react'
import './Navbar.css'
const Navbar = ({filterItem,menuList}) => {
  return (
    <>
         <nav className='navbar'>
    <div className='btn-group'>
        {
            menuList?.map((curElem)=>{
                return (
                    <button className='btn-group__item' onClick={()=>filterItem(curElem)}>{curElem}</button>
                )
            })
        }
    </div>
    </nav>
    </>
  )
}

export default Navbar



{/* <Navbar bg="light" variant="light">
<Container>
  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link>
  </Nav>
</Container>
</Navbar> */}