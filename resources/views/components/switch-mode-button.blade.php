<div>
    <div class="col-12">
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch1" {{ Session::get('edit_mode') ? 'checked' : ''}}>
            <label class="custom-control-label" for="customSwitch1">Toggle edit mode</label>
        </div>
    </div>
</div>
