import { createClient } from '@supabase/supabase-js'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:3000/', //post login page 
    },
  })
}

/*
https://supabase.com/docs/reference/javascript/admin-api

*************************FETCH
const { data, error } = await supabase
  .from('characters')
  .select()


*************************UPDATE
const { error } = await supabase
  .from('instruments')
  .update({ name: 'piano' })
  .eq('id', 1)

***************************INSERT
const { error } = await supabase
  .from('countries')
  .insert({ id: 1, name: 'Mordor' })
*/