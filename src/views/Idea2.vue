<template>
  <div id="idea2">
    <div class="video-wrapper">
      <youtube
        :resize="true"
        :video-id="videoId"
        @ready="ready"
        @playing="playing"
        @paused="paused"
        @ended="ended"
      />
    </div>
  </div>
</template>

<script>
import Push from 'push.js'
import Vue from 'vue'
import VueYoutbe from 'vue-youtube'
Vue.use(VueYoutbe)

export default {
  data() {
    return {
      count: 0,
      timer: 0,
      videoId: "jTQ0_Yeq-2E",
      comments: [
        "え？",
        "何しようとしてるの?",
        "え、もしかして",
        "瞑想？",
        "わろた",
        "くそワロタ",
        "瞑想わろた",
        "草",
        "w".repeat(92),
        "私の前で瞑想しようとは",
        "良い度胸していますね",
        "お手並み拝見とさせて頂きましょう",
        "おーい",
        "おーい",
        "集中してんのかー？",
        "ねえねえ",
        "ねえってば",
        "こっち向いてよ",
        "ねえってば",
        "何にもなーいwwwwwwwwwwwwwwwwwwwwww",
        "これだから現代人は",
        "マインドフルネス?",
        "瞑想?",
        "笑わせてくれるわね",
        "まあせいぜいその調子で進めて頂戴",
      ]
    }
  },
  methods: {
    ready() {
      console.log("ready")
    },
    playing() {
      console.log("playing: ", this.timer)
      if (this.timer === 0) {
        this.timer = setInterval(() => {
          Push.create('仏', {
            icon: require('@/assets/images/bosatsu.jpg'),
            body: this.comments[this.count],
            timeout: 2500,
          })
          this.count = (this.count + 1) % this.comments.length
        }, 5000)
      }
    },
    paused() {
      console.log("paused")
      this.clearTimer()
    },
    ended() {
      console.log("ended")
      this.clearTimer()
    },
    clearTimer() {
      clearInterval(this.timer)
      this.timer = 0 // reset
    }
  },
  beforeDestroy() {
    this.clearTimer()
  }
};
</script>

<style scoped lang="scss">
#idea2 {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  position: relative;
  .video-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>