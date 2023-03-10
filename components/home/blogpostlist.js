import utilStyles from '../../styles/utils.module.css'
import Date from '../../lib/date'
import Link from 'next/link'

export default function BlogPostList({posts}) {
    return (
        <>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                {posts.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                        </small>
                    </li>
                ))}
                </ul>
            </section>
        </>
    )
}