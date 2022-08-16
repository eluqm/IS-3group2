export default function RowRender(props) {
  const { tit, content, font, text } = props;

  return (
    <div>
      <p className="font-medium text-slate-500"> {tit} </p>
      <p className={`font-${font} text-${text}`}> {content} </p>
    </div>
  );
}
