
import { ExternalLink,  } from "lucide-react"
import Logo from "/logo.svg"
import Github from "/github.svg"
import Institute from "/institute.svg"
import Followers from "/followers.svg"
export function App() {
  return (
    <>
  <header className="justify-center items-center flex mb-12">
    <div className="flex flex-col items-center">
      <img src={Logo} className="w-30 mt-8" alt="" />
      <div className="rounded-md mt-14 bg-baseProfile w-[868px] h-[212px] flex items-center ">
        <div className="p-4 ml-4">
        <img className="rounded-xl object-cover w-58 " src="https://github.com/AlmirJrDev.png" alt="" />
        </div>
        <div className="p-4 flex flex-col">
          <div className="flex justify-between pb-4">
            <h2 className="text-baseTitle font-semibold text-2xl">
              Almir Junior Araujo Gomes
            </h2> 
            <a href="" className="font-semibold text-xs uppercase text-blue flex items-center justify-center gap-2">
              <div className="flex items-center justify-center gap-2">
                GitHub 
                <ExternalLink className="size-4 font-semibold "/>
              </div>
            </a>
          </div>
          <div>
            <p className="text-baseText text-sm pb-10">
              Tristique volutpat pulvinar vel massa, pellentesque egestas. 
              Eu viverra massa quam dignissim aenean malesuada suscipit. 
              Nunc, volutpat pulvinar vel mass.
            </p>
          </div>
          <div className="text-baseText gap-4 flex ">
            <div className="flex gap-2">
              <img src={Github} alt="" />
              <span>almirjrdev</span>
            </div>
            <div className="flex gap-2">
              <img src={Institute} alt="" />
              <span>Rocketseat</span>
            </div>
            <div className="flex gap-2">
              <img src={Followers} alt="" />
              <span>64 Seguidores</span>
            </div>
          </div>
        </div>  
      </div>
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
      <div className="flex flex-col items-center justify-center w-[416px] bg-basePost rounded-md p-8"  >
        <div className="flex w-full justify-between items-baseline mb-5">
          <h4 className="text-lg text-baseTitle w-[213px]">JavaScript data types and data structures</h4>
          <span className="text-xs text-baseSpan">Há 1 dia</span>
        </div>
         <div>
         <p className="text-baseText line-clamp-4">Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean</p>
</div>
      </div>
      <div className="flex flex-col items-center justify-center w-[416px] bg-basePost rounded-md p-8"  >
        <div className="flex w-full justify-between items-baseline mb-5">
          <h4 className="text-lg text-baseTitle w-[213px]">JavaScript data types and data structures</h4>
          <span className="text-xs text-baseSpan">Há 1 dia</span>
        </div>
         <div>
         <p className="text-baseText line-clamp-4">Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean</p>
</div>
      </div>
      <div className="flex flex-col items-center justify-center w-[416px] bg-basePost rounded-md p-8"  >
        <div className="flex w-full justify-between items-baseline mb-5">
          <h4 className="text-lg text-baseTitle w-[213px]">JavaScript data types and data structures</h4>
          <span className="text-xs text-baseSpan">Há 1 dia</span>
        </div>
         <div>
         <p className="text-baseText line-clamp-4">Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean</p>
</div>
      </div>
      <div className="flex flex-col items-center justify-center w-[416px] bg-basePost rounded-md p-8"  >
        <div className="flex w-full justify-between items-baseline mb-5">
          <h4 className="text-lg text-baseTitle w-[213px]">JavaScript data types and data structures</h4>
          <span className="text-xs text-baseSpan">Há 1 dia</span>
        </div>
         <div>
         <p className="text-baseText line-clamp-4">Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean</p>
</div>
      </div>
      <div className="flex flex-col items-center justify-center w-[416px] bg-basePost rounded-md p-8"  >
        <div className="flex w-full justify-between items-baseline mb-5">
          <h4 className="text-lg text-baseTitle w-[213px]">JavaScript data types and data structures</h4>
          <span className="text-xs text-baseSpan">Há 1 dia</span>
        </div>
         <div>
         <p className="text-baseText line-clamp-4">Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean</p>
</div>
      </div>
      <div className="flex flex-col items-center justify-center w-[416px] bg-basePost rounded-md p-8"  >
        <div className="flex w-full justify-between items-baseline mb-5">
          <h4 className="text-lg text-baseTitle w-[213px]">JavaScript data types and data structures</h4>
          <span className="text-xs text-baseSpan">Há 1 dia</span>
        </div>
         <div>
         <p className="text-baseText line-clamp-4">Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean</p>
</div>
      </div>
      
    </div>
  </main>
  </>
  )
}