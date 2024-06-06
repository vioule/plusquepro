"use client";
type TTrendingTime = "day" | "week";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  original_title: string;
  overview: string;
  trending_time: TTrendingTime[];
}

function GetData() {
  const getIds = async (trendingTime: TTrendingTime): Promise<number[]> => {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/${trendingTime}?language=en-US`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjJkNjNjZGRjMDY2ZDk5ZWQzZTgwNmQzMjY3MThjYSIsInN1YiI6IjYyNGVhNTRhYjc2Y2JiMDA2ODIzODc4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zuuBq1c63XpADl8SQ_c62hezeus7VibE1w5Da5UdYyo",
          accept: "application/json",
        },
      }
    );
    const result = await response.json();
    return result.results.map((movie: IMovie) => movie.id);
  };

  const getData = async (movie_id: number, trendingTime: TTrendingTime[]) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjJkNjNjZGRjMDY2ZDk5ZWQzZTgwNmQzMjY3MThjYSIsInN1YiI6IjYyNGVhNTRhYjc2Y2JiMDA2ODIzODc4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zuuBq1c63XpADl8SQ_c62hezeus7VibE1w5Da5UdYyo",
          accept: "application/json",
        },
      }
    );
    const result = await response.json();
    return {
      id: result.id,
      backdrop_path: result.backdrop_path,
      poster_path: result.poster_path,
      release_date: result.release_date,
      original_title: result.original_title,
      overview: result.overview,
      trending_time: trendingTime,
    };
  };

  const handleGetData = async () => {
    const dayIds = await getIds("day");
    const weekIds = await getIds("week");
    const trendingBoth = dayIds.filter((id) => weekIds.includes(id));
    const trendingDay = dayIds.filter((id) => !trendingBoth.includes(id));
    const trendingWeek = weekIds.filter((id) => !trendingBoth.includes(id));
    const datas: IMovie[] = [];
    trendingDay.map(async (id) => {
      const data = await getData(id, ["day"]);
      datas.push(data);
    });
    trendingWeek.map(async (id) => {
      const data = await getData(id, ["week"]);
      datas.push(data);
    });
    trendingBoth.map(async (id) => {
      const data = await getData(id, ["day", "week"]);
      datas.push(data);
    });
    console.log(datas);
  };
  return (
    <div>
      <button onClick={handleGetData} className="bg-blue-600 p-4 rounded-md">
        Get data
      </button>
    </div>
  );
}

export default GetData;
