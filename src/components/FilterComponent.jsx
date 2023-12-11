const FilterComponent = ({ premium, single, double, ac, nonAc, changeSingle, changePremium, changeDouble, changeAc, changeNonAc }) => {
  return (
    <div className="border-4 border-slate-700 px-10 h-96 py-6 mt-48">

      {/* <className="bg-white flex flex-col pl-10 pr-20 pt-3.5 pb-12 border-[3px] border-solid border-zinc-300 items-start"> */}
      <header className="justify-center text-stone-800 text-center text-4xl font-bold whitespace-nowrap ml-2.5">
        Filter
      </header>
      <div className="flex items-center gap-2.5 mt-6 text-2xl font-medium text-stone-800">

        Premium
        <input className="m-1" type="checkbox" name="premium" id="" checked={premium} onChange={changePremium} />

      </div>
      <div className="flex items-center gap-2.5 mt-6 text-2xl font-medium text-stone-800">

        Single Bed
        <input className="m-1" type="checkbox" name="2" id="" checked={single} onChange={changeSingle} />

      </div>
      <div className="flex items-center gap-2.5 mt-6 text-2xl font-medium text-stone-800">

        Double Bed
        <input className="m-1" type="checkbox" name="4" id="" checked={double} onChange={changeDouble} />

      </div>
      <div className="flex items-center gap-2.5 mt-6 text-2xl font-medium text-stone-800">

        AC
        <input className="m-1" type="checkbox" name="ac" id="" checked={ac} onChange={changeAc} />

      </div>
      <div className="flex items-center gap-2.5 mt-6 text-2xl font-medium text-stone-800">

        Non-AC
        <input className="m-1" type="checkbox" name="non_ac" id="" checked={nonAc} onChange={changeNonAc} />

      </div>
    </div>

  )
}

export default FilterComponent


