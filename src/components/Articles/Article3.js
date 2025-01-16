import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Article3() {
  return (
    <>
      <h1>Accessing Localhost from Different Devices</h1>
      <p>
        Front-end web developers use adaptive and responsive simulators in their
        browsers when developing responsive layout. This handy feature ca be
        accessed by the shortcut <code>Super/Command + Shift + M</code> in both
        Chrome and Firefox. The device toggle view is particularly useful for
        easily switching between various device sizes during the development
        process.
      </p>
      <p>
        Occasionally, I experience unexpected layout issues when testing on
        actual devices. Now, when I work on responsive design for small screens,
        I use real mobile device for development. It turns out that reaching the
        Localhost server from any device in the same network is quite
        straightforward.
      </p>
      <p>
        Obvioustly reaching <code>localhost:3000</code> from another device
        won't work. We need to figure out the correct IP address of the
        development machine.
      </p>
      <p>
        Inside the Terminal we can enter the following command for respective
        OS:
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
        {`// Mac OS
ifconfig

// Linux Desktop
nmcli device show

// Windows
ipconfig`}
      </SyntaxHighlighter>
      <p>
        We get some data returned, and we are interested in IPv4 Address
        (example: <code>192.168.X.X</code>). In our case server is running on
        port 3000, we'll add <code>:3000</code> to ip address. We can now access
        localhost development server by visiting: <code>192.168.X.X:3000</code>{" "}
        from any other device.
      </p>
    </>
  );
}
