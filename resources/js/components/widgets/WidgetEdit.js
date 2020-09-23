import React from "react";
import SelectColor from "./color.select";

export default function renderWidgetEdit(props) {
    const {slot, handlers} = props;
    const formRef = React.useRef();
    return (
        <div className="col mb-2 p-1">
            <form ref={formRef}>
                <div className="card d-flex justify-content-center w-100 border rounded">
                    <div className="form-group d-flex justify-content-center">
                        <label> Title
                            <input className="form-control" type="text" name="title" defaultValue={slot.title}/>
                        </label>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <label> URL
                            <input className="form-control" type="text" name="url" defaultValue={slot.url}/>
                        </label>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <SelectColor selected={slot.color}/>
                    </div>
                    <div className="form-group d-flex justify-content-around">
                        <button type="submit" className="btn btn-primary" onClick={(e) => {
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
                </div>
            </form>
        </div>
    )

}
