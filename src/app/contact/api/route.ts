import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

//TODO: implementar envio de email

export async function POST(request: NextRequest) {
  const body = await request.json()

  //   const resend = new Resend('re_SmH2dA2q_CNQrzcVTWFcRY8JP3nxy421f')

  //   resend.emails.send({
  //     from: 'contato.mawatech@gmail.com',
  //     to: 'jvcq13@gmail.com',
  //     subject: 'Hello World',
  //     html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
  //   })

  return NextResponse.json({ message: 'ok' })
}
