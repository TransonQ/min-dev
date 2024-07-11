import { MDXProvider } from "@mdx-js/react";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { defaultStyle as dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

// https://mdxjs.com/guides/syntax-highlighting/
function code({ className, ...properties }: any) {
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <SyntaxHighlighter
      language={match[1]}
      PreTag="div"
      {...properties}
      style={dark}
    />
  ) : (
    <code className={className} {...properties} />
  );
}

// 这个组件接受一个 MDX 文件作为参数并渲染它
const MDXRenderer: React.FC<{ mdxComponent: React.ComponentType }> = ({
  mdxComponent: MDXComponent,
}) => {
  return (
    <MDXProvider components={{ code }}>
      <MDXComponent />
    </MDXProvider>
  );
};

export default MDXRenderer;
