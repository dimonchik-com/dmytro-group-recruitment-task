import Input from './SearchInput.style';
import { ReactEvent } from '../../interfaces/interfaces';

interface ISearchInputProps {
  placeholder?: string;
  value: string;
  type?: string;
  id?: string;
  onChange: (e: ReactEvent) => void;
}

const SearchInput = (props: ISearchInputProps) => {
  return (
    <Input
      type={'text'}
      value={props.value}
      id={props.id || ''}
      placeholder={props.placeholder || ''}
      onChange={props.onChange}
    />
  );
};

export default SearchInput;
