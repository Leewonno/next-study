'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

// client 컴포넌트에서 필요한 걸 이용하기 위해 컴포넌트화
export function Control() {
  const params = useParams();
  const id = params.id;

  const router = useRouter();
  return (
    <ul>
      <li><Link href='/create'>Create</Link></li>
      {id ? <>
        <li><Link href={`/update/${id}`}>Uptate</Link></li>
        <li><input type='button' value='delete' onClick={()=>{
          fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+id, {method:"DELETE"})
          .then((res)=>res.json())
          .then(result=>{
            router.refresh();
            router.push('/');
          })
        }} /></li>
      </>
      :
      null
      }
      
    </ul>
  );
}
