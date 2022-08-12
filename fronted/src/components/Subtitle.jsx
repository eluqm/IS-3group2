export default function Subtitle(props) {
  const { content } = props;
  return (
    <h2 className="text-base text-cyan-700 font-semibold tracking-wide uppercase"> {content} </h2>
  );
}