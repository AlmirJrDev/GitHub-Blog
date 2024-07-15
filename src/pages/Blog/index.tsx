import { CardBlog } from "../../components/CardBlog"
import { CardPostGrid } from "../../components/CardPostGrid"
import Logo from "/logo.svg"


export function Blog() {
  return (
    <>
  <header className="justify-center items-center flex mb-12">
    <div className="flex flex-col items-center">
      <img src={Logo} className="w-30 mt-8" alt="" />
      <CardBlog />
    </div>
  </header>
  <main className="flex justify-center items-center flex-col mb-12">
    <div className="w-[868px] ">
      <div className="flex justify-between mb-4">
        <h3 className="text-baseTitle text-sm font-semibold">Publicações</h3>
        <span className=" text-baseText text-xs font-thin">6 publicações</span>
      </div>
      <input placeholder="Buscar conteúdo" type="text" className="h-[50px] p-4 bg-baseInput border rounded-md w-full border-baseBorder text-baseText placeholder:text-baseBorder" />
    </div>
    <div className="mt-10 grid grid-cols-2 gap-8">

      <CardPostGrid/>
      <CardPostGrid/>
      <CardPostGrid/>
      <CardPostGrid/>
      
    </div>
  </main>
  </>
  )
}