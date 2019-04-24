import React from 'react';
import { Card } from 'react-bootstrap'
import _ from 'lodash';

const truncate = (el) => _.truncate(el, { 'length': 50, 'separator': '...' });

const PostCard = ({post}) => (
    <Card>
        <Card.Img variant="top" src={post.image} />
        <Card.Body>
            <Card.Title>{post.title} - {post.author}</Card.Title>
            <Card.Subtitle>{post.author}</Card.Subtitle>
            <Card.Text>{truncate(post.description)} </Card.Text>
            <Card.Link href={`/show/${post.key}`}>Card Link</Card.Link>
        </Card.Body>
    </Card>)


export default PostCard;