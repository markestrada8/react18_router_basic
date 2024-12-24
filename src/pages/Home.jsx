import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  function navigateHandler() {
    navigate('/products')
  }

  return (
    <>
      <h1>Home</h1>
      <p>
        Go to <Link to={'/products'}>Products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Products</button>
      </p>
    </>
  )
}
