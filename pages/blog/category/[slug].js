import { getAllCategories, getAllPostsByCategory } from "../../../lib/api";
import Meta from "../../../components/meta";
import Container from '../../../components/container'
import PostHeader from "../../../components/post-header";
import Posts from "../../../components/posts";
import { getPlaiceholder } from "plaiceholder";

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from "../../../lib/constants";

//３：getStaticPropsから受け取ったnameを表示
export default function Category({ name, posts }){
  return(
    <Container>
        <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
        <PostHeader title={name} subtitle="Blog Category" />
        <Posts posts={posts} />
    </Container>
  )
}

//1：生成したいページのスラッグを生成・contextを通してgetStaticPropsに渡される
export async function getStaticPaths(){
  const allCats = await getAllCategories()
  return {
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    //paths: ['/blog/category/technology'],
    //paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false,
  }
}

//２：catSlugを元にカテゴリー名を取得/cat.nameでカテゴリー名を取り出し、propsとしてCategoryに渡す
export async function getStaticProps(context){
  const catSlug = context.params.slug

  const allCats = await getAllCategories()
  const cat = allCats.find(({ slug }) => slug === catSlug)

  const posts = await getAllPostsByCategory(cat.id)

  for (const post of posts) {
    if(!post.hasOwnProperty('eyecatch')){
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }
  
  return {
    props:{
      name: cat.name,
      posts: posts,
    },
  }
}