<template>
  <q-layout view="lHr lpR lFr">

    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class = "text-weight-bold">
          <q-avatar>
            
          </q-avatar>
          <span class = "gt-sm"> {{$route.name}} </span>
          <q-icon name="fas fa-brain" size="sm" color="primary" class = "q-pa-md lt-md absolute-center"/>
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered :width="250">
      <q-icon name="fas fa-brain" size="lg" color="primary" class = "q-pa-md"/>
      <q-list bordered padding>
      <q-item>
        <q-item-section>
          <q-item-label overline>Acess Sero tools</q-item-label>
          <q-item-label>Easily acess our tools</q-item-label>
          <q-item-label caption>Find therapists, Account management</q-item-label>
        </q-item-section>

      </q-item>

      <q-separator spaced />
      <q-item-label header>Menu</q-item-label>

      <q-item
      to="/"
      v-ripple
      clickable
      exact>
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>
        <q-item-section class="text-weight-lg">Home</q-item-section>
      </q-item>

      <q-item
      to="find"
      v-ripple
      clickable
      exact>
        <q-item-section avatar>
          <q-icon name="search" />
        </q-item-section>
        <q-item-section class="text-weight-lg">Find Therapists</q-item-section>
      </q-item>

      <!-- <q-separator spaced inset="item" /> -->
      
      <q-item
      to="account"
      v-ripple
      clickable
      exact>
        <q-item-section avatar>
          <q-icon name="account_circle" />
        </q-item-section>
        <q-item-section>Account</q-item-section>
      </q-item>
      
    </q-list>
    </q-drawer>

<!-- ---------------------------------------------------------------------------------
---------------------------------Right Drawer------------------------------------
--------------------------------------------------------------------------------- -->

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered :width="250">
      <q-input color="grey-3" label-color="primary" outlined v-model="text" label="Find" rounded class="q-pa-md" dense>
        <template v-slot:append>
          <q-icon name="search" color="primary" />
        </template>
      </q-input>
      
      
      <q-list
        separator
      >
        
        
        <q-item>
          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
            <q-icon name="star" color="yellow" />
          </q-item-section>
        </q-item>
        
        
        
        <q-item>
          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
            <q-icon name="star" color="yellow" />
          </q-item-section>
        </q-item>
      </q-list>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>