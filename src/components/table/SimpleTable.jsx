import { useEffect, useState } from 'react'
import { Table } from 'tropix-ui'
import { Wrapper } from '../wrapper/Wrapper'
import { users } from '../../utils/constants';


export const SimpleTable = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  
  return (
    <Wrapper>
      <Table headers={['Id', 'User', 'Email', 'Website']} height={350}>
      {
          users.map(user => (
              <Table.Row key={user.id}>
                  <Table.Cell label="Id">{user.id}</Table.Cell>
                  <Table.Cell label="Name">{user.name}</Table.Cell>
                  <Table.Cell label="Email">{user.email}</Table.Cell>
                  <Table.Cell label="Phone">{user.website}</Table.Cell>
              </Table.Row>
          ))
        }
    </Table>
    </Wrapper>
  );
}