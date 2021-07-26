import axios from 'axios';
import { useEffect, useState, MouseEvent, useCallback, useMemo } from 'react';
import { ReactEvent, User } from '../../interfaces/interfaces';
import { API_USERS_URL } from '../../constants/api';
import { Group, DetailsBlock } from './Users.styles';
import SearchInput from '../SearchInput/SearchInput';
import H4 from '../H2';
import Container from '../../components/Container';

interface LiRowProps {
  user: User;
  onClick(userId: number): void;
  clickId: number | undefined;
}

const Details = ({ user }: { user: User }) => {
  return (
    <DetailsBlock>
      <p>
        <span>EMAIL:</span>
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </p>
      <p>
        <span>PHONE:</span>
        <a href={`tel:${user.email}`}>{user.phone}</a>
      </p>
      <p>
        <span>WEBSITE:</span>
        <a href={`http://${user.website}`} rel="noreferrer" target="_blank">
          {user.website}
        </a>
      </p>
    </DetailsBlock>
  );
};

const LiRow = ({ user, onClick, clickId }: LiRowProps) => {
  return (
    <li key={user.id}>
      <b onClick={(e: MouseEvent) => onClick(user.id)}>{user.name}</b>
      <span>@{user.username}</span>
      {clickId && clickId === user.id ? <Details user={user} /> : null}
    </li>
  );
};

const Tournaments: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [clickId, setClickId] = useState<number>();

  useEffect(() => {
    try {
      axios.get(API_USERS_URL).then((result) => {
        setUsers(result.data);
      });
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  const onChangeHandler = (e: ReactEvent) => {
    setSearchInput(e.target.value);
  };

  const onClickUserHandler = useCallback(
    (userId: number) => {
      const id = clickId !== userId ? userId : undefined;
      setClickId(id);
    },
    [clickId]
  );

  const userList = useMemo(
    () =>
      users.filter(
        (user) =>
          user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          user.email.toLowerCase().includes(searchInput.toLowerCase())
      ),
    [users, searchInput]
  );

  return (
    <Container>
      <H4>Users List</H4>
      <div>
        <SearchInput
          onChange={onChangeHandler}
          value={searchInput}
          placeholder="Search by user or user name..."
        />
      </div>
      <Group>
        {userList.map((user) => (
          <LiRow user={user} onClick={onClickUserHandler} clickId={clickId} />
        ))}
      </Group>
    </Container>
  );
};

export default Tournaments;
