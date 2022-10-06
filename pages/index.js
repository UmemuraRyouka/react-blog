import { getAllPosts } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from '/components/hero'
import Posts from 'components/posts'
import Pagination from 'components/pagination'
import { getPlaiceholder } from 'plaiceholder'

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'

export default function Home({ posts }) {
  return (
    <Container>
      <Meta />
      <Hero
        title="CUBE"
        subtitle="アウトプットしていくサイト"
        imageOn
      />

      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More Posts" />
    </Container>
  )
}

  export async function getStaticProps(){
    const url = 'https://images.microcms-assets.io/assets/90c4cb045c5944ac8b7a584dc66f2dc1/ca9f3a61e8d64fbc8337a09a94727a27/about.jpg'

    console.log(await getPlaiceholder(url))
    
    const posts = await getAllPosts(4)
  
    for (const post of posts) {
      if(!post.hasOwnProperty('eyecatch')) {
        post.eyecatch = eyecatchLocal
      }
  
      const { base64 } = await getPlaiceholder(post.eyecatch.url)
      post.eyecatch.blurDataUrl = base64
    }
  
    return {
      props: {
        posts: posts,
      },
    }
  }