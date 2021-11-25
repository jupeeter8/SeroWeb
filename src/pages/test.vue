<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none q-bm-none">Take a test</h5>
    <P>
        Take a depression test to know more about yourself</P
    >

<div class="q-pa-md" >
    <q-list separator >
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Question 1</q-item-label>
          <q-item-label caption>Question body : the quick brown fox jumps over the lazy dog</q-item-label>
        </q-item-section>
        <q-item-section bottom>
            <div class="column justify-between q-mt-sm">
                <q-radio dense v-model="shape" val="1" label="1" />
                <q-radio dense v-model="shape" val="2" label="2" />
                <q-radio dense v-model="shape" val="3" label="3" />
                <q-radio dense v-model="shape" val="4" label="4" />
            </div>
        </q-item-section>
      </q-item>
    </q-list>
</div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "find",
});
</script>
