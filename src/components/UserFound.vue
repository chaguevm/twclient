<template>
    <b-card no-body>
        <b-card-header>
            <div class="d-flex align-items-center">
                <div class="mr-2">
                    <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt />
                </div>
                <div class="ml-2">
                    <div class="h5 m-0">
                    <a href="/profile/usuario">@Usuario</a>
                    </div>
                    <div class="h7 text-muted">Nombre y Apellido</div>
                </div>
            </div>
        </b-card-header>
        <b-card-body>
        <b-card-text>Una Descripcion de usuario</b-card-text>

        </b-card-body>
    </b-card>
</template>

<script>
export default {
  name: "UserFound",
  props: {
    msg: String,
  },
};
</script>