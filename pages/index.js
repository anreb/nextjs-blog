import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import BlogPostList from '../components/home/blogpostlist'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import CompaniesLogo from '../components/home/companieslogo'
import Socials from '../components/home/socials'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.textAlignCenter}`}>
        <p>
          Hello there 👋! I'm a node.js software engineer from Mexico 🇲🇽.
          I make and paint web components to build 
          accesible apps with HTML 🖼, CSS 🎨 and JS 🖌.
          Some of the companies I've worked making node.js apps.
        </p>
        <CompaniesLogo />
        <p>
          If you want to reach me this are my socials
        </p>
        <Socials />
      </section>
      <BlogPostList posts={allPostsData}></BlogPostList>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
