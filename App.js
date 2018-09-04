import React, { Component } from 'react';
import Gallery from './src/Gallery';

const images = [
  { key: 'Caption 4', source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
  { key: 'Caption 5', source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
  { key: 'Caption 6', source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
  { key: 'Caption 7', source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } },
  { key: 'Caption 8', source: { uri: 'http://i.imgur.com/BN8RVGa.jpg' } },
  { key: 'Caption 9', source: { uri: 'http://i.imgur.com/jXbhTbv.jpg' } },
  { key: 'Caption 10', source: { uri: 'http://i.imgur.com/30s12Qj.jpg' } },
  { key: 'Caption 11', source: { uri: 'http://i.imgur.com/4A1Q49y.jpg' } },
  { key: 'Caption 12', source: { uri: 'http://i.imgur.com/JfVDTF9.jpg' } },
  { key: 'Caption 13', source: { uri: 'http://i.imgur.com/Vv4bmwR.jpg' } }
]

export default class DemoGallery extends Component {

  render = () => <Gallery images={images} />
}
