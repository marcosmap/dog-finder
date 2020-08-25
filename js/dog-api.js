class DogApi {

  async getDog(dog) {
    const api = await fetch(`https://dog.ceo/api/breed/${dog}/images/random`);
    const data = await api.json();

    return {
      data
    }
  }

}