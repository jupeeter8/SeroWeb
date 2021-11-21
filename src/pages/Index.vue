<template>
  <q-page>
    <div class="q-py-lg q-px-xl">
      <q-input
        size="md"
        standout="bg-primary text-white"
        bottom-slots
        autogrow
        v-model="newPost"
        placeholder="What's on your mind"
      >
        <template v-slot:before>
          <q-avatar size="xl">
            <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
          </q-avatar>
        </template>

        <template v-slot:after>
          <q-btn
            :disable="!newPost"
            no-caps
            rounded
            outlined
            color="primary"
            label="Ask!"
            size="md"
          />
        </template>
      </q-input>
    </div>
    <q-separator size="7px" color="grey-3" />

    <q-list class="q-py-lg q-px-xl" separator>
      <q-item 
        v-for="post in postitem"
        :key="post.date"
        class="q-py-md"
      >
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <b>Anirudh Aswal</b>
            <span class="text-grey-7">@aswalanirudh</span>
          </q-item-label>

          <q-item-label class="Post-Content text-body1">
            {{post.content}}
          </q-item-label>
          <div class="post-icon row justify-between q-mt-sm">
            <q-btn flat round color="grey" icon="comment" />

            <q-btn flat round color="grey" icon="favorite_border" />

            <q-btn flat round color="grey" icon="delete_forever" />
          </div>
        </q-item-section>

        <q-item-section side top> {{post.date}} </q-item-section>
      </q-item>

      <q-separator inset="item" />
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      newPost: "",

      postitem: [
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Ut tellus elementum sagittis vitae et. Enim neque volutpat ac tincidunt vitae semper quis lectus. Tellus in metus vulputate eu scelerisque felis imperdiet. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Tempus quam pellentesque nec nam aliquam sem. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Molestie at elementum eu facilisis. Est sit amet facilisis magna etiam tempor orci.",
            date: 1637481665022
        },
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Ut tellus elementum sagittis vitae et. Enim neque volutpat ac tincidunt vitae semper quis lectus. Tellus in metus vulputate eu scelerisque felis imperdiet. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Tempus quam pellentesque nec nam aliquam sem. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Molestie at elementum eu facilisis. Est sit amet facilisis magna etiam tempor orci.",
            date: 1637481716378
        },
      ],
    };
  },
});
</script>

<style lang="sass">
.Post-Content
  white-space: pre-line
.post-icon
  margin-left: -6px
</style>
>
