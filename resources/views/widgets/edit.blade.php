@extends('layouts.app')

@section('content')
    <div class="col-12 col-md-6 offset-md-3">
        <form method="post" action="{{ route('widget.update', $position) }}">
            <input name="position" value="{{ $position }}" hidden>
            {{ method_field('PUT') }}
            <div class="form-group row">
                <div class="col-12">
                    <label for="widget_title">Title</label>
                    <input type="text" class="form-control" name="title" id="widget_title" placeholder="">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-12">
                    <label for="widget_link">Link</label>
                    <input type="text" class="form-control" name="link" id="widget_link" placeholder="">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-12">
                    <label for="widget_color">Colo</label>
                    <select class="custom-select" name="color" id="widget_color">
                        <option selected>Select one</option>
                        <option value="#ff000" style="color: #ff0000">
                            Red
                        </option>
                        <option value="#00ff00" style="color: #00ff00">
                            Green
                        </option>
                        <option value="#0000ff" style="color:#0000ff">
                            Blue
                        </option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Action</button>
                </div>
            </div>
        </form>
    </div>
@endsection
