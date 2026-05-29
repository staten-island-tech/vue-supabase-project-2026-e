import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export const supabase = createClient(supabaseUrl, supabasePublishableKey)


const {
  data: { user },
} = await supabase.auth.getUser()
let metadata = user?.user_metadata

supabase.auth.signInWithOAuth({
  provider: 'google',
})