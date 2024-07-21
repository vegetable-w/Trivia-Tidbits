import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ippgbvnpjrgtsqqylbcd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwcGdidm5wanJndHNxcXlsYmNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2MzcwNjIsImV4cCI6MjAzMjIxMzA2Mn0.bCZpmHtuKJvC_SYAsZNAlPXi1XhrPCwjGuaHtEqPaFw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
