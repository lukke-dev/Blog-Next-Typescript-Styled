import { Datee } from '../Datee';
import { Container } from './styled';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ date, author, category }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <Datee date={date} /> por {author} em {category}
    </Container>
  );
};
