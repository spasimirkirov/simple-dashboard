<div class="widget d-flex justify-content-center border border-black p-3">
    @if($widget)
        <a href="{{ $widget['url'] }}" style="background-color: {{$widget['color']}}">{{ $widget['title']}} </a>
    @else
        <a href="{{ route('widget.edit', $position) }}">
            <i class="fa fa-plus-circle fa-4x" aria-hidden="true"></i>
        </a>
    @endif
</div>
