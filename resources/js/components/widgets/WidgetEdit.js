import React from "react";
import SelectColor from "./color.select";

export default function renderWidgetEdit(props) {
    const {slot, handlers} = props;
    const formRef = React.useRef();
    return (
        <div className="row">
            <div className="col-12">
                <form ref={formRef}>
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
                        <button type="submit" className="btn btn-primary mr-2" onClick={(e) => {
                            e.preventDefault();
                            handlers.handleUpdate(formRef.current, slot.position, slot.id)
                        }}>Update
                        </button>
                        <button type="submit" className="btn btn-danger" onClick={(e) => {
                            e.preventDefault();
                            handlers.handleDelete(slot.id)
                        }}>Delete
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}
