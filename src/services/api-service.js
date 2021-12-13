export default class apiService {
  //https://swapi.dev/api

  _apiBase = "http://localhost:5000/api";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }
    return await res.json();
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return this._adaptPeople(res);
  };
  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`);
    return person;
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res;
  };
  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`);
    return starship;
  };

  _adaptPeople = (data) => {
    const result = [];

    data.forEach((person) => {
      const { pk, fields } = person;
      const {
        name: name,
        birth_year: birthYear,
        eye_color: eyeColor,
        height,
        gender,
        mass,
      } = fields;
      result.push({ pk, name, birthYear, eyeColor, height, gender, mass });
    });

    return result;
  };
}
