import Article1 from "../../../components/Articles/Article1";
import Article2 from "../../../components/Articles/Article2";
import Article3 from "../../../components/Articles/Article3";

export async function generateStaticParams() {
  const slugs = [
    "debounce-function-issue-in-useEffect",
    "push-footer-to-the-bottom",
    "accessing-localhost-from-different-devices",
  ]; // static slugs

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function Article({ params }) {
  const { slug } = await params;

  if (slug == "debounce-function-issue-in-useEffect") {
    return <Article1 />;
  }

  if (slug == "push-footer-to-the-bottom") {
    return <Article2 />;
  }

  if (slug == "accessing-localhost-from-different-devices") {
    return <Article3 />;
  }
}
