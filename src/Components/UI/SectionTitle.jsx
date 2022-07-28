export default function SectionTitle(props) {
  return (
    <div className="flex justify-center items-center flex-col dark:text-D_titleColor text-titleColor ">
      <h2 className="font-bold">{props.title}</h2>
      <span className="text-sm">{props.subtitle}</span>
    </div>
  );
}
