import { formatDate } from '../../utils/format-date';
import { Container } from './styled';

export type DateProps = {
  date: string;
};

export const Datee = ({ date }: DateProps) => {
  return <Container>{formatDate(date)}</Container>;
};
