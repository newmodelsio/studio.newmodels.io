
export default function Filter({ categories, filter, setFilter }: { categories: any, filter: string; setFilter: any }) {

  return (

    <div className="flex gap-5 mb-5 distort">
      {categories.map((item: any) => (
        <button key={item.slug} onClick={() => { setFilter(item.slug) }} className={`${(filter == item.slug || filter.includes(item.slug)) && 'active'} group flex items-center gap-2 uppercase cursor-pointer`}>
          <div>
            <div className="w-[22px] aspect-square flex justify-center items-center border-[3px] border-black relative">
              <div className="absolute text-[16px] hidden group-[.active]:block">
                <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119 108" className="w-[15px]">
                  <path id="Path 0" className="s0" d="m99.4 8.4c-3.3 2.4-15.6 14.1-27.4 26.1-11.8 11.9-24.1 23.9-27.3 26.6-3.1 2.7-6.2 4.9-6.7 4.9-0.6 0-1.6-1.5-2.4-3.3-0.8-1.7-2-7-2.6-11.7-0.6-4.7-1.8-10-2.6-11.8-0.8-1.7-2.5-3.7-3.9-4.2-1.4-0.6-3.7-0.7-5.3-0.4-1.5 0.4-4.6 1.7-7 3-2.6 1.5-5.1 4-6.6 6.6-1.3 2.4-2.7 5.6-3 7.3-0.4 1.6-0.2 9.3 0.4 17 0.6 7.7 1.7 16.7 2.5 20 0.9 3.9 2.4 7 4.2 8.8 1.5 1.5 5.3 4 8.3 5.4 4.1 1.9 6.3 2.4 8.5 1.9 1.6-0.4 5.7-2.7 9-5.1 3.3-2.4 9.9-8.1 14.7-12.7 4.9-4.5 19.8-20 33.3-34.3 13.5-14.3 25.4-27.8 26.5-30 1.3-2.6 2-6.1 2-10 0-3.5-0.5-6.5-1.2-7.3-0.7-0.7-2.7-1.2-4.4-1.2-2.1 0-5 1.4-9 4.4z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="text-left leading-[1]">{item.title}</div>
        </button>
      ))}

    </div>
  );
}
