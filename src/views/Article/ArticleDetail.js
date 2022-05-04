import { useParams, useNavigate } from "react-router-dom"
import { BackButton } from '../../components'


export default function ArticleDetail() {

  const params = useParams()
  const navigate = useNavigate()

  // console.log("articleDetail: ", +params.id)
  return (
    <>
      <div>文章详情 {params.id}</div>
      <button onClick={() => navigate(-1)}>go back</button>
      <button onClick={() => navigate(1)}>go forward</button>
      <button onClick={() => navigate('/')}>返回首页</button>
      <button onClick={() => navigate('/users')}>跳转到users</button>
      <BackButton />
    </>
  )
}
