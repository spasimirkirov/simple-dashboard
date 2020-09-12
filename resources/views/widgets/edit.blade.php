@extends('layouts.app')

@section('content')
    <div class="col-12 col-md-6 offset-md-3 mb-2">
        <a class="btn btn-primary" href="{{ route('dashboard') }}">
            <i class="fa fa-arrow-circle-left" aria-hidden="true"></i> Back to dashboard</a>
        <div class="card mt-1">
            <div class="card-body">
                <form method="post" action="{{ route('widget.update', $position) }}">
                    <input name="position" value="{{ $position }}" hidden>
                    @csrf
                    {{ method_field('PUT') }}
                    <div class="form-group row">
                        <div class="col-12">
                            <label for="widget_title">Title</label>
                            <input type="text" class="form-control" name="title" id="widget_title" placeholder=""
                                   value="{{$widget['title']  ?? ''}}" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-12">
                            <label for="widget_link">Link</label>
                            <input type="text" class="form-control" name="url" id="widget_link" placeholder=""
                                   value="{{$widget['url'] ?? ''}}" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-12">
                            <label for="widget_color">Colo</label>
                            <select class="custom-select" name="color" id="widget_color" required>
                                <option selected>Select one</option>
                                <option value="#ff0000"
                                        style="color: #ff0000" {{ isset($widget['color']) && $widget['color']  === "#ff0000" ?  'selected' : null }}>
                                    Red
                                </option>
                                <option value="#00ff00"
                                        style="color: #00ff00" {{ isset($widget['color']) && $widget['color'] === "#00ff00" ?  'selected' : null}}>
                                    Green
                                </option>
                                <option value="#0000ff"
                                        style="color:#0000ff" {{ isset($widget['color']) && $widget['color'] === "#0000ff" ?  'selected' : null}}>
                                    Blue
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    @if(isset($widget['id']))
        <div class="col-12 col-md-6 offset-md-3">
            <div class="card">
                <div class="card-body">
                    <h4>Widget deletion</h4>
                    <form method="post" action="{{ route('widget.delete', $position) }}">
                        @csrf
                        {{ method_field('DELETE') }}
                        <p>Are you sure you wish to delete the following widget?</p>
                        <ul class="list-unstyled">
                            <li>Title: {{$widget['title'] }}</li>
                            <li>URL: {{$widget['url'] }}</li>
                            <li>Color: {{$widget['color'] }}</li>
                        </ul>
                        <div class="form-group row">
                            <div class="col-12">
                                <button type="submit" class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    @endif
@endsection
