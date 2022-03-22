<template>
  <v-toolbar color="grey lighten-3" flat>
    <v-spacer></v-spacer
    ><v-toolbar-title class="text-h4"> {{ title }} </v-toolbar-title
    ><v-spacer></v-spacer>
  </v-toolbar>
</template>
<script>
export default {
  props: {
    title: String,
  },
};
</script>
