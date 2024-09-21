"use client"
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useEffect, useState } from 'react'

// Create the Supabase client
const supabase = createClient(
  'https://mobtcbkhsupbagrpmobe.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vYnRjYmtoc3VwYmFncnBtb2JlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNjE4NDI3NSwiZXhwIjoyMDMxNzYwMjc1fQ.gUf7umjV1axJM7tgIUsL1EmcaZjKu11Vu9MRnZxgo9c'
)

export default function AuthComponent() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    // Check active session and listen for any changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session)
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  return (
    <div>
      {session ? (
        <div>
          <h1>Welcome, {session.user.email}</h1>
          <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
        </div>
      ) : (
       
        
             <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['google', 'discord', 'twitter']}
          onlyThirdPartyProviders={true} // Disable email/password login
        />
       
        
             )}
    </div>
  )
}
