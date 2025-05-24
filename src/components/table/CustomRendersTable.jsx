import { useEffect, useState } from 'react'
import { Table, Avatar } from 'tropix-ui'
import { Wrapper } from '../wrapper/Wrapper'
import { users } from '../../utils/constants';


export const CustomRendersTable = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  
  return (
    <Wrapper>
      <Table headers={['Id', 'User', 'Email', 'Website']} height={350}>
      {
          users.map((user, i) => (
               <Table.Row key={user.id}>
                <Table.Cell label="Id">{user.id}</Table.Cell>
                <Table.Cell label="User">
                   <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar size="sm" src={`https://i.pravatar.cc/100?img=${i}`} />
                      <span style={{ paddingLeft: '1rem' }}>{ user.name }</span>
                   </div>
                </Table.Cell>
                <Table.Cell label="Email">{user.email}</Table.Cell>
                <Table.Cell label="Phone">{user.website}</Table.Cell>
            </Table.Row>
          ))
        }
    </Table>
    </Wrapper>
  );
}