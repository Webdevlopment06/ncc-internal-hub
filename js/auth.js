import { supabase } from './supabaseClient.js'

// Login function
export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) {
    alert('Login failed: ' + error.message)
    return
  }

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', data.user.id)
    .single()

  if(profileError){
    alert('Profile error: ' + profileError.message)
    return
  }

  // Redirect based on role
  window.location.href = `dashboard.html?role=${profile.role}`
}

// Logout
export async function logout() {
  await supabase.auth.signOut()
  window.location.href = 'index.html'
}
