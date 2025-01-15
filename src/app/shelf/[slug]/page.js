import Article1 from "../../../components/Articles/Article1";

export default function Article() {
  return <Article1 />;
}

export async function generateStaticParams() {
  const slugs = ["debounce-function-issue-in-useEffect"]; // static slugs

  return slugs.map((slug) => ({
    slug: slug,
  }));
}
