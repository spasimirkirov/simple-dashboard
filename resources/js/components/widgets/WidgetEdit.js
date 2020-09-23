import React from "react";
import SelectColor from "./color.select";

export default function renderWidgetEdit(props) {
    const {slot, handlers} = props;
    const formRef = React.useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append('_method', 'PATCH');
        formData.append('position', slot.position);
        handlers.handleUpdate(formData, slot.id)
    }
    const handleDelete = (e) => {
        e.preventDefault();
        handlers.handleDelete(slot.id)
    }
    return (
        <div className="row">
            <div className="col-12">
                <form ref={formRef} action="" method="post" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label> Title
                            <input className="form-control" type="text" name="title" defaultValue={slot.title}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label> URL
                            <input className="form-control" type="text" name="url" defaultValue={slot.url}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <SelectColor selected={slot.color}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-2">
                            Update
                        </button>
                        <button className="btn btn-danger" onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}
