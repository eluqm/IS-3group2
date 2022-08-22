export default function FooterProject(props) {
  const { title, content } = props;
  return (
    <div className="flex flex-row space-x-2">
      <div className="font-medium text-slate-500"> {title} </div>
      <div className="font-normal text-xl"> {content} </div>
    </div>
  )
}