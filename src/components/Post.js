import React from 'react';
import {Card} from 'react-bootstrap';

// Styles
import 'bootstrap/dist/css/bootstrap.css';

const Post = (props) => (
    <div>
            <Card className='my-3'>
                <Card.Header>{props.content.title.rendered}</Card.Header>
                <Card.Body>
                    <Card.Text>
                    {   
                        props.content.content.rendered.replace(/<\/?[^>]+(>|$)/g,'')
                    }
                    </Card.Text>
                </Card.Body>
            </Card>
    </div>
);

export default Post;