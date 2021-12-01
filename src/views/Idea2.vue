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
        "何しようとしてるの？",
        "え、もしかして、",
        "瞑想？w",
        "わろた",
        "くそわろた",
        "瞑想わろた",
        "まじ草",
        "w".repeat(10),
        "瞑想なんかより",
        "私の話を聞きなさい",
        "あのね",
        "昨日ね",
        "表参道でね",
        "愚民を前にして",
        "パンケーキ食べたの",
        "おいしかった～🥞😍",
        "知ってた？",
        "パンケーキってね",
        "実はね",
        "フワフワしてるんだよ！",
        "知らなかったでしょ",
        "パンケーキは超映えるんだよね",
        "インスタに写真あげたら",
        "いいね100個ももらっちゃった",
        "ダブル幸せ～",
        "そういえばさ",
        "この前さ",
        "私の彼氏とね",
        "デートしてる時にさ",
        "「私の事、本当に愛してるの？」",
        "って聞いたらね",
        "何て答えたと思う？",
        "ね、なんて答えたと思う？",
        "それがね",
        "「当たり前だ、バカ」",
        "だって～～～～～😍",
        "私の彼氏、マジ優秀",
        "本当に彼と付き合えるとか神様ありがとう",
        "次会う時、紹介するね",
        "因みに",
        "私の彼氏の好きな食べ物何か知ってる？",
        "それがね",
        "意外なんだけど",
        "聞いて笑っちゃうよ",
        "それがね",
        "納豆なんだって",
        "意外でしょ",
        "マジウケる",
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

<style scoped>
#idea2 {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  position: relative;
}
.video-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>