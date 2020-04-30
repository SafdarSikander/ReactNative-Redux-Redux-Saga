import {NativeModules} from 'react-native';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const scriptURL = NativeModules.SourceCode.scriptURL;
const scriptHostname = scriptURL.split('://')[1].split(':')[0];

Reactotron.configure({host: scriptHostname})
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin());
if (__DEV__) {
  Reactotron.connect();
} // let's connect!

// Reactotron.clear();
// console.warn = Reactotron.log;
// console.log = Reactotron.log;

export default Reactotron;
