<template>
  <div class="col-md-3 d-none d-sm-none d-md-none d-lg-block">
      <b-card>
            <div class="d-flex justify-content-start align-items-center">
                <b-card-img
                    src="https://picsum.photos/50/50"
                    width="100"
                    left
                    class="rounded-circle"
                ></b-card-img>
                <div class="ml-2">
                    <div class="h5 m-0"><a href="/profile/">@chague</a></div>
                    <div class="h7 text-muted">Darwin Valero</div>
                    <div class="h7">Esto es una descripcion</div>                   
                </div>
                <div class="col p-0 text-right">
                    <a href="/edit/chague" class="btn btn-primary btn-sm"> Edit </a>
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
      </b-card>
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
