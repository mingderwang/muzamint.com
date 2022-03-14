import { NextRequest, NextResponse } from 'next/server'

const homePage = {
  'name ': 'MS-hack',
  'home page': 'We develop software for a better world.',

  'terms of use': [
    'This software are still under development. You must use on your own risk.',
    'You are responsible for your own actions.',
    'It is free to use.',
    'It is designed with no harm.',
    'It is an open source software, please feel free to contribute.',
  ],
  contact: {
    name: 'ming-der wang',
    phone: '+886-968860662',
    email: 'mingderwang@gmail.com',
  },
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()

  // Redirect paths that go directly to the variant
  if (url.pathname === '/terms') {
    url.pathname = '/api/terms'
    return NextResponse.redirect(url)
  } else if (url.pathname === '/contact') {
    url.pathname = '/api/contact'
    return NextResponse.redirect(url)
  } else if (url.pathname === '/privacy') {
    url.pathname = '/api/privacy'
    return NextResponse.redirect(url)
  } else if (!req.nextUrl.pathname.startsWith('/api')) {
    return new Response(JSON.stringify(homePage), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } else {
    return NextResponse.next()
  }
}
