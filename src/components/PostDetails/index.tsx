import { Datee } from '../Datee';
import { Container } from './styled';
import Link from 'next/link';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ date, author, category }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <Datee date={date} /> por {author} |{' '}
      <Link href={`/categories/${category}`}>
        <a>{category}</a>
      </Link>
    </Container>
  );
};
