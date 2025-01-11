interface HeaderContentProps {
  title: string;
  content?: string;
}

export default function HeaderContent({ title, content }: HeaderContentProps) {
  return (
    <div className="my-10 w-2/3 min-h-24">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <h2 className="my-4 text-gray-600 dark:text-gray-500">{content}</h2>
    </div>
  );
}
