import React, {Component} from 'react';

class WidgetCreate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <div className="container card mt-5 w-50">
                    <div className="form-group row row-cols-1">
                        <div className="col col-md-6 offset-md-3 mt-3">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" name="title" id="title" placeholder=""/>
                        </div>
                    </div>
                    <div className="form-group row row-cols-1">
                        <div className="col col-md-6 offset-md-3 mt-3">
                            <label htmlFor="url">URL</label>
                            <input type="text" className="form-control" name="url" id="url" placeholder=""/>
                        </div>
                    </div>
                    <div className="form-group row row-cols-1">
                        <div className="col col-md-6 offset-md-3 mt-3">
                            <label htmlFor="color">Color</label>
                            <select className="form-control" name="color" id="color">
                                <option value="text-danger" className="text-danger">Red</option>
                                <option value="text-success" className="text-success">Green</option>
                                <option value="text-primary" className="text-primary">Blue</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col col-md-6 offset-md-3 mt-3">
                            <button type="submit" className="btn btn-primary">Action</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default WidgetCreate;
