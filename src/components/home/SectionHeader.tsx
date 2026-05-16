type Props = {
  title: string;
  href?: string;
};

export default function SectionHeader({ title, href = "#" }: Props) {
  return (
    <div className="flex justify-between mb-5">
      <h4>{title}</h4>
      <a href={href}><p>See all</p></a>
    </div>
  );
}