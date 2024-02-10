import { useRouter } from 'next/router';
export default function BlogDetail(){
    const router = useRouter();
    const blog_id = router.query.blog_id;
    const handleClick = () =>{
        // router.push('/blog');
        router.replace('/blog');
    }
    return (
        <>
            <h1>Blog Detail  </h1>
            <p>
            {blog_id}<br></br><br></br>
                <button onClick={handleClick}>
                Back
                </button>
            </p>
        </>
    )
}