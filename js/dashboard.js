import { supabase } from './supabaseClient.js'

async function loadClients() {
  const role = new URLSearchParams(window.location.search).get('role')
  const { data: user, error: userError } = await supabase.auth.getUser()
  if(userError) return console.error(userError)

  let query = supabase.from('clients').select('*')

  // Coaches only see clients they created
  if(role === 'coach') {
    query = query.eq('created_by', user.data.user.id)
  }

  const { data: clients, error } = await query
  if(error){
    console.error(error)
    return
  }

  const list = document.getElementById('client-list')
  list.innerHTML = ''
  clients.forEach(client => {
    const li = document.createElement('li')
    li.textContent = client.full_name + ' (' + client.service_type + ')'
    list.appendChild(li)
  })
}

document.addEventListener('DOMContentLoaded', loadClients)
