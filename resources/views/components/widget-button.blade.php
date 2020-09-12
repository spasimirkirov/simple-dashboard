<div class="col mt-3">
    <div class="d-flex justify-content-center border border-black p-3">
        <div class="row">
            @if(!$widget)
                <div class="col-12 text-right">
                    <a href="{{ route('widget.edit', $position) }}">
                        <i class="fa fa-plus-circle fa-3x" aria-hidden="true"></i>
                    </a>
                </div>
            @else
                @if(Session::has('edit_mode'))
                    <div class="col-12 text-right">
                        <a href="{{ route('widget.edit', $position) }}">
                            <i class="fa fa-edit fa-3x" aria-hidden="true"></i>
                        </a>
                    </div>
                @else
                    <div class="col-12">
                        <a href="{{ $widget['url'] }}" style="background-color: {{$widget['color']}}"
                           class="btn btn-lg text-light">{{ $widget['title']}} </a>
                    </div>
                @endif
            @endif
        </div>
    </div>
</div>
