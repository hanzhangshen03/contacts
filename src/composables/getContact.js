import { ref } from 'vue'

const getContact = (id) => {
  const contact = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/contacts/' + id)
      if (!data.ok) {
        throw Error('no data available')
      }
      contact.value = await data.json()
    }
    catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  return { contact, error, load }
}

export default getContact