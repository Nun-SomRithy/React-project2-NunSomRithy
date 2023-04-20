
import React from 'react'
import Card from 'react-bootstrap/Card';
import ButtonReusable from './ButtonReusable';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



export default function Productcard(props) {
  const { products } = props;  
 const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >
            <div className='text-center'>
              Rendering Data Api into Child components
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
   
      <div className='container d-flex flex-wrap  justify-content-evenly'>
        {products.filter((item, idx) => idx < 12).map((product) => (
          <div key={product.id}>
            <Card style={{ width: '18rem', margin: '20px' }}>
              <Card.Img variant='top' src={product.images} />
              <Card.Body>
                <Card.Title className='text-center'>{product.title} <br></br> (${product.price})</Card.Title>
                <Card.Text>{product.description}</Card.Text>
            
                <div className='float-start'>
                  <ButtonReusable textColor={"white"} color={"orange"} title={"Buy Now"}/>
                </div>
                <div className='float-end'>
                <ButtonReusable textColor={"white"} color={"green"} title={"Add to cart"} />
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
 
    </>
  );
}