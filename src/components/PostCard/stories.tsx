import { Story, Meta } from '@storybook/react/types-6-0';
import { PostCard, PostCardProps } from '.';

export default {
  title: 'PostCard',
  component: PostCard,
  args: {
    slug: 'default-slug',
    title: 'default-title',
    cover: 'default-cover',
  },
} as Meta;

export const Primary: Story<PostCardProps> = (args) => <PostCard {...args} />;
