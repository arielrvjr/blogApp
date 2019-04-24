import React from 'react';
import { ListGroup, Container, Spinner } from 'react-bootstrap';
import {withRouter}  from 'react-router-dom'
import _ from 'lodash';

class CategoriesList extends React.Component {
    getActiveClass = (filter) => {
        return this.props.filter && _.isEqual(this.props.filter,filter) ? 'active' : '';
    }
    render() { 
        const { error, categories, updateFilter } = this.props;
        if (error) {
            return <div>Error: {error.message}</div>
        } else {
            return <Container>
            <h3>Categories</h3>
            <ListGroup>
                <ListGroup.Item action className={this.getActiveClass({})} onClick={updateFilter.bind(this,{})} >All</ListGroup.Item>
                {categories.map(category => 
                <ListGroup.Item key={category.id} action onClick={updateFilter.bind(this,{"categoryId":category.id})}  className={this.getActiveClass({"categoryId":category.id})}>{category.title}</ListGroup.Item>
                )}
            </ListGroup>
        </Container>
        }
    }
}
export default withRouter(CategoriesList);
