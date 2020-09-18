<template>
    <b-card
        header="Recommended Users"
        header-class="h5 text-center"
    >
    <div class="d-flex justify-content-start align-items-center">
        <b-card-img
            src="https://picsum.photos/50/50"
            width="70"
            left
            class="rounded-circle"
        ></b-card-img>
        <div class="ml-2">
            <div class="h5 m-0"><a href="/profile/">@Usuario</a></div>
            <div class="h7 text-muted">Usuario Nuevo</div>
            <div class="h7">Esto es una descripcion de Usuario</div>
        </div>
    </div>
    </b-card>
</template>

<script>
export default {
  name: 'RecommendedUsers',
  props: {
    msg: String
  }
}
</script>
