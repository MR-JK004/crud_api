import React from 'react'
import {Card} from 'react-bootstrap';

function Feed({imageUrl,title,description}) {
let dummyText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt similique accusamus, necessitatibus fugiat qui illo? Esse, laboriosam. Maiores repudiandae ipsum deleniti inventore ipsa mollitia alias, impedit ducimus eligendi deserunt."
  return <Card style={{height:'36rem'}} className='custom-card' >
  <Card.Img variant="top" src={imageUrl} />
  <Card.Body>
    <Card.Title>{title?title:"Title Goes Here"}</Card.Title>
    <Card.Text>
     {description?description:dummyText}
    </Card.Text>
   
  </Card.Body>
</Card>
}
export default Feed