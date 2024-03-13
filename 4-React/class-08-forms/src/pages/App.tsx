import { SubmitHandler, useForm, } from "react-hook-form"

type Inputs = {
  name: string;
  email:string;
}

export function App() {
  const{ register, handleSubmit, formState: {errors}, reset,} = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset()
  }

  console.log("name");
  console.log("render");
  
  
  
  return(
    <>
      <h1>Class 08 Forms</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <br />

      <section>
          <label>
          Name:
        <input type="text" {...register("name", {required: "Campo obrigatorio"})}/>
        </label>

        <div style={{ fontSize: 10,color: "red", position: "absolute"}}>{errors.name?.message}</div>

        <br />
        <br />
        
        <div>
          <button>Enviar</button>
        </div>
          </section>
          <section>
            <br />
          <label>
          Email:
        <input type="email"
        {...register("email",
        {required: "Campo obrigatorio",
        pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
        message:"Endereço de email invalido"},
        })}/>
        </label>

        <div style={{ fontSize: 10,color: "red", position: "absolute"}}>{errors.email?.message}</div>

        <br />
        <br />
        <div>
          <button>Enviar</button>
        </div>
          </section>
      </form>
    </>
  )
}