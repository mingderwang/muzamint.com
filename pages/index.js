import Link from 'next/link'

export default function About() {
  return (
    <div>
      Welcome to MS-hack home page. 
      <p></p>
      Go to the{' '}
      <Link href="/api/contact">
        <a>Contact</a>
      </Link>{' '}
      page.
      <p></p>
      Go to the{' '}
      <Link href="/api/contact">
        <a>Contact</a>
      </Link>{' '}
      page.
    </div>
  )
}
