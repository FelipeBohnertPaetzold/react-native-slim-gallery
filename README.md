# react-native-slim-gallery
A pure js **gallery** component for React Native.

# Install?
*Using npm*
```npm install react-native-slim-gallery```

*or yarn (we <3 yarn)*

```yarn add react-native-slim-gallery```

# [Live demo here](https://snack.expo.io/@felipepaetzold/react-native-slim-gallery-simple-example)

# Simple use?

    import * as React from 'react'
    import Gallery from 'react-native-slim-gallery'
    
    const images = [
        {key: 'image-01', source: {uri: 'https://abduzeedo.com/sites/default/files/originals/0/05_7.jpg'}},
        {key: 'image-02', source: {uri: 'https://i0.wp.com/animalli.com/wp-content/uploads/2016/11/animals-horse-animal-beautiful-beauty-nature-pictures-for-christmas.jpg?resize=806%2C504'}},
        {key: 'image-03', source: {uri: 'https://jjrothmd.s3.amazonaws.com/CMS/739/smiling-camel-looking-in-lens-on-shutterstock-800x430__details.jpg'}}
    ]
    
    export default class App extends React.Component {
      render = () => <Gallery images={images} />
    }

# Component props

| Name | Type | Default | Required | Description
|--|--|--|--|--|
| images | array | | yes | Is the array of images you want to render |
| renderComponent | function | `props => <ImageBackground {...props} />` | no | It is the function that renders the image component, you can pass something custom as long as it works as the component `<Image />`
| initial | number | 0 | no | Sets the initial position of the gallery