import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {editStream, fetchStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
    componentDidMount = () => {
        this.props.fetchStream(this.props.match.params.id)
    };

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    };

    render = () => {
        return (
            <StreamForm onSubmit={this.onSubmit} title="Edit a Stream" initialValues={_.pick(this.props.stream, 'title', 'description')} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {editStream, fetchStream})(StreamEdit)