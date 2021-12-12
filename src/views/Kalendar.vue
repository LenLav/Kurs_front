<template>
  <b-row>
    <b-col md="auto">
      <b-calendar v-model="value" @context="onContext" locale="ru"></b-calendar>

    </b-col>
    <b-col>
      <p>Значение: <b>'{{ value }}'</b></p>
      <p class="mb-0">Контекст:</p>
      <pre class="small"></pre>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        context: null
      }
    },
    methods: {
      onContext(ctx) {
        this.context = ctx
      }
    }
  }
</script>