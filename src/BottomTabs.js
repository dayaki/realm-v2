import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
  NotepadIcon,
  WalletIcon,
  CalendarIcon,
  UserIcon,
  FoldersIcon
} from "./constants/Icons";

// Screens
import Home from "./screens/Home";
import SermonDetails from "./screens/SermonDetails";
import Notes from "./screens/Notes";
import NoteDetails from "./screens/NoteDetails";
import NewNote from "./screens/NewNote";
import Events from "./screens/Events";
import EventDetails from "./screens/EventDetails";
import Give from "./screens/Give";
import GiveModal from "./screens/GiveModal";
import GiveOthers from "./screens/GiveOthers";
import Profile from "./screens/Profile";
import ChurchLocations from "./screens/ChurchLocations";
import ChurchDetails from "./screens/ChurchDetails";
import PrayerRequest from "./screens/PrayerRequest";
import Quotes from "./screens/Quotes";
import Notifications from "./screens/Notifications";
import Downloads from "./screens/Downloads";
import AudioPlayer from "./screens/AudioPlayer";
import Support from "./screens/Support";
import Legal from "./screens/Legal";

const SermonStack = createStackNavigator(
  {
    Home: Home,
    Details: SermonDetails,
    Player: AudioPlayer
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#eee",
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0
      },
      headerTintColor: "rgba(0,0,0,0.6)",
      headerTitleStyle: {
        fontFamily: "BrandonGrotesque-Medium"
      },
      headerShown: false
    }
  }
);
SermonStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => <FoldersIcon focused={focused} />
  };
};

const NotesStack = createStackNavigator(
  {
    Notes: Notes,
    ViewNote: NoteDetails,
    NewNote: NewNote
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#eee",
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0
      },
      headerTintColor: "rgba(0,0,0,0.6)",
      headerTitleStyle: {
        fontFamily: "BrandonGrotesque-Medium"
      }
    }
  }
);
NotesStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => <NotepadIcon focused={focused} />
  };
};

const GiveStack = createStackNavigator(
  {
    Give: Give,
    Modal: GiveModal,
    Others: GiveOthers
  },
  {
    mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#eee",
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0
      },
      headerTintColor: "rgba(0,0,0,0.6)",
      headerTitleStyle: {
        fontFamily: "BrandonGrotesque-Medium"
      }
    }
  }
);
GiveStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => <WalletIcon focused={focused} />
  };
};

const EventStack = createStackNavigator(
  {
    Events: {
      screen: Events
    },
    Details: EventDetails
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#eee",
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0
      },
      headerTintColor: "rgba(0,0,0,0.6)",
      headerTitleStyle: {
        fontFamily: "BrandonGrotesque-Medium"
      }
    }
  }
);
EventStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => <CalendarIcon focused={focused} />
  };
};

const UserStack = createStackNavigator(
  {
    Profile: Profile,
    Location: ChurchLocations,
    ChurchDetail: ChurchDetails,
    Prayer: PrayerRequest,
    Quotes: Quotes,
    Notifications: Notifications,
    Downloads: Downloads,
    Support: Support,
    Legal: Legal,
    AudioPlayer: AudioPlayer
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#eee",
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0
      },
      headerTintColor: "rgba(0,0,0,0.6)",
      headerTitleStyle: {
        fontFamily: "BrandonGrotesque-Medium"
      }
    }
  }
);
UserStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => <UserIcon focused={focused} />
  };
};

export default createBottomTabNavigator(
  {
    Home: SermonStack,
    Notes: NotesStack,
    Give: GiveStack,
    Events: EventStack,
    Profile: UserStack
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      showLabel: false
    }
  }
);
