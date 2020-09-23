import React, {Component} from 'react';
import * as API from '../requests';
import Container from "../components/Container";
import WidgetCreate from "../components/widgets/WidgetCreate";
import Alert from "../components/Notifications/Alert";

class Create extends Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            success: false,
            failed: false,
            errors: []
        }
    }

    handleSubmit(form, index) {
        const formData = new FormData(form);
        formData.append('position', this.props.match.params.position_id)
        API.widgetCreate(formData).then(res => {
            this.props.history.push('/')
        }).catch(err => {
            this.setState(() => {
                return {
                    failed: true,
                    errors: err.response.data.errors
                }
            });
        })
    }

    showErrors() {
        const {errors} = this.state;
        let message = '';
        for (const [key, value] of Object.entries(errors)) {
            message += key.charAt(0).toUpperCase() + key.slice(1) + ': ' + value.join("<br/>");
            message += "<br/>"
        }
        return <Alert type='error' message={message}/>
    }

    render() {
        console.log(this.props)
        return (
            <Container>
                <div className={'row d-flex justify-content-center'}>
                    {this.state.failed && this.showErrors()}
                    <WidgetCreate handlers={{
                        handleCreate: this.handleSubmit
                    }}/>
                </div>
            </Container>
        )
    }
}

export default Create;
