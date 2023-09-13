import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoCesupa from '@/images/clients/cesupa/light.png'
import logoCria from '@/images/clients/cria/light.png'
import logoMultiverse from '@/images/clients/multiverse/light.png'
// import logoZenith from '@/images/clients/zenith/light.png'
import logoZenithDark from '@/images/clients/zenith/dark.png'
import logoLapes from '@/images/clients/lapes/light.png'

import imageLaptop from '@/images/laptop.jpg'

const clients = [
  ['Cesupa', logoCesupa],
  ['Cria', logoCria],
  ['Multiverse', logoMultiverse],
  // ['Zenith', logoZenith],
  ['Lapes', logoLapes],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Nós já trabalhamos com pessoas incríveis
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client.toString()} className="grid place-content-center">
                <FadeIn>
                  <Image src={logo} alt={client.toString()} height={100} />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Utilizando a Tecnologia para um Futuro Melhor"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Estamos comprometidos em aproveitar o poder da tecnologia para abordar
          os desafios mais urgentes do mundo, enquanto assumimos a
          responsabilidade que vem com ela.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))} */}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Serviços"
        title="Nossos Serviços Abrangentes"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Nossos serviços abrangem um amplo espectro de soluções de engenharia
          de software adaptadas às suas necessidades.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Desenvolvimento Web">
              Somos especializados na criação de páginas de marketing
              meticulosamente projetadas e de alta qualidade que cativam seu
              público desde o momento em que acessam seu site.
            </ListItem>
            <ListItem title="Desenvolvimento de Software Personalizado">
              Nossa equipe de especialistas cria soluções de software
              personalizadas que se alinham perfeitamente com as necessidades
              únicas do seu negócio, aumentando a eficiência e produtividade.
            </ListItem>
            <ListItem title="Consultoria e Estratégia">
              A Mawa oferece insights estratégicos e consultoria para ajudá-lo a
              navegar pelo cenário tecnológico em constante evolução, tomando
              decisões informadas que impulsionam o crescimento.
            </ListItem>
            <ListItem title="Desenvolvimento de Aplicativos Mobile">
              Transforme suas ideias em aplicativos móveis intuitivos e
              envolventes. Nossa experiência em desenvolvimento móvel garante
              que sua marca alcance seu público onde quer que eles estejam.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Nós construímos produtos digitais inovadores.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Na Mawa, dominamos a arte e a ciência do desenvolvimento de
            software, entregando soluções inovadoras com precisão e propósito.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Zenith', logo: logoZenithDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial> */}

      <Services />

      <ContactSection />
    </>
  )
}
