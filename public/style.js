import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'backgroundImage': 'url("http://es.logicintegration.net/images/uploads/Messy-Wires-Cables.jpg")',
    'backgroundPosition': 'center top',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'main-container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'maxWidth': [{ 'unit': 'px', 'value': 800 }],
    'backgroundColor': 'grey',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  },
  '#commentForm': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  '#commentSection': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'eachArticle': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#B3B3B3' }],
    'borderRadius': '10px'
  }
});
