import React,{useState, useEffect} from 'react';
import './Example.scss'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';










function Example(props) {

    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1 )


    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
            .then(response => response.json())
            .then(json => setPosts(json))

    },[page])
    console.log(posts)
    return (
        <>
            <div>HELLO</div>
            <ul className='List'>
                {posts.map(item =>(
                    <li className="List-item" key={item.id}>
                        <p>Title: {item.title}</p>
                        <p> Text: {item.body}</p>

                    </li>
                ))}
            </ul>
            <Stack spacing={2} margin={"10px 0px"} display={'flex'} alignItems={'center'}>
                <Pagination count={10} variant="outlined" shape="rounded" defaultPage={page} onChange={(_, p)=> setPage(p) } />
            </Stack>
        </>
    );
}
export default Example;