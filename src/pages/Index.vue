<template>
  <q-page class="relative-position">
     <q-scroll-area class="absolute fullscreen">
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
            @click="addNewPost"
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

      <q-list class="q-py-lg q-px-xl" separator >
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut"
        >
          <q-item
            v-for="post in postitem"
            :key="post.date"
            class="q-py-md postBorder"
          >
            <q-item-section avatar top>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">
                <b>Junglee</b>
                <span class="text-grey-7">
                  @Jannet
                  <br class="lt-md">&bull; {{(toDate(post.date))}}
                  </span>
              </q-item-label>

              <q-item-label class="Post-Content text-body1">
                {{post.content}}
              </q-item-label>
              <div class="post-icon row justify-between q-mt-sm">
                <q-btn flat round color="grey" icon="comment" />

                <q-btn flat round color="grey" icon="favorite_border" />

                <q-btn 
                  flat 
                  round 
                  color="grey" 
                  icon="delete_forever" 
                  @click="deletePost(post)"
                  />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>

      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import firestore from 'src/boot/firebase'
import { collection, query, onSnapshot, doc } from "firebase/firestore";
import { formatDistance} from 'date-fns'

import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      newPost: "",

      postitem: [
        // {
        //   content:
        //     "This is a post",
        //     date: 1637481665022
        // },
        // {
        //   content:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Ut tellus elementum sagittis vitae et. Enim neque volutpat ac tincidunt vitae semper quis lectus. Tellus in metus vulputate eu scelerisque felis imperdiet. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Tempus quam pellentesque nec nam aliquam sem. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Molestie at elementum eu facilisis. Est sit amet facilisis magna etiam tempor orci.",
        //     date: 1637821066623
        // },
      ],
    };
  },

  methods: {
    toDate(value){
     return formatDistance(value, new Date(), { addSuffix: true })
    },

    addNewPost(){
      let newPostItem = {
        content: this.newPost,
        date: Date.now()
      }
      this.postitem.unshift(newPostItem)
      this.newPost = ''
    },
    deletePost(postData){
      let DateToDelete = postData.date
      let index = this.postitem.findIndex(postData => postData.date === DateToDelete)
      this.postitem.splice(index, 1)
    }
      
  },

  mounted(){
    const q = query(collection(firestore, "posts"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
          console.log("New Post: ", change.doc.data());
      }
      if (change.type === "modified") {
          console.log("Modified post: ", change.doc.data());
      }
      if (change.type === "removed") {
          console.log("Removed post: ", change.doc.data());
      }
    });
  });
  }


});
</script>

<style lang="sass">
.Post-Content
  white-space: pre-line
.post-icon
  margin-left: -6px
.postBorder:not(:first-child)
  border-top: 1px solid rgba(0,0,0,0.12)
</style>
>
