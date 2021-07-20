import { Container, PostCardCover, PostCardHeading } from './styled';
import Link from 'next/link';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};
export const PostCard = ({ slug, title, cover }: PostCardProps) => {
  return (
    <Container>
      <PostCardCover>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a>
            <img src={cover} alt={title} />
          </a>
        </Link>
      </PostCardCover>
      <PostCardHeading>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a>{title}</a>
        </Link>
      </PostCardHeading>
    </Container>
  );
};
