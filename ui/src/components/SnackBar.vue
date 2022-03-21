<template>
  <v-snackbar
    :color="color"
    outlined
    :value="true"
    v-model="snackbar"
    :timeout="timeout"
  >
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    snackbar: false,
    text: "My timeout is set to 2000.",
    timeout: 3000,
    color: "success",
  }),
  watch: {
    "$store.state.snackbar": function () {
      if (this.$store.state.snackbar) {
        this.snackbar = this.$store.state.snackbar;
        this.text = this.$store.state.message;
        this.color = this.$store.state.color;
      }
      this.$store.dispatch("modifyState", false);
    },
  },
};
</script>
