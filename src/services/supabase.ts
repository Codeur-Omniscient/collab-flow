import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/database.types";

const supabaseUrl: string = "https://fmyrpwhipxdvxbkrtjyb.supabase.co";
const supabaseKey: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZteXJwd2hpcHhkdnhia3J0anliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MjA4NzUsImV4cCI6MjA1MjA5Njg3NX0.qJtkpyVeJBjqutHYHL1NPScwl2ViHcW0tVkjD9TGfjg";

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
