<template>
<div class="card gedf-card mt-5">
    <div class="card-header">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-between align-items-center">
                <div class="mr-2">
                    <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="">
                </div>
                <div class="ml-2">
                    <div class="h5 m-0"><a href="/profile/">@chague</a></div>
                    <div class="h7 text-muted">Darwin Valero </div>
                </div>
            </div>
            <div>
                <div class="dropdown">
                    <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-ellipsis-h"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                        <div class="h6 dropdown-header">Configuration</div>
                        <a class="dropdown-item" href="#">Save</a>
                        <a class="dropdown-item" href="#">Hide</a>
                        <a class="dropdown-item" href="#">Report</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="card-body">
        <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>Hace unos segundos</div>
        <p class="card-text">
            Esto es un Tweet de prueba 
        </p>
    </div>
    <div class="card-footer">
        <a href="/likes/" class="card-link" ><i
                class="fa fa-gittip"></i> 1 Like</a>
        <a class="card-link" data-toggle="collapse" href="#comments" role="button" aria-expanded="false"
            aria-controls="comments"><i class="fa fa-comment"></i> Comment</a>
        <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
    </div>
    <!-- collapsed comments begins -->
    <div class="collapse" id="comments">
        <div class="card">
            <section class="mt-3 container">
                <form action="/comment/" method="POST">
                    <div class="form-group">
                        <textarea class="form-control" id="comment" name="comment" rows="3" placeholder="Make a comment?"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Comment</button>
                    </div>
                </form>
            </section>
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <div class="mr-2">
                        <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="">
                    </div>
                    <div class="ml-2">
                        <div class="h5 m-0"><a href="/profile/">@chague</a></div>
                        <div class="h7 text-muted">Darwin Valero </div>
                    </div>
                </div>
                <hr>
                <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>Hace unos segundos</div>
                <p class="card-text">
                    Esto es un comentario de prueba
                </p>
            </div>
        </div>
    </div>
    <!-- collapsed comments ends -->
</div>
</template>

<script>
export default {
  name: 'Timeline',
  props: {
    msg: String
  }
}
</script>