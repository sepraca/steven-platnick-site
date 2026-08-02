import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

const components: Components = {
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:underline"
    >
      {children}
    </a>
  ),
};

export default function BioParagraph({ text }: { text: string }) {
  return <ReactMarkdown components={components}>{text}</ReactMarkdown>;
}
