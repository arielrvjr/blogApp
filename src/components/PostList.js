import React from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { Container, Col, Row, Button } from 'react-bootstrap'
import PostCard from './PostCard';
import _ from 'lodash';
class PostList extends React.Component {
    postsFiltered = (posts, filter) => filter && filter.categoryId ? _.filter(posts, filter) : posts
    render() {
        const { posts, filter } = this.props;
        return <Container>
            <h3>POSTS LIST</h3>
            <LinkContainer to="/posts/create"><Button variant="primary">Add Post</Button></LinkContainer>
            <Container>
                <Row>{this.postsFiltered(posts, filter).map(post => <Col sm={4} key={post.id}><PostCard post={post} /></Col>)}</Row>
            </Container>
        </Container>
    }
};
export default PostList;