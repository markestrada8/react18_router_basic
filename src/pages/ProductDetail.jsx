import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const params = useParams()
  console.log(params)
  return (
    <h1>ProductDetail</h1>
  )
}
