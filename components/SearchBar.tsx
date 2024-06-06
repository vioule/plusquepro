import { setTrendSearch } from "@/lib/store/features/trend/trendSlice";
import { useAppDispatch } from "@/lib/store/hooks";

export default function SearchBar() {
  const dispatch = useAppDispatch();
  return (
    <div className="relative">
      <input
        type="text"
        className={`p-4 px-14 border-2 rounded-xl focus:drop-shadow-xl outline-none w-full`}
        placeholder="Search"
        onChange={(e) => dispatch(setTrendSearch(e.target.value))}
      />
    </div>
  );
}
