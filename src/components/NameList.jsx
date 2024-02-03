import Person from "./Person";

export default function NameList() {
  let personList = [
    {
      name:"Mithun",
      id: 1,
      age: 20,
      course: "React"
    },
    {
      name: "Virat",
      id: 2,
      age: 20,
      course: "Javascript"
    },

    {
      name:"Appu",
      id: 3,
      age: 20,
      course: "CSS"
    }
  ];
  let nameList = personList.map(person => <Person key={person.id} array={person} />);
  return <div>{nameList}</div>;
}
