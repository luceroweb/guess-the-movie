import { ScrollView, View, Text, Pressable, StyleSheet, useWindowDimensions, Platform } from 'react-native';

const CorrectAnswer = ({ videoId }) => {
  const { width } = useWindowDimensions();
  const handleNextQuestion = () => {
    // set scene state to question scene
  }

  return (
    // todo: replace paddingTop value with useSafeAreaInsets
    <ScrollView
      style={[styles.scrollViewOuter, { paddingTop: 20 }]} 
      contentContainerStyle={[
        styles.scrollViewContent,
        { marginHorizontal: width > 1000 ? 100 : 0 }
      ]}
    >
      <View style={[ styles.videoContainer, styles.boxShadow ]}>
        <Text>Video Trailer Component goes here</Text>
      </View>
      
      <View style={styles.textContainer}>
        <Text style={styles.h2}>Correct!</Text>
        <Text style={styles.h3}>Here's a trailer for your troubles</Text>
      </View>
     
      <Pressable
        style={[ styles.button, styles.boxShadow ]}
        onPress={handleNextQuestion}
      >
        <Text>Next Question!</Text>
      </Pressable>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  borderStyleDebug: {
    borderWidth: 2,
    borderColor: "black",
  },
  scrollViewOuter: {
    alignSelf: 'center',
    width: '100%'
  },
  scrollViewContent: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  boxShadow: {
    shadowOffset: {
      width: 2.0,
      height: 5.0,
    },
    shadowRadius: Platform.OS === 'web' ? 8.0 : 2.0,
    shadowOpacity: 0.4,
  },
  videoContainer: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
  button: {
    flexShrink: 1,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: 'lightblue',
  },
  textContainer: {
    flexGrow: 1, // pushes textContainer upwards
    marginVertical: 50,
    alignItems: 'center',
  },
  h2: {
    fontSize: 36,
    fontWeight: "bold",
    marginVertical: 10,
  },
  h3: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  }
});

export default CorrectAnswer;