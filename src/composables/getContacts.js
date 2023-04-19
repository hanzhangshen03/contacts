import { ref } from 'vue'

const getContacts = () => {
  const contacts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/contacts')
      if (!data.ok) {
        throw Error('no data available')
      }
      contacts.value = await data.json()
    }
    catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  return { contacts, error, load }
}

export default getContacts