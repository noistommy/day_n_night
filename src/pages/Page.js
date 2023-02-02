import {Link, useParams} from 'react-router-dom';
const Page1 = (props) => {
  const {pageId} = useParams()
  return (
    <>
      <h3>Page {pageId}</h3>
     <Link to="/">돌아가기</Link>
    </>
  )
}

export default Page1