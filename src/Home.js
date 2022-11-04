import Mustwatch from "./Mustwatch";
import Section from "./Section";
import Collections from "./Collections";
import Listen from "./Whatolisten";
import Mom from "./MOM";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Home = () => {
  const prey = {
    backdrop_path: "/sNhzcUw5cg4JwICjnHZ5XhTKNrU.jpg",
    id: 766507,
    tag: "movie of the month",
    imdb_id: "tt11866324",
    title: "Prey",
    ott: "disney + hotstar",
    tagline: "They hunt to live. It lives to hunt.",
    videos: {
      results: [
        {
          id: "62f160bf880c92007f179721",
          iso_639_1: "en",
          iso_3166_1: "US",
          key: "br5cxQXKtuc",
          name: "It's Coming Clip",
          official: true,
          published_at: "2022-08-08T19:00:29.000Z",
          site: "YouTube",
          size: 1080,
          type: "Clip",
        },
      ],
    },
  };
  const dahmer = {
    backdrop_path: "/5vUux2vNUTqwCzb7tVcH18XnsF.jpg",
    id: 113988,
    imdb_id: "tt11866324",
    ott: "netflix",
    tag: "trending series",
    title: "DAHMER",
    name: "Dahmer – Monster: The Jeffrey Dahmer Story",
    tagline: "Monster: The Jeffrey Dahmer Story.",
    videos: {
      results: [
        {
          id: "6336b6f742f19f007a9fe262",
          iso_639_1: "en",
          iso_3166_1: "US",
          key: "12DO-joSYFQ",
          name: "DAHMER - Monster: The Jeffrey Dahmer Story | Rashad Robinson On Systemic Injustice",
          official: true,
          published_at: "2022-09-23T18:00:00.000Z",
          site: "YouTube",
          size: 1080,
          type: "Featurette",
        },
      ],
    },
  };
  const your = {
    backdrop_path: "/rjs5IfIv6Psl2YCSHKcluhTQGjJ.jpg",
    id: 372058,
    imdb_id: "tt5311514",
    tag: "best anime movie",
    title: "Your Name.",
    ott: "not available to stream",
    tagline:
      "It was almost like seeing something out of a dream, nothing more or less than a breathtaking view.",
    videos: {
      results: [
        {
          id: "63285b9f20af77007bfcfb4e",
          iso_639_1: "en",
          iso_3166_1: "US",
          key: "SlNVu5pnZuc",
          name: "How to be an anime voice actor, with Your Name stars Stephanie Sheh and Michael Sinterniklaas | BFI",
          official: true,
          published_at: "2018-05-16T11:51:58.000Z",
          site: "YouTube",
          size: 1080,
          type: "Featurette",
        },
      ],
    },
  };
  const nope = {
    backdrop_path: "/jKjQPNFQqaa0aJ5icDS9EP2t9XZ.jpg",
    id: 762504,
    tag: "NEW RELEASE!",
    imdb_id: "tt10954984",
    title: "Nope",
    tagline: "What’s a bad miracle?",
    ott: "prime",
    videos: {
      results: [
        {
          id: "632f5d496f6a9900804dc8dd",
          iso_639_1: "en",
          iso_3166_1: "US",
          key: "vdxaiZhtYt4",
          name: "The Oprah Shot Movie Clip",
          official: true,
          published_at: "2022-09-24T19:00:22.000Z",
          site: "YouTube",
          size: 1080,
          type: "Clip",
        },
      ],
    },
  };
  return (
    <>
      <Navbar />
      <Mustwatch />
      <Listen />
      <Section data={8221705} title="TOP THRILLER MOVIES " />
      <Section data={8221723} title="TOP COMEDY MOVIES " />
      <Mom {...nope} />
      <Section data={8222496} title="WAR MOVIES THAT U SHOULD'NT MISS " />
      <Section data={8222141} title="BEST ANIMATED MOVIES " />
      <Section data={8222144} title="BEST FEEL GOOD MOVIES " />
      <Mom {...prey} />
      <Section data={8222432} title="BEST 40 TELUGU MOVIES " />
      <Section data={8222438} title="TOP ANIME MOVIES " />
      <Section data={8222440} title="GEMS OF JAPANESE MANGA " />
      <Mom {...dahmer} />
      <Section data={8222444} title="BEST CARTOONS TO WATCH " />

      <Section data={8222441} title="TOP KDRAMA SERIES " />
      <Section data={8222445} title="MUST WATCH TV SHOWS " />

      <Collections data={1241} title="BEST MOVIE COLLECTIONS" />
      <Footer />
    </>
  );
};

export default Home;
