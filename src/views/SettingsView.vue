<template>
  <v-container class="pb-12">
    <v-row class="px-3">
      <p class="text-h6">Settings</p>
    </v-row>
    <v-row class="px-3">
      <v-card rounded="" style="width: 100%">
        <v-list subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Language</v-list-item-title>
            </v-list-item-content>
            <v-list-iten-action>
              <span class="font-weight-light">English</span>
              <v-icon> mdi-chevron-right </v-icon>
            </v-list-iten-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Dark mode</v-list-item-title>
            </v-list-item-content>
            <v-list-iten-action>
              <v-switch v-model="switch1" inset color="#7CDEA3"></v-switch>
            </v-list-iten-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Notification</v-list-item-title>
            </v-list-item-content>
            <v-list-iten-action>
              <v-switch v-model="switch2" inset color="#7CDEA3"></v-switch>
            </v-list-iten-action>
          </v-list-item>
        </v-list> </v-card
    ></v-row>
    <v-row class="px-3 my-6"><v-divider></v-divider></v-row>
    <v-row class="px-3">
      <p class="text-h6">Get Help</p>
    </v-row>
    <v-row class="px-3">
      <v-card rounded="" style="width: 100%">
        <v-list subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>About Us</v-list-item-title>
            </v-list-item-content>
            <v-list-iten-action>
              <v-icon> mdi-chevron-right </v-icon>
            </v-list-iten-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Contact Us</v-list-item-title>
            </v-list-item-content>
            <v-list-iten-action>
              <v-icon> mdi-chevron-right </v-icon>
            </v-list-iten-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Register a New Bag</v-list-item-title>
            </v-list-item-content>
            <v-list-iten-action>
              <v-icon> mdi-chevron-right </v-icon>
            </v-list-iten-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Partnerships</v-list-item-title>
            </v-list-item-content>
            <v-list-iten-action>
              <v-icon> mdi-chevron-right </v-icon>
            </v-list-iten-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Terms and Conditions</v-list-item-title>
            </v-list-item-content>
            <v-list-iten-action>
              <v-icon> mdi-chevron-right </v-icon>
            </v-list-iten-action>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Privacy Policy</v-list-item-title>
            </v-list-item-content>
            <v-list-iten-action>
              <v-icon> mdi-chevron-right </v-icon>
            </v-list-iten-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "SettingsView",
  data() {
    return {
      switch1: false,
      switch2: true,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>