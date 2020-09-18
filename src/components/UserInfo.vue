<template>
  <div class="col-md-3 d-none d-sm-none d-md-none d-lg-block">
    <div class="card">
        <div class="card-body">
            <div class="d-flex justify-content-start align-items-center">
                <div class="mr-2">
                    <img class="rounded-circle" width="100" src="https://picsum.photos/50/50" alt="">
                </div>
                <div class="ml-2">
                    <div class="h5 m-0"><a href="/profile/">@chague</a></div>
                    <div class="h7 text-muted">Darwin Valero</div>
                    <div class="h7">Esto es una descripcion</div>                   
                </div>
                <div class="col p-0 text-right">
                    <a href="/edit/chague" class="btn btn-primary btn-sm"> Edit </a>
                </div>
            </div>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <div class="h6 text-muted"><a href="/followers/chague"> Followers </a></div>
                <div class="h5">1000</div>
            </li>
            <li class="list-group-item">
                <div class="h6 text-muted"><a href="/followings/chague"> Following </a></div>
                <div class="h5">1000</div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    msg: String
  }
}
</script>
