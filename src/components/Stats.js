import useStats from "../hooks/useStats";

const Stats = ({ url }) => {
  const { stats, loading, error } = useStats(url);

  if (error) return <h1>error !!</h1>;
  if (loading) return <h1>Loading ...</h1>;

  return (
    <section>
      <div className="authors-card">
        <h2 className="title">AUTHORS</h2>
        <h2>{stats.author.value}</h2>
      </div>
      <div className="genre-card">
        <h2 className="title">GENRES</h2>
        <h2>{stats.genre.value}</h2>
      </div>
      <div className="year-card">
        <h2 className="title">YEARS</h2>
        <h2>{stats.year.value}</h2>
      </div>
    </section>
  );
};

export default Stats;