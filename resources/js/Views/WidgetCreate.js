import React, {Component} from 'react';
import * as API from '../requests';

class WidgetCreate extends Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(this.formRef.current);
        formData.append('position', this.props.match.params.position_id)
        API.widgetCreate(formData).then((res) => {
            this.props.history.push(`/`)
        })
    }

    render() {
        return (
            <form ref={this.formRef}>
                <div className="container mt-5 w-50">
                    <div className="card">
                        <div className="card-header bg-dark text-light">
                            <h4>Create a widget</h4>
                        </div>
                        <div className="card-body">
                            <div className="form-group row row-cols-1">
                                <div className="col col-md-10 offset-md-1 mt-3">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className="form-control" name="title" id="title" placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group row row-cols-1">
                                <div className="col col-md-10 offset-md-1 mt-3">
                                    <label htmlFor="url">URL</label>
                                    <input type="text" className="form-control" name="url" id="url" placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group row row-cols-1">
                                <div className="col col-md-10 offset-md-1 mt-3">
                                    <label htmlFor="color">Color</label>
                                    <select className="form-control" name="color" id="color">
                                        <option value="bg-danger" className="text-danger">Red</option>
                                        <option value="bg-success" className="text-success">Green</option>
                                        <option value="bg-primary" className="text-primary">Blue</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col col-md-10 offset-md-1 mt-3">
                                    <button type="submit" className="btn btn-primary"
                                            onClick={this.handleSubmit}>Action
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default WidgetCreate;
