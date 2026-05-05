import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Article1() {
  const codeString = ``;
  return (
    <>
      <h1>Debounce Function Issue in useEffect</h1>
      <p>
        Let's say we want to make a fetch API call each time the query parameter
        changes. We're also going to add a debouncer because these changes can
        happen quickly. Here’s what our starting code looks like:
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
        {`// doesn't work
useEffect(() => {
  debounce(() => {
    fetchData(queryParamValue)
  }, 500)
}, [queryParamValue])`.trim()}
      </SyntaxHighlighter>
      <p>
        The problem here is that the debouncer doesn't perform any meaningful
        action; it merely delays each <code>useEffect</code> execution by 500
        ms.
      </p>
      <p>
        To address this issue, we need to refactor the code and utilize the
        <code>useCallback</code> React hook:
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
        {`// step 1: refactoring
useEffect(() => {
    onQueryHandler()
}, [queryParamValue])

const onQueryHandler = useCallback(
   debounce(() => {
    fetchData(queryParamValue)
  }, 500),
[]);`}
      </SyntaxHighlighter>
      <p>
        The debouncer is working now, and we are using <code>useCallback</code>{" "}
        without any dependencies. This means we won't get the latest value of{" "}
        <code>queryParamValue</code>. This is fine if we don't need to send it's
        value to the backend with the <code>fetchData</code> function. However,
        in our case, we do need to send it to the server.
      </p>
      <p>
        If we add <code>queryParamValue</code> to the dependencies of{" "}
        <code>useCallback</code>, we will face the same issue again. Therefore,
        we will leave the dependencies empty as it is.
      </p>
      <p>
        We can pass the latest <code>queryParamValue</code> as a parameter in{" "}
        <code>onQueryHandler</code> within <code>useEffect</code>:
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
        {`// step 2: passing value as an argument
useEffect(() => {
    onQueryHandler(queryParamValue)
}, [queryParamValue])

const onQueryHandler = useCallback(
  debounce(queryParamValue => {
    fetchData(queryParamValue)
  }, 500),
[]);`}
      </SyntaxHighlighter>
      <p>Now, our debouncer function is working perfectly!</p>
    </>
  );
}
