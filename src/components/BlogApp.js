import React from 'react';
import PostList from './PostList';
import CategoriesList from './CategoriesList';
import { Container, Row, Col } from 'react-bootstrap';
const BlogApp = ({blogApp,updateFilter}) => {
    console.log('BlogApp',blogApp);
    return <Container fluid className="pt-4">
    <Row>
       <Col sm={2}><CategoriesList categories={blogApp.categories} filter={blogApp.filter} updateFilter={updateFilter} /></Col>
      <Col sm={10}><PostList posts={blogApp.posts} filter={blogApp.filter} /></Col>
    </Row>
</Container>
};

export default BlogApp;