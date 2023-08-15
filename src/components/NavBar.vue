<template>
  <v-navigation-drawer v-model="sidebar" app>
    <v-list>
      <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path">
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>{{ item.title }}</v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      appTitle: "Awesome App",
      sidebar: true,
      menuItems: [
        { title: "Home", path: "/home", icon: "home" },
        { title: "Sign Up", path: "/signup", icon: "face" },
        { title: "Sign In", path: "/signin", icon: "lock_open" },
      ],
    };
  },
};
</script>

<style>
</style>