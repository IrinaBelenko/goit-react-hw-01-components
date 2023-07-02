import user from 'data/user.json';
// import data from 'data/data.json';
// import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { Section } from './Section/Section.styled';
import { Container } from './Container/Container.styled';
import { Heading } from './Heading/Heading.styled';
import { Profile } from './Profile/Profile';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <TransactionHistory items={transactions} />
      </Container>
    </Section>
  );
};
