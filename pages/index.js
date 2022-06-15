import Feed from '../components/Feed';
import Header from '../components/header';

export default function Home ({data}) {
  return (
    <div>
      <Header />
      <Feed data={data}/>
    </div>
  );
}

export async function getStaticProps () {
  const res = await fetch ('https://jsonplaceholder.typicode.com/photos');
  let data = await res.json ();
  data = data.slice(0, 20)

  return {
    props: {data}
  }
}
