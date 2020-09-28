<template>
    <b-form inline class="mb-2">
        <b-row class="w-100" align-v="center" align-h="between" >
            <b-col cols="1" align-self="center">
                <b-icon icon="search" class="mr-2"></b-icon>
            </b-col>
            <b-col cols="11">
                <b-form-input
                        placeholder="Search"
                        class="w-100"
                ></b-form-input>
            </b-col>
        </b-row>
    </b-form>
</template>

<script>

export default{
    name: 'SearchForm'
}
</script>