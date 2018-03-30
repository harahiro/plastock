"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const SampleView_1 = require("./Views/SampleView");
class App extends React.Component {
    render() {
        return (<react_native_1.View style={styles.container}>
      <SampleView_1.default />
        <react_native_1.Text>harada!</react_native_1.Text>
        <react_native_1.Text>Changes you make will automatically reload.</react_native_1.Text>
        <react_native_1.Text>Shake your phone to open the developer menu.</react_native_1.Text>
      </react_native_1.View>);
    }
}
exports.default = App;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
