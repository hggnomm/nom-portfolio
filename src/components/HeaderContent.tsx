interface HeaderContentProps {
  title: string;
}

export default function HeaderContent({ title }: HeaderContentProps) {
  return <h1>{title}</h1>;
}
