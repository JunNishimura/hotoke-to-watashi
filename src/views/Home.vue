<template>
  <div class="home">
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
      // timer: 0,
      isPlaying: false,
      videoId: "jTQ0_Yeq-2E",
      messages: [
        { label: "菩薩", message: "え？", time: 5000 },
        { label: "菩薩", message: "何しようとしてるの？", time: 5000 },
        { label: "菩薩", message: "え、もしかして、", time: 5000 },
        { label: "菩薩", message: "瞑想？w", time: 5000 },
        { label: "菩薩", message: "わろた", time: 5000 },
        { label: "菩薩", message: "くそわろた", time: 5000 }, // 6 = 30sec
        { label: "菩薩", message: "瞑想わろた", time: 5000 },
        { label: "菩薩", message: "まじ草", time: 5000 },
        { label: "菩薩", message: "w".repeat(10), time: 5000 },
        { label: "菩薩", message: "瞑想なんかより", time: 4800 },
        { label: "菩薩", message: "私の話を聞きなさい", time: 4800 },
        { label: "菩薩", message: "あのね", time: 4800 }, // 12 = 1min
        { label: "菩薩", message: "昨日ね", time: 4800 },
        { label: "菩薩", message: "表参道でね", time: 4800 },
        { label: "菩薩", message: "インスタで話題の", time: 4800 },
        { label: "菩薩", message: "パンケーキ食べたの", time: 4800 },
        { label: "菩薩", message: "おいしかった～🥞😍", time: 4800 },
        { label: "菩薩", message: "知ってた？", time: 4800 }, // 18 = 1min30sec
        { label: "菩薩", message: "パンケーキってね", time: 4600 },
        { label: "菩薩", message: "実はね", time: 4600 },
        { label: "菩薩", message: "フワフワしてるんだよ！", time: 4600 },
        { label: "菩薩", message: "知らなかったでしょ", time: 4600 },
        { label: "菩薩", message: "パンケーキは超映えるんだよね", time: 4600 },
        { label: "菩薩", message: "インスタに写真あげたら", time: 4600 }, // 24 = 2min
        { label: "菩薩", message: "いいね100個ももらっちゃった", time: 4600 },
        { label: "菩薩", message: "ダブル幸せ～", time: 4600 },
        { label: "菩薩", message: "そういえばさ", time: 4600 },
        { label: "菩薩", message: "この前さ", time: 4400 },
        { label: "菩薩", message: "私の彼氏とね", time: 4400 },
        { label: "菩薩", message: "デートしてる時にさ", time: 4400 }, // 30 = 2min30sec
        { label: "菩薩", message: "「私の事、本当に愛してるの？」", time: 4400 },
        { label: "菩薩", message: "って聞いたらね", time: 4400 },
        { label: "菩薩", message: "何て答えたと思う？", time: 4400 },
        { label: "菩薩", message: "ね、なんて答えたと思う？", time: 4400 },
        { label: "菩薩", message: "それがね", time: 4400 },
        { label: "菩薩", message: "「当たり前だ、バカ」", time: 4400 }, // 36 = 3min
        { label: "菩薩", message: "だって～～～～～😍", time: 4200 },
        { label: "菩薩", message: "私の彼氏、マジ優秀", time: 4200 },
        { label: "菩薩", message: "本当に彼と付き合えるとか", time: 4200 },
        { label: "菩薩", message: "人生勝ち組だわ", time: 4200 },
        { label: "菩薩", message: "神様ありがとうー", time: 4200 },
        { label: "菩薩", message: "次会う時、紹介するね", time: 4200 }, // 42 = 3min30sec
        { label: "菩薩", message: "因みに", time: 4200 },
        { label: "菩薩", message: "私の彼氏の好きな食べ物何か知ってる？", time: 4200 },
        { label: "菩薩", message: "それがね", time: 4200 },
        { label: "菩薩", message: "意外なんだけど", time: 4000 },
        { label: "菩薩", message: "聞いて笑っちゃうよ", time: 4000 },
        { label: "菩薩", message: "何だと思う？", time: 4000 }, // 48 = 4min
        { label: "菩薩", message: "それがね", time: 4000 },
        { label: "菩薩", message: "納豆なんだって", time: 4000 }, // 50
        { label: "菩薩", message: "意外でしょ", time: 4000 },
        { label: "菩薩", message: "マジウケる", time: 4000 },
        { label: "菩薩", message: "それでね", time: 4000 },
        { label: "菩薩", message: "その理由が本当に面白くてね", time: 4000 }, // 54 = 4min30sec
        { label: "菩薩", message: "本当に面白くてね", time: 3800 },
        { label: "菩薩", message: "その理由がね", time: 3800 },
        { label: "菩薩", message: "ねばねばしてるからだって", time: 3800 },
        { label: "菩薩", message: "爆笑", time: 3800 },
        { label: "菩薩", message: "いやー好きだわー", time: 3800 },
        { label: "菩薩", message: "彼氏、イケメンで", time: 3800 }, // 60 = 5min
        { label: "菩薩", message: "面白いとか", time: 3800 },
        { label: "菩薩", message: "神様も与えすぎだよね", time: 3800 },
        { label: "菩薩", message: "まあそんな彼は", time: 3800 },
        { label: "明王", message: "ワクチンはやめておけ", time: 3600 }, // 明王登場
        { label: "菩薩", message: "私のものなんだけど", time: 3600 }, 
        { label: "菩薩", message: "羨ましい？", time: 3600 },
        { label: "明王", message: "いいか、もう一度言う", time: 3600 },
        { label: "菩薩", message: "羨ましいでしょ", time: 3600 },
        { label: "明王", message: "ワクチンは絶対にやめておけ", time: 3600 },
        { label: "菩薩", message: "我慢しなくていいよ", time: 3600 },
        { label: "菩薩", message: "羨ましいって顔に書いてる", time: 3600 },
        { label: "菩薩", message: "あ、そーだ", time: 3600 },
        { label: "明王", message: "お前は何も知らないだけだ", time: 3400 },
        { label: "菩薩", message: "昨日ね", time: 3400 },
        { label: "明王", message: "いいか", time: 3400 }, // 5*60 + 4*15 = 6min
        { label: "明王", message: "落ち着いて聞けよ", time: 3400 },
        { label: "菩薩", message: "私めっちゃ頑張ったんだよ", time: 3400 },
        { label: "明王", message: "信じてくれ", time: 3400 },
        { label: "菩薩", message: "最近ピクミンにハマっててね", time: 3400 },
        { label: "明王", message: "コロナは、", time: 3400 },
        { label: "菩薩", message: "お花沢山植えたの", time: 3400 },
        { label: "明王", message: "全て嘘だ", time: 3200 },
        { label: "明王", message: "だまされるな", time: 3200 },
        { label: "菩薩", message: "どれくらい植えたと思う？", time: 3200 },
        { label: "明王", message: "コロナワクチンは", time: 3200 },
        { label: "菩薩", message: "何分したと思う？", time: 3200 },
        { label: "明王", message: "有害だ", time: 3200 },
        { label: "菩薩", message: "答えはね", time: 3200 },
        { label: "菩薩", message: "5236本", time: 3200 },
        { label: "明王", message: "いいか", time: 3200 }, // 5*60 + 4*30 = 7min
        { label: "明王", message: "もう一度言う", time: 3000 },
        { label: "如来", message: "ちーっす", time: 3000 },
        { label: "明王", message: "ワクチンは有害なんだ", time: 3000 },
        { label: "菩薩", message: "凄くない？", time: 3000 },
        { label: "如来", message: "おひさー", time: 3000 },
        { label: "菩薩", message: "てか偉くない？", time: 3000 },
        { label: "明王", message: "お前は騙されている", time: 3000 },
        { label: "菩薩", message: "お花植えるとか", time: 3000 },
        { label: "如来", message: "最近何してんの？", time: 3000 },
        { label: "菩薩", message: "私マジ神", time: 2800 },
        { label: "如来", message: "てか太った？（笑）", time: 2800 },
        { label: "明王", message: "洗脳されているんだ", time: 2800 },
        { label: "明王", message: "他の奴らの話は聞くな", time: 2800 },
        { label: "如来", message: "コロナ太り？（笑）", time: 2800 },
        { label: "菩薩", message: "私良いやつすぎるでしょ", time: 2800 },
        { label: "如来", message: "どうせ暇っしょ", time: 2800 },
        { label: "明王", message: "俺を信じろ", time: 2800 },
        { label: "如来", message: "あそびいこー", time: 2800 },
        { label: "菩薩", message: "だから私モテるのかな", time: 2600 },
        { label: "如来", message: "いつがいいかな", time: 2600 }, // 5*60 + 4*30 + 3*20 = 8min
        { label: "明王", message: "科学なんて当てにならない", time: 2600 },
        { label: "菩薩", message: "私本当に偉い！", time: 2600 },
        { label: "菩薩", message: "どーでもいいけど", time: 2600 },
        { label: "如来", message: "今週の土曜は？", time: 2600 },
        { label: "明王", message: "ワクチンが原因で", time: 2600 },
        { label: "明王", message: "何人が死んだか分かっているのか", time: 2600 },
        { label: "菩薩", message: "ピクミンより私の方が可愛いよね", time: 2600 },
        { label: "明王", message: "沢山の人間が死んでいる", time: 2400 },
        { label: "菩薩", message: "絶対そうだよね", time: 2400 },
        { label: "如来", message: "どうせ飯食って寝るだけっしょ？", time: 2400 },
        { label: "如来", message: "んじゃ土曜で決まりね", time: 2400 },
        { label: "明王", message: "政府はその事実を隠している", time: 2400 },
        { label: "菩薩", message: "ピクミン頑張った後にね", time: 2400 },
        { label: "明王", message: "ワクチンは殺害兵器だ", time: 2400 },
        { label: "菩薩", message: "ご褒美にハーゲンダッツ2個も食べたんだ", time: 2400 },
        { label: "如来", message: "寝坊すんなよ", time: 2400 },
        { label: "菩薩", message: "一つはねクッキー＆クリームでね", time: 2200 },
        { label: "菩薩", message: "じゃあ問題です！", time: 2200 },
        { label: "如来", message: "寝坊すんなよ", time: 2200 },
        { label: "明王", message: "ワクチンの副作用知ってるよな", time: 2200 }, // 5*60 + 4*30 + 3*40 = 9min
        { label: "如来", message: "あ、土曜俺が無理だ（笑）", time: 2000 },
        { label: "菩薩", message: "もう一つは何味でしょう？", time: 2000 },
        { label: "明王", message: "何故熱が出るのか知ってるか", time: 2000 },
        { label: "明王", message: "それはな", time: 2000 },
        { label: "如来", message: "来週は？", time: 2000 },
        { label: "如来", message: "ま、どうせ暇っしょ", time: 1800 },
        { label: "菩薩", message: "当てたら天才だよ", time: 1800 },
        { label: "明王", message: "ワクチンで体の中に", time: 1800 },
        { label: "如来", message: "じゃあ来週の金曜にしよ", time: 1800 },
        { label: "菩薩", message: "答えはね", time: 1800 },
        { label: "如来", message: "ちーっす", time: 1800 },
        { label: "明王", message: "毒を入れているんだ", time: 1800 },
        { label: "明王", message: "だから高熱が出るんんだ", time: 1800 },
        { label: "菩薩", message: "クッキー＆クリームでした～", time: 1800 },
        { label: "如来", message: "寝坊すんなよ", time: 1600 },
        { label: "菩薩", message: "ちょっと難しかったかな", time: 1600 },
        { label: "如来", message: "他誰か誘う？", time: 1600 },
        { label: "如来", message: "てか車出せる？", time: 1600 },
        { label: "菩薩", message: "私がクッキー＆クリームって", time: 1600 },
        { label: "菩薩", message: "意外じゃない？", time: 1600 },
        { label: "明王", message: "ワクチンの恐ろしさ分かったか？", time: 1600 },
        { label: "如来", message: "やるじゃん", time: 1600 },
        { label: "明王", message: "噂によると", time: 1600 },
        { label: "明王", message: "ワクチンで死んだ人の数は", time: 1400 },
        { label: "菩薩", message: "意外じゃない？", time: 1400 },
        { label: "如来", message: "どこ行くー？", time: 1400 },
        { label: "明王", message: "もっと大きいらしい", time: 1400 },
        { label: "如来", message: "ラーメン食って", time: 1400 },
        { label: "明王", message: "今、3回目のワクチン接種が", time: 1400 },
        { label: "明王", message: "検討されているらしいが", time: 1400 },
        { label: "菩薩", message: "そう言えば", time: 1400 },
        { label: "如来", message: "カラオケでも行くか", time: 1400 },
        { label: "如来", message: "でもなー", time: 1200 },
        { label: "菩薩", message: "2021年頑張ったご褒美に", time: 1200 },
        { label: "明王", message: "実は", time: 1200 },
        { label: "菩薩", message: "旅行に行くんだー", time: 1200 },
        { label: "明王", message: "3回目のワクチンで", time: 1200 },
        { label: "明王", message: "人類は滅亡する", time: 1200 },
        { label: "如来", message: "昨日も", time: 1200 },
        { label: "菩薩", message: "旅行に行くんだー", time: 1200 },
        { label: "如来", message: "カラオケ行ったんだよな", time: 1200 },
        { label: "明王", message: "そうだ", time: 1000 },
        { label: "明王", message: "コロナとワクチンは", time: 1000 },
        { label: "如来", message: "映画でも行くか", time: 1000 },
        { label: "明王", message: "人類滅亡計画だったのだ", time: 1000 },
        { label: "菩薩", message: "どこに行くと思う？", time: 1000 },
        { label: "明王", message: "これを救えるのは", time: 1000 },
        { label: "如来", message: "でもなー", time: 1000 },
        { label: "菩薩", message: "ねえ、ちゃんと聞いてる？", time: 1000 },
        { label: "菩薩", message: "それがね", time: 1000 },
        { label: "明王", message: "俺たちだけだ", time: 800 },
        { label: "如来", message: "一昨日映画見たんだよな", time: 800 },
        { label: "菩薩", message: "めちゃくちゃ良いところなんだけどね", time: 800 },
        { label: "菩薩", message: "彼氏が予約してくれたんだけどね", time: 800 },
        { label: "如来", message: "どこ行くー", time: 800 },
        { label: "明王", message: "だから俺に協力してくれないか", time: 800 },
        { label: "菩薩", message: "熱海に行くんだー", time: 800 },
        { label: "明王", message: "この人類を一緒に救わないか", time: 800 },
        { label: "如来", message: "考えんのめんどくさいな", time: 800 },
        { label: "菩薩", message: "3つ星ホテルで", time: 600 },
        { label: "明王", message: "人類を滅亡の危機から救うには", time: 600 },
        { label: "明王", message: "君が必要だ", time: 600 },
        { label: "菩薩", message: "予約取るのが難しいんだけど", time: 600 },
        { label: "如来", message: "もう遊ぶのやめるか", time: 600 },
        { label: "菩薩", message: "彼氏が超がんばったの", time: 600 },
        { label: "如来", message: "だるくなってきたな", time: 600 },
        { label: "明王", message: "まずは", time: 600 },
        { label: "菩薩", message: "本当に偉い", time: 600 },
        { label: "明王", message: "ワクチン反対運動から始めるぞ", time: 600 },
        { label: "菩薩", message: "本当に私の彼氏", time: 600 },
        { label: "如来", message: "飯だけにするか", time: 600 },
        { label: "如来", message: "ラーメン", time: 600 },
        { label: "如来", message: "寿司", time: 600 },
        { label: "如来", message: "肉", time: 600 },
      ] // 動画は9min30sec
    }
  },
  methods: {
    ready() {
      console.log("ready")
      console.log(this.messages.length)
    },
    playing() {
      console.log("playing: ", this.timer)
      this.isPlaying = true
      setTimeout(this.emitPushAlert, 9000)
    },
    paused() {
      console.log("paused")
      this.isPlaying = false
    },
    ended() {
      console.log("ended")
      this.isPlaying = false
    },
    emitPushAlert() {
      Push.create(this.messages[this.count]["label"], {
        icon: this.getIcon(this.messages[this.count]["label"]),
        body: this.messages[this.count]["message"],
        timeout: 2500,
      })
      this.count = (this.count + 1) % this.messages.length
      if (this.isPlaying) {
        setTimeout(this.emitPushAlert, this.messages[this.count]["time"]) // 再度呼び出し
      }
    },
    getIcon(label) {
      switch (label) {
        case "菩薩":
          return require('@/assets/images/bosatsu.jpg')
        case "明王":
          return require("@/assets/images/myoou.jpg")
        case "如来":
          return require("@/assets/images/nehan.jpg")
        default:
          break
      }
    }
  },
  beforeDestroy() {
    this.isPlaying = false
  }
};
</script>

<style scoped>
.home {
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
