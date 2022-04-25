import { PrismaClient } from '@prisma/client'
import Head from 'next/head'
import { useState } from 'react'
import AddScreen from '../components/AddScreen'
import DisplayScreen from '../components/DisplayScreen'

const prisma = new PrismaClient()

export const getServerSideProps = async () => {
  const contacts = await prisma.contact.findMany()
  return {
    props: {
      initialContacts: contacts
      // [
      //   {
      //     id: '1',
      //     firstname: 'Connel',
      //     lastname: 'Asikong',
      //   }
      // ]
    }
  }
}

const saveContact = async (contact) => {
  const response = await fetch('/api/contacts', {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json; charset=utf8'
    }
  })

  console.log("response", contact)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return await response.json()
}

const delContact = async (contact) => {
  if (window.confirm("Do you want to delete this food?")) {
    await fetch('/api/deleteContact', {
      method: 'POST',
      body: JSON.stringify({
        id: contact.id
      }),
      headers: {
        'Content-Type': 'application/json; charset=utf8'
      }
    }) 
    // console.log("response", contact)
  }
}

export default function Home({ initialContacts }) {
  const [contacts, setContacts] = useState(initialContacts)
  
  return (
    <div className="">
      <Head>
        <title>Contact App</title>
        <meta name="description" content="Created by Connelblaze" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid md:grid-cols-3">
      
        <AddScreen contacts = { initialContacts } AddContactFormProps = {async (data, e) => {
          try {
            await saveContact(data)
            setContacts([...contacts, data])
            e.target.reset()
          } catch (error) {
            console.log(error);
          }
        }} />

        <DisplayScreen contacts = { initialContacts } delContact = { delContact } />
      </div>
    </div>
  )
}
