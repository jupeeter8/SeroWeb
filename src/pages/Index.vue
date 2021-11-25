<template>
  <q-page class="relative-position">
     <q-scroll-area class="absolute full-width full-height">
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
            :key="post.id"
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

                <q-btn
                @click="toggleLiked(post)" 
                flat 
                round 
                :color="post.liked? 'primary' : 'grey'"
                :icon="post.liked? 'favorite' : 'favorite_border'"
                />

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
import { collection, query, onSnapshot, doc, orderBy, addDoc, deleteDoc, updateDoc} from "firebase/firestore";
import { formatDistance} from 'date-fns'

import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      newPost: "",

      postitem: [
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
        date: Date.now(),
        liked: false
      }
      // this.postitem.unshift(newPostItem)
      const docRef = addDoc(collection(firestore, "posts"), newPostItem);
      console.log("Document written with ID: ", docRef.id);
      this.newPost = ''
    },
    deletePost(postData){
    deleteDoc(doc(firestore, "posts", postData.id));
    },

    toggleLiked(post){

      updateDoc(doc(firestore, "posts", post.id), {
      liked: !post.liked
    });
    
    }
      
  },

  mounted(){
    const q = query(collection(firestore, "posts"), orderBy("date"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      let postChanges = change.doc.data()
      postChanges.id = change.doc.id
      if (change.type === "added") {
          console.log("New Post: ", postChanges);
          this.postitem.unshift(postChanges)
      }
      if (change.type === "modified") {
          console.log("Modified post: ", postChanges);
          let index = this.postitem.findIndex(postData => postData.id === postChanges.id)
          Object.assign(this.postitem[index], postChanges)
      }
      if (change.type === "removed") {
          console.log("Removed post: ", postChanges);
          let index = this.postitem.findIndex(postData => postData.id === postChanges.id)
          this.postitem.splice(index, 1)
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
