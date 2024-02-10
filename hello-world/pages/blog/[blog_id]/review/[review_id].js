import {useRouter} from 'next/router';

export default function review(){
    const router = useRouter();
    const {blog_id,review_id} = router.query;

    return (
        <>
            <em>Blog {blog_id} review {review_id}</em>
        </>
    )
}