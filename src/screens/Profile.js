import React, {useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../constants/Button';
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
} from '../constants/vector-icons';
import {LoadingModal} from '../components';

const Profile = ({navigation}) => {
  const [logged, setLogged] = useState(true);
  const [modal, setModal] = useState(false);

  const login = () => {};

  const openPage = page => {
    switch (page) {
      case 'location':
        navigation.navigate('Location');
        break;
      case 'prayer':
        navigation.navigate('Prayer');
        break;
      case 'quotes':
        navigation.navigate('Quotes');
        break;
      case 'push':
        navigation.navigate('Notifications');
        break;
      case 'music':
        navigation.navigate('Downloads');
        break;
      case 'support':
        navigation.navigate('Support');
        break;
      case 'legal':
        navigation.navigate('Legal');
        break;
      default:
        break;
    }
  };

  const onSyncCloud = page => {
    setModal(true);
  };

  return (
    <Container showsVerticalScrollIndicator={false}>
      <LoadingModal
        visible={modal}
        onClose={_ => setModal(false)}
        type="sync"
      />
      {logged ? (
        <>
          <Header>
            <Top>
              <Btn activeOpacity={0.8}>
                <Icon name="log-out" size={24} color="#dedede" />
              </Btn>
            </Top>
            <ProfileImage>
              <Avatar source={require('../../assets/images/user-photo.png')} />
              <Name>Dayo Akins</Name>
              <Button
                text="talk to us"
                style={{
                  width: '60%',
                  height: 43,
                  marginTop: 5,
                  backgroundColor: 'rgba(88, 88, 88, 0.8)',
                  letterSpacing: 2,
                }}
              />
            </ProfileImage>
          </Header>
          <NavLinks>
            <NavLink activeOpacity={0.8} onPress={() => openPage('location')}>
              <Link>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={20}
                  color="rgba(0,0,0,.5)"
                />
                <LinkText>Church Locations</LinkText>
              </Link>
              <Ionicons name="ios-arrow-forward" size={20} color="#dedede" />
            </NavLink>
            <NavLink activeOpacity={0.8} onPress={() => openPage('prayer')}>
              <Link>
                <FontAwesome5 name="pray" size={20} color="rgba(0,0,0,.5)" />
                <LinkText>Prayer Request</LinkText>
              </Link>
              <Ionicons name="ios-arrow-forward" size={20} color="#dedede" />
            </NavLink>
            <NavLink activeOpacity={0.8} onPress={() => openPage('quotes')}>
              <Link>
                <FontAwesome
                  name="quote-right"
                  size={20}
                  color="rgba(0,0,0,.5)"
                />
                <LinkText>Shareable Quotes</LinkText>
              </Link>
              <Ionicons name="ios-arrow-forward" size={20} color="#dedede" />
            </NavLink>
            <NavLink activeOpacity={0.8} onPress={() => openPage('push')}>
              <Link>
                <MaterialCommunityIcons
                  name="bell-ring"
                  size={20}
                  color="rgba(0,0,0,.5)"
                />
                <LinkText>Push Notifications</LinkText>
              </Link>
              <Ionicons name="ios-arrow-forward" size={20} color="#dedede" />
            </NavLink>
            <NavLink activeOpacity={0.8} onPress={onSyncCloud}>
              <Link>
                <Ionicons
                  name="ios-cloud-done"
                  size={20}
                  color="rgba(0,0,0,.5)"
                />
                <LinkText>Cloud Sync</LinkText>
              </Link>
              <Ionicons name="ios-arrow-forward" size={20} color="#dedede" />
            </NavLink>
            <NavLink activeOpacity={0.8} onPress={() => openPage('music')}>
              <Link>
                <MaterialCommunityIcons
                  name="library-music"
                  size={20}
                  color="rgba(0,0,0,.5)"
                />
                <LinkText>Downloaded Sermons</LinkText>
              </Link>
              <Ionicons name="ios-arrow-forward" size={20} color="#dedede" />
            </NavLink>
            <NavLink activeOpacity={0.8} onPress={() => openPage('support')}>
              <Link>
                <FontAwesome5
                  name="hands-helping"
                  size={20}
                  color="rgba(0,0,0,.5)"
                />
                <LinkText>Technical Support</LinkText>
              </Link>
              <Ionicons name="ios-arrow-forward" size={20} color="#dedede" />
            </NavLink>
            <NavLink activeOpacity={0.8} onPress={() => openPage('legal')}>
              <Link>
                <FontAwesome name="legal" size={20} color="rgba(0,0,0,.5)" />
                <LinkText>Legal</LinkText>
              </Link>
              <Ionicons name="ios-arrow-forward" size={20} color="#dedede" />
            </NavLink>
          </NavLinks>
        </>
      ) : (
        <NotSignIn>
          <Label>You are not signed in.</Label>
          <Button
            text="sign in or register"
            onTap={login}
            style={{marginTop: 0}}
          />
        </NotSignIn>
      )}
    </Container>
  );
};

Profile.navigationOptions = {
  headerShown: false,
};

const Container = styled.ScrollView`
  flex: 1;
`;
const Header = styled.View`
  background: #efefef;
  padding-bottom: 30px;
`;
const Top = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const Btn = styled.TouchableOpacity`
  padding: 10px 5px 10px 15px;
`;
const ProfileImage = styled.View`
  justify-content: center;
  align-items: center;
`;
const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
const Name = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  font-size: 15px;
  color: #585858;
  text-align: center;
  margin-top: 8px;
`;
const NotSignIn = styled.View`
  width: 60%;
  align-self: center;
`;
const Label = styled.Text`
  font-family: 'BrandonGrotesque-Medium';
  font-size: 10px;
  text-align: center;
`;
const NavLinks = styled.View`
  background: #fff;
  padding: 0px 5px;
  width: 97%;
  align-self: center;
`;
const NavLink = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 18px 15px;
  border-bottom-color: rgba(200, 200, 200, 0.6);
  border-bottom-width: 1px;
`;
const Link = styled.View`
  flex-direction: row;
  align-items: center;
`;
const LinkText = styled.Text`
  padding-left: 25px;
  font-family: 'BrandonGrotesque-Regular';
  font-size: 15px;
  color: #afafaf;
`;

export default Profile;
