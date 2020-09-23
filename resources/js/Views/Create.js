import React, {Component} from 'react';
import * as API from '../requests';
import Container from "../components/Container";
import WidgetCreate from "../components/widgets/WidgetCreate";
import Alert from "../components/Notifications/Alert";

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            failed: false,
            errors: []
        }
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleCreate(formData) {
        API.widgetCreate(formData).then(res => {
            this.props.history.push('/')
        }).catch(err => {
            this.setState(() => {
                return {
                    failed: true,
                }
            });
            if (err.response.data.errors) {
                this.setState(() => {
                    return {
                        failed: true,
                        errors: err.response.data.errors
                    }
                });
            }
        })
    }

    showErrors() {
        const {errors} = this.state;
        let message = "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "<span aria-hidden=\"true\">&times;</span>\n" +
            "</button>"
        message += "Something went wrong <br>";
        for (const [key, value] of Object.entries(errors)) {
            message += key.charAt(0).toUpperCase() + key.slice(1) + ': ' + value.join("<br/>");
            message += "<br/>"
        }
        return <Alert type='error' message={message}/>
    }

    render() {
        return (
            <Container>
                <div className={'row d-flex justify-content-center'}>
                    <div className="col-12 col-md-4">
                        {this.state.failed && this.showErrors()}
                    </div>
                </div>
                <div className={'row d-flex justify-content-center'}>
                    <WidgetCreate handlers={{handleCreate: this.handleCreate}}/>
                </div>
            </Container>
        )
    }
}

export default Create;
