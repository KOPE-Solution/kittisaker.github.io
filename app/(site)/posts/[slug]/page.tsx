import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import CodeSnippet from '@/components/CodeSnippet'
import Header from '@/components/Header'
// import MDXComponents from '@/utils/mdxcomponents'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const Button = (props: PropsWithChildren) => (
  <button {...props} style={{backgroundColor:"blue",borderRadius:"5px",color:"white",padding:"2px 10px"}}  >{props.children}</button>
 );

const ButtonLink = (props: PropsWithChildren) => (
  <a href={props.href} target='__blank'>
    <button {...props} style={{backgroundColor:"blue",borderRadius:"5px",color:"white",padding:"2px 10px"}}  >{props.children}</button>
  </a>
);
 
//  const CodeSnippet = (props: PropsWithChildren) => (
//   <Snippet {...props} text={props.text} />
//  );

const mdxFComponents = {
  Button,
  ButtonLink,
  CodeSnippet
}

const PostLayout = ({ params }: { params: { slug: string }}) => {
    const post = allPosts.find(
      (post) => post._raw.flattenedPath === params.slug
    );

    let MDXContent;

    if(!post) {
      throw new Error(`Post not found for slug: ${params.slug}`)
    } else {
      MDXContent = useMDXComponent(post!.body.code);
    };

    return (
      <div className="w-full h-screen flex justify-center">
        <div className="xl:w-[70%] w-full h-full flex flex-col ">
          <Header />
          <article className="mx-auto max-w-xl py-8">
            <div className="mb-8 text-center">
              <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
                {format(parseISO(post.date), 'LLLL d, yyyy')}
              </time>
              <h1 className="text-3xl font-bold">{post.title}</h1>
            </div>
            {/* <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
            <MDXContent components={ { ...mdxFComponents } } />

          </article>
        </div>
      </div>
      )
      
}

export default PostLayout
