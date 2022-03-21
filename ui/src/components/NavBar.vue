<template>
  <div>
    <Snackbar />
    <v-app-bar app clipped-left color="white">
      <v-avatar size="75px">
        <v-img src="logo.png"></v-img>
      </v-avatar>
    </v-app-bar>
    <v-navigation-drawer app permanent clipped flat>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Modulo Academico
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import Snackbar from "./SnackBar.vue";
export default {
  components: { Snackbar },
  data: () => ({
    items: [{ title: "alunos", icon: "mdi-school", link: "/" }],
  }),
};
</script>
