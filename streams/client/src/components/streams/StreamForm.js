import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamForm extends React.Component {
    getInput = ({input, label, meta}) => {
        return (
            <div className={`field ${meta.touched && meta.error ? 'error' : ''}`}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    };

    renderError = ({error, touched}) => {
        if (touched && error)
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render = () => {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.getInput} label="Enter Title"/>
                    <Field name="description" component={this.getInput} label="Enter Description" />
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        );
    }
};

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title)
        errors.title = 'You must enter a title';

    if (!formValues.description)
        errors.description = 'You must enter a description';

    return errors;
};

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);