import { MDXProvider } from "@mdx-js/react";
import React from "react";

// 这个组件接受一个 MDX 文件作为参数并渲染它
const MDXRenderer: React.FC<{ mdxComponent: React.ComponentType }> = ({
  mdxComponent: MDXComponent,
}) => {
  return (
    <MDXProvider
      components={{
        // 用 CodeBlock 组件替换 MDX 中的代码块
        // code: CodeBlock,
      }}
    >
      <MDXComponent />
    </MDXProvider>
  );
};

export default MDXRenderer;
