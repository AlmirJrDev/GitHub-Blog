export function CardPostGrid() {
  return(
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
  )
}