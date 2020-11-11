import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="row">

                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width='100%' object src={this.props.dish.image} alt={this.props.dish.name}></CardImg>
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>

                        </Card>
                    </div>

                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {this.renderComments(this.props.dish.comments)}
                        </ul>

                    </div>

                </div>

            );

        } else {
            return (<div></div>);
        }
    }

    formatDate(date) {
        const option = { year: 'numeric', month: 'short', day: 'numeric' };
        const newdate = new Date(date).toLocaleDateString("en-US", option)
        return newdate;

    }

    renderComments(comments) {
        if (comments != null) {


            return comments.map((comment) => (

                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>{`-- ${comment.author} , ${this.formatDate(comment.date)}`}</p>
                </li>

            )

            );

        }


        else {
            return (<div></div>);
        }

    }

    render() {
        return (
            this.renderDish(this.props.dish)
        )





    }
}

export default DishDetail;