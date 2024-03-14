import { useQueryCep } from "../hooks/useQueryCep";

export function App() {
  const { data, isLoading, error } = useQueryCep();
  console.log(data);

  console.log(error);
  
  
  return(
    <>
      <h1>App</h1>
      <pre>
        {data}
      </pre>
    </>
  )
}