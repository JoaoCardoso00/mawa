'use client'

import axios from 'axios'
import { useId } from 'react'
import { Button } from './Button'
import { FadeIn } from './FadeIn'

//TODO: add react-hook-form with zod validation

async function handleTest() {
  const res = await axios.post('/contact/api', {
    name: 'Fred',
    email: 'Flintstone',
    company: 'Flintstone',
    phone: 'Flintstone',
    message: 'Flintstone',
    budget: 'Flintstone',
  })

  console.log(res)
}

export function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form
        onSubmit={(e) => {
          e.preventDefault
          console.log('hello')
        }}
      >
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Nos conte sobre o seu projeto
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Nome" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Empresa"
            name="company"
            autoComplete="organization"
          />
          <TextInput
            label="Telefone"
            type="tel"
            name="phone"
            autoComplete="tel"
          />
          <TextInput label="Mensagem" name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                Orçamento médio
              </legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput
                  label="R$ 2.000 – R$ 5.000"
                  name="budget"
                  value="25"
                />
                <RadioInput
                  label="R$ 5.000 – R$ 10.000"
                  name="budget"
                  value="50"
                />
                <RadioInput
                  label="R$ 10.000 – R$ 15.000"
                  name="budget"
                  value="100"
                />
                <RadioInput
                  label="Mais que R$ 15.000"
                  name="budget"
                  value="150"
                />
              </div>
            </fieldset>
          </div>
        </div>
      </form>
      <Button onClick={handleTest} className="mt-10">
        Vamos trabalhar juntos
      </Button>
    </FadeIn>
  )
}

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}
