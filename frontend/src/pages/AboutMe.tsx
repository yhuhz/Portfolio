function AboutMe() {
  const name = "Julius Albert";
  if (name) {
    return <h3>My name is {name} and I am a software developer.</h3>;
  } else {
    return <h3>My name is unknown.</h3>;
  }
}

export default AboutMe;
