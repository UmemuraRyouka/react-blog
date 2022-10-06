import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import { TwoColumn,TwoColumnMain,TwoColumnSidebar } from '../components/two-column'
import Accordion from 'components/accordion'
import Image from 'next/image'
// import eyecatch from 'images/about.jpg'

const eyecatch = {
  src: 'https://images.microcms-assets.io/assets/90c4cb045c5944ac8b7a584dc66f2dc1/749fe8f8e39940f48fd887d2a4dc4d7a/eyecatch.jpg',
  height: 950,
  width: 1920,
  blurDataURL: 'data:image/jpeg;base64,',
}

export default function About(){
  return (
    <Container>
      <Meta 
        pageTitle="アバウト" 
        pageDesc="About development activities"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero 
        title="About"
        subtitle="About development activities"
      />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              Cubeが得意とする分野はモノ作りです。３次元から２次元の造形、プログラミングやデザインなど、
              さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
            </p>
            <h2>モノづくりで目指していること</h2>
            <p>モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。
              新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。
              たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れてます。
            </p>
            <p>
              単純に形にするだけでなく、作る過程や、なぜそのようにしたのかをだいじにしながらものづくりをしています。
              毎回課題解決テーマをもって「モノ」と向き合い政策をし、フィードバックしてもらうことで
              自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
            </p>
            <h3>新しいことへのチャレンジ</h3>
            <p>
              今までと違うモノを作ることで愛着がわいてきます。そこで興味を持ったことは小さなことでもいいから
              取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノ作りは、これからも
              続けていきたいです。
            </p>
            <h2>FAQ</h2>
            <Accordion heading="プログラミングのポイントについて">
              <p>
                プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき、
                目標とゴールを決め、そこに向かってさまざまな課題を設定していきながら、
                プログラムを作っていきます。
              </p>
            </Accordion>
            <Accordion heading="古代語の解読について">
              <p>
                古代語を解読するのに必要なのは、書かれた文字そのものだけです。
                古代の世界観や思考方法。
                それらを読み取ってこそ古代の世界観が理解できてきます。
              </p>
            </Accordion>
            <Accordion heading="公開リポジトリの活用について">
              <p>
                公開リポジトリを活用すると、全世界のどこからでもアクセスし、開発者が関連する
                プロジェクトのタスクを利用することができます。
              </p>
            </Accordion>
          </PostBody>
        </TwoColumnMain>
      </TwoColumn>

      <TwoColumnSidebar>
        <Contact />
      </TwoColumnSidebar>
    </Container>
  )
}

About.getLayout = function getLayout(page){
  return <BlueFrame>{page}</BlueFrame>
}