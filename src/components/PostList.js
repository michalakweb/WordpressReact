import React from 'react';
import Post from './Post';
import {Container, Jumbotron} from 'react-bootstrap';

// Styles
import 'bootstrap/dist/css/bootstrap.css';

const PostList = (props) => (
    <div>
        <Jumbotron fluid className='mb-0'>
            <Container>
                <h1>Wordpress/React blog</h1>
                <p>
                    In this excercise I wanted to fetch quickly a few posts from a Wordpress blog and
                    show them on a front-end that's powered by React.
                </p>
            </Container>
         </Jumbotron>;
        <Container className='mb-5'>
            {props.posts.map((post,index) => <Post key={index} content={post}/>)}
        </Container>
    </div>
);

export default PostList;