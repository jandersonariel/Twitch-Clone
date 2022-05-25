import React from 'react';

import Header from '../../Components/Header';
import Heading from '../../Components/Heading';
import Title from '../../Components/Title';
import CategoryList from '../../Components/CategoryList';
import StreamList from '../../Components/StreamList';
import ChannelList from '../../Components/ChannelList';

import { FlatList, View } from 'react-native'

import { Container, Wrapper, Main } from './styles';

interface Item {
  key: string;
  render: () =>JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
   const { data, indices } = React.useMemo(() => {
      const items: Item[] = [
        {
          key: 'PAGE_HEADING',
          render: () => <Heading>Following</Heading>,
        },

        {
          key: 'FOLLOWED_CATEGORIES',
          render: () => <Title>Followed Categories</Title>,
          isTitle: true,
        },

        {
          key: 'C1',
          render: () => <CategoryList />,
        },

        {
          key: 'LIVE_CHANNELS',
          render: () => <Title>Live Channels</Title>,
          isTitle: true,
        },

        {
          key: 'C2',
          render: () => <StreamList />,
        },

        {
          key: 'CONTINUE_WATCHING',
          render: () => <Title>Continue Watching</Title>,
          isTitle: true,
        },

        {
          key: 'C3',
          render: () => <StreamList />,
        },

        {
          key: 'OFFLINE_CHANNELS',
          render: () => <Title>Offline Channels</Title>,
          isTitle: true,
        },

        {
          key: 'C4',
          render: () => <ChannelList />,
        },
      ];

      //Array que contem apenas os indices dos elementos que são titulos
      const indices: number[] = [];

      items.forEach((item, index) => item.isTitle && indices.push(index));

      return {
        data: items,
        indices,
      }
    }, []);

  return (
    <Wrapper> 
      <Container>
        <Header />

      <Main>
        <FlatList<Item>
          data={data}
          renderItem={({ item }) => item.render()}
          keyExtractor={item => item.key}
          stickyHeaderIndices={indices}
          // Refresh Effect
          onRefresh={() => {}}
          refreshing={false}
        />
      </Main>
    </Container>  
    </Wrapper>
  );
};

export default Following;