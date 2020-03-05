/**
 * Multiple ways to import:
 * 1- Importing a specific font as Icon
 * -- import Icon from './lib/Icons/FontAwesome'
 *
 * 2- Importing a specific font as its name
 * -- import {FontAwesome} from './lib/Icons'
 *
 * 3- Importing all fonts in an Icon object
 * -- import * as Icon from './lib/Icons'
 */

import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIconsI from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIconsI from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
import FontAwesome5I from 'react-native-vector-icons/FontAwesome5';
import FoundationI from 'react-native-vector-icons/Foundation';
import EvilIconsI from 'react-native-vector-icons/EvilIcons';
import OcticonsI from 'react-native-vector-icons/Octicons';
import IoniconsI from 'react-native-vector-icons/Ionicons';
import FeatherI from 'react-native-vector-icons/Feather';
import EntypoI from 'react-native-vector-icons/Entypo';
import ZocialI from 'react-native-vector-icons/Zocial';
import React from 'react';

export const MaterialCommunityIcons = props => (
  <MaterialCommunityIconsI {...props} />
);
export const SimpleLineIcons = props => <SimpleLineIconsI {...props} />;
export const MaterialIcons = props => <MaterialIconsI {...props} />;
export const FontAwesome = props => <FontAwesomeI {...props} />;
export const FontAwesome5 = props => <FontAwesome5I {...props} />;
export const Foundation = props => <FoundationI {...props} />;
export const EvilIcons = props => <EvilIconsI {...props} />;
export const Ionicons = props => <IoniconsI {...props} />;
export const Octicons = props => <OcticonsI {...props} />;
export const Feather = props => <FeatherI {...props} />;
export const Entypo = props => <EntypoI {...props} />;
export const Zocial = props => <ZocialI {...props} />;
