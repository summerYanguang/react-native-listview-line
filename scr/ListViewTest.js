/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height, scale} = Dimensions.get('window');

class ListViewTest extends Component {
    render() {
        let allData = [1,2,3,4];
        let allData1 = [1,2,3];

        allData1.push("null");


        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSource = this.ds.cloneWithRows(allData);
        this._dataSource = this.ds.cloneWithRows(allData1);

        return (
            <View style = {styles.container}>
                <ListView
                    contentContainerStyle = {styles.listView}
                    dataSource = {this.dataSource}
                    renderRow = {this.renderRow} />

                <ListView
                    contentContainerStyle = {styles.listView}
                    dataSource = {this._dataSource}
                    renderRow = {this._renderRow} />
            </View>
        );
    }
    renderRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <Cell/>
        );
    }

    _renderRow(rowData, sectionID, rowID, highlightRow) {

        let rowCell = (rowData == "null" ? <CellNull /> :
                        <Cell /> );
        return (
            rowCell
        );
    }

};

class Cell extends Component {

    render() {
        return(
            <View style = {styles.cell}>
            </View>
        );
    }
}
class CellNull extends Component {
    render() {
        return (
            <View style = {styles.cellNull}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    listView: {
        width: width - 80,
        marginVertical: 80,
        marginHorizontal: 40,
        flexWrap:'wrap',
        flexDirection:'row',
        backgroundColor: 'gray',
        paddingTop: 1,
        paddingLeft: 1
    },
    cellNull: {
        height: 41,
        width: (width-81)/2,
        backgroundColor: '#F5FCFF'
    },
    cell: {
        height: 40,
        width: (width-83)/2,
        backgroundColor: 'white',
        marginRight: 1,
        marginBottom: 1
    }
});


export {ListViewTest};
