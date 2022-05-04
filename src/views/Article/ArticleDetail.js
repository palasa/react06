import { useParams } from "react-router-dom"


export default function ArticleDetail() {
  const params = useParams()
  // console.log("articleDetail: ", +params.id)
  return (
    <div>文章详情 {params.id}</div>
  )
}
