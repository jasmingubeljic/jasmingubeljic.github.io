import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Article2() {
  const codeString = ``;
  return (
    <>
      <h1>Push footer to the bottom</h1>
      <p>
        If the main content is minimal, you might see that the footer isn't
        positioned at the bottom of the page. Fortunately, there's a simple
        solution to move it down without needing to add extra elements or write
        plenty of CSS styles.
      </p>
      <p>
        Let's say our <code>body</code> element has <code>header</code>,{" "}
        <code>main</code>, and <code>footer</code> child elements. The easiest
        solution is to use CSS grid like this:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        showLineNumbers={false}
        customStyle={{ fontSize: ".9rem", lineHeight: "1.7" }}
        codeTagProps={{
          style: {
            lineHeight: "inherit",
            fontSize: "inherit",
          },
        }}
      >
        {`// most elegant and easiest fix
body {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}`}
      </SyntaxHighlighter>
      <p>
        CSS grid is the most elegant method to achieve this, even though there
        are various techniques available. It's well-supported across most
        browsers, except for Internet Explorer, which isn't a concern for me.
      </p>
    </>
  );
}
