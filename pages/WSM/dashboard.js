import Link from 'next/link'

export default function Dashboard() {
    return (
      <>
        <h1>Your Website</h1>
        <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
        </h2>
      </>
    )
  }